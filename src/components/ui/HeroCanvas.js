import React, { useRef, useEffect } from "react";

/* ─── Constants ─────────────────────────────────────── */
const N = 1480;           // particles
const SAMPLE_S = 220;     // offscreen canvas size for shape sampling
const MORPH_MS = 4400;    // auto-morph interval
const SHAPE_ORDER = ["ios", "android", "react"];
const RGB = "61,220,132"; // #3DDC84

/* ─── Shape drawing helpers (on offscreen canvas) ─── */
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawApple(ctx, s) {
  ctx.fillStyle = "#fff";
  const cx = s / 2, cy = s * 0.54, r = s * 0.205;
  ctx.beginPath(); ctx.arc(cx - r * 0.62, cy, r, 0, 6.2832);
  ctx.arc(cx + r * 0.62, cy, r, 0, 6.2832); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.42, r * 1.24, r * 1.02, 0, 0, 6.2832); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.12, r * 1.12, r * 0.82, 0, 0, 6.2832); ctx.fill();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath(); ctx.arc(cx + r * 1.42, cy - r * 0.05, r * 0.62, 0, 6.2832); ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  ctx.beginPath(); ctx.ellipse(cx + r * 0.34, cy - r * 1.34, r * 0.2, r * 0.5, Math.PI * 0.28, 0, 6.2832); ctx.fill();
}

function drawAndroid(ctx, w, h) {
  ctx.fillStyle = "#fff";
  const cx = w / 2, u = h * 0.012, r = h * 0.205;
  const headCy = h * 0.5 - r * 0.5;
  ctx.beginPath(); ctx.arc(cx, headCy, r, Math.PI, 0); ctx.closePath(); ctx.fill();
  ctx.fillRect(cx - r, headCy - 1, r * 2, 2);
  ctx.lineWidth = u * 1.4; ctx.strokeStyle = "#fff"; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(cx - r * 0.48, headCy - r * 0.62); ctx.lineTo(cx - r * 0.78, headCy - r * 1.18); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + r * 0.48, headCy - r * 0.62); ctx.lineTo(cx + r * 0.78, headCy - r * 1.18); ctx.stroke();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath(); ctx.arc(cx - r * 0.36, headCy - r * 0.18, u * 1.5, 0, 6.2832); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + r * 0.36, headCy - r * 0.18, u * 1.5, 0, 6.2832); ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  const bodyTop = headCy + u * 1.8, bodyH = r * 1.5;
  rrect(ctx, cx - r, bodyTop, r * 2, bodyH, u * 2.4); ctx.fill();
  rrect(ctx, cx - r - u * 3.4, bodyTop + u, u * 2.5, bodyH * 0.7, u * 1.25); ctx.fill();
  rrect(ctx, cx + r + u * 0.9, bodyTop + u, u * 2.5, bodyH * 0.7, u * 1.25); ctx.fill();
  rrect(ctx, cx - r * 0.55, bodyTop + bodyH - u, u * 2.5, r * 0.72, u * 1.25); ctx.fill();
  rrect(ctx, cx + r * 0.55 - u * 2.5, bodyTop + bodyH - u, u * 2.5, r * 0.72, u * 1.25); ctx.fill();
}

function drawReact(ctx, w, h) {
  const cx = w / 2, cy = h / 2, rx = h * 0.345, ry = h * 0.135;
  ctx.strokeStyle = "#fff"; ctx.lineWidth = h * 0.03;
  for (let i = 0; i < 3; i++) {
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(i * Math.PI / 3);
    ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, 6.2832); ctx.stroke();
    ctx.restore();
  }
  ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx, cy, h * 0.045, 0, 6.2832); ctx.fill();
}

/* ─── Sample N target points from a logo drawing function ─── */
function sampleN(drawFn, n) {
  const cv = document.createElement("canvas");
  cv.width = SAMPLE_S; cv.height = SAMPLE_S;
  const ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, SAMPLE_S, SAMPLE_S);
  drawFn(ctx, SAMPLE_S, SAMPLE_S);
  const d = ctx.getImageData(0, 0, SAMPLE_S, SAMPLE_S).data;
  const pts = [];
  for (let y = 0; y < SAMPLE_S; y += 2)
    for (let x = 0; x < SAMPLE_S; x += 2)
      if (d[(y * SAMPLE_S + x) * 4 + 3] > 128) pts.push([x / SAMPLE_S, y / SAMPLE_S]);
  if (!pts.length) return Array.from({ length: n }, () => [0.5, 0.5]);
  return Array.from({ length: n }, () => {
    const p = pts[(Math.random() * pts.length) | 0];
    return [p[0] + (Math.random() - 0.5) * 0.012, p[1] + (Math.random() - 0.5) * 0.012];
  });
}

/* ─── Component ─────────────────────────────────────── */
const HeroCanvas = ({ onPlatformChange }) => {
  const canvasRef = useRef(null);
  const cbRef = useRef(onPlatformChange);
  useEffect(() => { cbRef.current = onPlatformChange; }, [onPlatformChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* mutable state in a plain object — never triggers re-renders */
    const S = {
      W: 0, H: 0, ctx: null, dpr: 1,
      parts: [],         // particles
      nodes: [],         // background network dots
      targets: null,     // { ios, android, react } arrays of [x,y] normalised
      shapeKey: "ios",
      shapeIdx: 0,
      lastMorph: performance.now(),
      mouse: { x: -9999, y: -9999, active: false },
      par: { x: 0, y: 0 },  // parallax smooth value
      boxCx: 0, boxCy: 0, boxSize: 0,
    };

    /* ── Canvas sizing ──────────────────────────── */
    const resize = () => {
      const wrap = canvas.parentElement;
      S.W = wrap ? wrap.offsetWidth : window.innerWidth;
      S.H = wrap ? wrap.offsetHeight : window.innerHeight;
      S.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = S.W * S.dpr;
      canvas.height = S.H * S.dpr;
      S.ctx = canvas.getContext("2d");
      S.ctx.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);
      S.boxCx = S.W * 0.74;
      S.boxCy = S.H * 0.20;          // upper quarter — above the code card
      S.boxSize = Math.min(S.W, S.H) * 0.36;  // sized to stay in upper zone
      if (S.nodes.length) initNodes();
    };

    /* ── Particles ──────────────────────────────── */
    const initParticles = () => {
      S.parts = Array.from({ length: N }, () => ({
        x: S.boxCx + (Math.random() - 0.5) * S.W,
        y: S.boxCy + (Math.random() - 0.5) * S.H,
        vx: 0, vy: 0,
        seed: Math.random() * Math.PI * 2,
        sz: 0.7 + Math.random() * 1.5,
        br: 0.45 + Math.random() * 0.55,
      }));
    };

    /* ── Background nodes ───────────────────────── */
    const initNodes = () => {
      const count = Math.max(28, Math.min(Math.round((S.W * S.H) / 24000), 92));
      S.nodes = Array.from({ length: count }, () => ({
        x: Math.random() * S.W, y: Math.random() * S.H,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    /* ── Build shape targets ────────────────────── */
    const buildTargets = () => {
      S.targets = {
        ios: sampleN(drawApple, N),
        android: sampleN(drawAndroid, N),
        react: sampleN(drawReact, N),
      };
    };

    /* ── Morph to next shape ────────────────────── */
    const morph = () => {
      S.shapeIdx = (S.shapeIdx + 1) % SHAPE_ORDER.length;
      S.shapeKey = SHAPE_ORDER[S.shapeIdx];
      S.lastMorph = performance.now();
      if (cbRef.current) cbRef.current(S.shapeKey);
      /* burst out */
      for (const p of S.parts) {
        const dx = p.x - S.boxCx, dy = p.y - S.boxCy, d = Math.hypot(dx, dy) || 1;
        const f = 2.4 + Math.random() * 3.2;
        p.vx += (dx / d) * f; p.vy += (dy / d) * f;
      }
    };

    /* ── Click burst ────────────────────────────── */
    const burst = (mx, my) => {
      for (const p of S.parts) {
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy) || 1;
        if (d < 280) { const f = ((280 - d) / 280) * 10; p.vx += (dx/d)*f; p.vy += (dy/d)*f; }
      }
    };

    /* ── Draw background node network ──────────── */
    const drawNodes = (ctx, ox, oy) => {
      const { nodes, W, H, mouse } = S;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x += W; else if (n.x > W) n.x -= W;
        if (n.y < 0) n.y += H; else if (n.y > H) n.y -= H;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 150) {
            ctx.strokeStyle = `rgba(${RGB},${((1 - d / 150) * 0.10).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x + ox, nodes[i].y + oy);
            ctx.lineTo(nodes[j].x + ox, nodes[j].y + oy);
            ctx.stroke();
          }
        }
      }
      if (mouse.active) {
        for (const n of nodes) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 200) {
            ctx.strokeStyle = `rgba(${RGB},${((1 - d / 200) * 0.24).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x + ox, n.y + oy);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = `rgba(${RGB},0.5)`;
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x + ox, n.y + oy, 1.2, 0, 6.2832); ctx.fill();
      }
    };

    /* ── Main RAF loop ──────────────────────────── */
    let rafId;
    const frame = (t) => {
      const { ctx, W, H, parts, targets, shapeKey, boxCx, boxCy, boxSize, mouse, par } = S;
      if (!ctx) { rafId = requestAnimationFrame(frame); return; }

      /* Auto-morph */
      if (t - S.lastMorph > MORPH_MS) morph();

      ctx.clearRect(0, 0, W, H);

      /* Smooth parallax */
      const tpx = mouse.active ? (mouse.x / W - 0.5) : 0;
      const tpy = mouse.active ? (mouse.y / H - 0.5) : 0;
      par.x += (tpx - par.x) * 0.06;
      par.y += (tpy - par.y) * 0.06;
      const nodeOx = par.x * -8, nodeOy = par.y * -8;
      const offx = par.x * -20, offy = par.y * -20;

      drawNodes(ctx, nodeOx, nodeOy);

      /* Radial glow (pulses on morph) */
      const pulse = Math.max(0, 1 - (t - S.lastMorph) / 1500);
      const gx = boxCx + offx, gy = boxCy + offy;
      const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, boxSize * 0.78);
      gr.addColorStop(0, `rgba(${RGB},${(0.05 + 0.13 * pulse).toFixed(3)})`);
      gr.addColorStop(1, `rgba(${RGB},0)`);
      ctx.fillStyle = gr;
      ctx.beginPath(); ctx.arc(gx, gy, boxSize * 0.78, 0, 6.2832); ctx.fill();

      /* Particles */
      const tg = targets[shapeKey];
      const bx = boxCx - boxSize / 2 + offx;
      const by = boxCy - boxSize / 2 + offy;
      const mx = mouse.x, my = mouse.y, active = mouse.active;

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const a = tg[i] || [0.5, 0.5];
        const tx = bx + a[0] * boxSize, ty = by + a[1] * boxSize;

        /* Spring toward target */
        p.vx += (tx - p.x) * 0.045; p.vy += (ty - p.y) * 0.045;
        p.vx *= 0.82; p.vy *= 0.82;

        /* Cursor repulsion */
        if (active) {
          const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / 114) * 2.4;
            p.vx += (dx / d) * f; p.vy += (dy / d) * f;
          }
        }

        p.x += p.vx; p.y += p.vy;

        const wob = Math.sin(t * 0.001 + p.seed) * 0.5;
        const tw = 0.55 + 0.45 * Math.sin(t * 0.0016 + p.seed * 3);
        ctx.fillStyle = `rgba(${RGB},${(0.58 * p.br * tw).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(p.x + wob, p.y + wob, p.sz, 0, 6.2832); ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      rafId = requestAnimationFrame(frame);
    };

    /* ── Event listeners ────────────────────────── */
    const onMove = (e) => {
      const r = (canvas.parentElement || document.documentElement).getBoundingClientRect();
      S.mouse.x = e.clientX - r.left;
      S.mouse.y = e.clientY - r.top;
      S.mouse.active = true;
    };
    const onLeave = () => { S.mouse.active = false; };
    const onClick = (e) => {
      const r = (canvas.parentElement || document.documentElement).getBoundingClientRect();
      burst(e.clientX - r.left, e.clientY - r.top);
      morph();
    };

    /* ── Init ───────────────────────────────────── */
    resize();
    buildTargets();
    initParticles();
    initNodes();
    rafId = requestAnimationFrame(frame);

    window.addEventListener("resize", resize, { passive: true });
    const el = canvas.parentElement || document;
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("click", onClick);
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

export default HeroCanvas;
