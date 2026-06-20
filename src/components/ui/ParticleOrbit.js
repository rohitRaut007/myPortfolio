import React, { useRef, useEffect, useCallback } from "react";

/**
 * Renders an SVG logo as a constellation of orbiting particles.
 * Accepts `svgContent` (raw SVG string) → creates a Blob URL so the canvas
 * can always read pixels, with zero CORS / taint issues.
 */
const ParticleOrbit = ({
  svgContent,
  width = 180,
  height = 240,
  particleColor = "#3DDC84",
  glowColor = "#3DDC84",
  orbitSpeed = 0.008,
  sampleStep = 3,
  bgColor = "#060b06",
  trailColor = "rgba(6,11,6,0.28)",
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ particles: [], t: 0, mouse: null });

  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    stateRef.current.mouse = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    stateRef.current.mouse = null;
  }, []);

  useEffect(() => {
    if (!svgContent) return;

    const state = stateRef.current;
    let running = true;
    let blobUrl = null;

    // Blob URL: always same-origin, canvas can read pixels without taint
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    blobUrl = URL.createObjectURL(blob);

    const img = new Image();

    img.onload = () => {
      /* ── Offscreen pixel sampling ────────────────────────────── */
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const offCtx = off.getContext("2d", { willReadFrequently: true });

      // Dark background so transparent SVG areas stay dark
      offCtx.fillStyle = bgColor;
      offCtx.fillRect(0, 0, width, height);

      // Center the square logo in the rectangular canvas
      const pad = 10;
      const logoSize = width - pad * 2;
      const logoY = (height - logoSize) / 2;
      offCtx.drawImage(img, pad, logoY, logoSize, logoSize);

      const { data } = offCtx.getImageData(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const particles = [];

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const i = (y * width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          const brightness = (r + g + b) / 3;

          // Skip transparent or near-black background pixels
          if (a < 30 || brightness < 18) continue;

          const dx = x - cx;
          const dy = y - cy;
          const radius = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          particles.push({
            angle,
            radius,
            // slight per-particle speed so edges drift very slowly
            speed: orbitSpeed * (0.88 + Math.random() * 0.24),
            size: 1.3 + Math.random() * 1.1,
            baseAlpha: 0.6 + Math.random() * 0.4,
            breathePhase: Math.random() * Math.PI * 2,
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.025 + Math.random() * 0.04,
          });
        }
      }

      state.particles = particles;

      /* ── Render loop ─────────────────────────────────────────── */
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      // Stamp background so first frame is clean
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      const render = () => {
        if (!running) return;
        state.t += 1;
        const { particles, t, mouse } = state;

        // Persistent fade → comet trails
        ctx.fillStyle = trailColor;
        ctx.fillRect(0, 0, width, height);

        for (const p of particles) {
          p.angle += p.speed;

          // Radial breathing (±2px slow sine)
          const r = p.radius + Math.sin(t * 0.015 + p.breathePhase) * 2;
          let px = cx + Math.cos(p.angle) * r;
          let py = cy + Math.sin(p.angle) * r;

          // Mouse repulsion
          if (mouse) {
            const mdx = px - mouse.x;
            const mdy = py - mouse.y;
            const d = Math.sqrt(mdx * mdx + mdy * mdy);
            if (d < 65 && d > 0) {
              const force = ((65 - d) / 65) * 24;
              px += (mdx / d) * force;
              py += (mdy / d) * force;
            }
          }

          // Twinkle
          const twinkle = 0.7 + 0.3 * Math.sin(t * p.twinkleSpeed + p.twinklePhase);
          const a = p.baseAlpha * twinkle;

          // Outer glow
          ctx.globalAlpha = a * 0.18;
          ctx.fillStyle = glowColor;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Mid glow
          ctx.globalAlpha = a * 0.45;
          ctx.fillStyle = glowColor;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 1.7, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.globalAlpha = a;
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
        rafRef.current = requestAnimationFrame(render);
      };

      rafRef.current = requestAnimationFrame(render);
    };

    img.onerror = () => {
      // Fallback: glowing ring of particles so something always renders
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const count = 80;
      const ring = Array.from({ length: count }, (_, i) => ({
        angle: (i / count) * Math.PI * 2,
        radius: Math.min(cx, cy) * 0.6,
        speed: orbitSpeed,
        size: 1.5,
        baseAlpha: 0.8,
        breathePhase: (i / count) * Math.PI * 2,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.04,
      }));
      state.particles = ring;

      const render = () => {
        if (!running) return;
        state.t += 1;
        ctx.fillStyle = trailColor;
        ctx.fillRect(0, 0, width, height);
        const { particles, t } = state;
        for (const p of particles) {
          p.angle += p.speed;
          const r = p.radius + Math.sin(t * 0.015 + p.breathePhase) * 3;
          const px = cx + Math.cos(p.angle) * r;
          const py = cy + Math.sin(p.angle) * r;
          const a = p.baseAlpha * (0.7 + 0.3 * Math.sin(t * p.twinkleSpeed + p.twinklePhase));
          ctx.globalAlpha = a * 0.2;
          ctx.fillStyle = glowColor;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = a;
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        rafRef.current = requestAnimationFrame(render);
      };
      rafRef.current = requestAnimationFrame(render);
    };

    img.src = blobUrl;

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      state.particles = [];
    };
  }, [svgContent, width, height, orbitSpeed, sampleStep, particleColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "block", cursor: "crosshair" }}
    />
  );
};

export default ParticleOrbit;
