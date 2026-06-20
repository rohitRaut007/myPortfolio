import React, { useRef, useEffect } from "react";

const COUNT = 100;
const LINE_DIST = 130;
const LINE_DIST_SQ = LINE_DIST * LINE_DIST;
const MAX_SPEED = 0.65;
const BASE_SPEED = 0.28;

const ParticleField = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let dots = [];

    const resize = () => {
      const parent = canvas.parentElement;
      W = canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      H = canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 55 : COUNT;

    dots = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * BASE_SPEED * 2,
      vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      r: 1.0 + Math.random() * 1.4,
    }));

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    if (prefersReduced) {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(61,220,132,0.22)";
        ctx.fill();
      }
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }

    let running = true;

    const render = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Subtle mouse attraction — dots gently drift toward cursor
        const mdx = mx - d.x;
        const mdy = my - d.y;
        const mdSq = mdx * mdx + mdy * mdy;
        if (mdSq < 200 * 200 && mdSq > 0) {
          const md = Math.sqrt(mdSq);
          d.vx += (mdx / md) * 0.012;
          d.vy += (mdy / md) * 0.012;
        }

        // Speed cap
        const spd = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        if (spd > MAX_SPEED) {
          d.vx = (d.vx / spd) * MAX_SPEED;
          d.vy = (d.vy / spd) * MAX_SPEED;
        }

        d.x += d.vx;
        d.y += d.vy;

        // Wrap edges
        if (d.x < -6) d.x = W + 6;
        else if (d.x > W + 6) d.x = -6;
        if (d.y < -6) d.y = H + 6;
        else if (d.y > H + 6) d.y = -6;

        // Connect nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dx = d.x - d2.x;
          const dy = d.y - d2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < LINE_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `rgba(61,220,132,${(1 - dist / LINE_DIST) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(61,220,132,0.22)";
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default ParticleField;
