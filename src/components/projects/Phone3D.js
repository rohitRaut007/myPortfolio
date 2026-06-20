import React, { useRef, useEffect, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import PhoneFallback from "./PhoneFallback";

// The mesh node name for the iPhone screen in scene.glb (adrianhajdin/iphone)
const SCREEN_NODE = "xXDHkMplTIDAXLN";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Polished athlete performance dashboard — vivid dark-mode fitness app screenshot
function makeBenchmarkTexture() {
  const W = 512, H = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  ctx.textAlign = "center";

  const G = "#3DDC84";
  const G2 = "#00e5a0";
  const BG = "#0A1628";          // richer dark blue-black (more vibrant than #0d1117)
  const CARD = "#111d2e";        // card surface with slight blue tint
  const BORDER = "rgba(61,220,132,0.22)";
  const TEXT1 = "#ffffff";
  const TEXT2 = "#94a3b8";

  // ── Background with subtle gradient ──────────────────────────────────────
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, "#0A1628");
  bgGrad.addColorStop(0.5, "#0d1a1a");
  bgGrad.addColorStop(1, "#0A1628");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Subtle green ambient glow at center
  const glow = ctx.createRadialGradient(W / 2, 360, 0, W / 2, 360, 280);
  glow.addColorStop(0, "rgba(61,220,132,0.07)");
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // ── Status bar ──────────────────────────────────────────────────────────
  ctx.fillStyle = TEXT2;
  ctx.font = "bold 24px -apple-system, Arial";
  ctx.textAlign = "left";
  ctx.fillText("9:41", 28, 52);

  // Battery icon (right)
  ctx.fillStyle = G;
  ctx.textAlign = "right";
  ctx.font = "bold 20px -apple-system, Arial";
  ctx.fillText("▮▮▮▮", W - 28, 52);
  ctx.textAlign = "center";

  // ── App header with gradient bar ─────────────────────────────────────────
  const headerGrad = ctx.createLinearGradient(0, 60, 0, 120);
  headerGrad.addColorStop(0, "rgba(61,220,132,0.12)");
  headerGrad.addColorStop(1, "transparent");
  ctx.fillStyle = headerGrad;
  ctx.fillRect(0, 60, W, 60);

  ctx.fillStyle = TEXT1;
  ctx.font = "bold 30px -apple-system, Arial";
  ctx.fillText("Sports Tech", W / 2, 106);

  // Avatar circle with glow
  ctx.save();
  ctx.shadowBlur = 12;
  ctx.shadowColor = G;
  ctx.beginPath();
  ctx.arc(W - 52, 96, 22, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(61,220,132,0.18)";
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = G;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(W - 52, 96, 22, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = G;
  ctx.font = "bold 18px Arial";
  ctx.fillText("R", W - 52, 103);

  // ── Greeting card ─────────────────────────────────────────────────────────
  ctx.fillStyle = CARD;
  rr(ctx, 24, 126, W - 48, 74, 16);
  ctx.fill();
  ctx.strokeStyle = BORDER;
  ctx.lineWidth = 1.5;
  rr(ctx, 24, 126, W - 48, 74, 16);
  ctx.stroke();

  ctx.fillStyle = TEXT2;
  ctx.font = "18px -apple-system, Arial";
  ctx.textAlign = "left";
  ctx.fillText("Good morning,", 44, 156);
  ctx.fillStyle = TEXT1;
  ctx.font = "bold 22px -apple-system, Arial";
  ctx.fillText("Ready to crush today? 💪", 44, 184);
  ctx.textAlign = "center";

  // ── Circular progress ring with GLOW ─────────────────────────────────────
  const cx = W / 2, cy = 360, R_outer = 92, R_inner = 66;
  const progress = 0.72;

  // Track
  ctx.beginPath();
  ctx.arc(cx, cy, R_outer - (R_outer - R_inner) / 2, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(61,220,132,0.1)";
  ctx.lineWidth = R_outer - R_inner;
  ctx.stroke();

  // Glowing progress arc
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + Math.PI * 2 * progress;
  const grad = ctx.createLinearGradient(cx - R_outer, cy, cx + R_outer, cy);
  grad.addColorStop(0, G);
  grad.addColorStop(1, G2);

  ctx.save();
  ctx.shadowBlur = 18;
  ctx.shadowColor = G;
  ctx.beginPath();
  ctx.arc(cx, cy, R_outer - (R_outer - R_inner) / 2, startAngle, endAngle);
  ctx.strokeStyle = grad;
  ctx.lineWidth = R_outer - R_inner;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();
  ctx.lineCap = "butt";

  // Outer decorative ring
  ctx.beginPath();
  ctx.arc(cx, cy, R_outer + 8, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(61,220,132,0.05)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Centre text
  ctx.fillStyle = G;
  ctx.font = "bold 40px -apple-system, Arial";
  ctx.fillText("72%", cx, cy + 10);
  ctx.fillStyle = TEXT2;
  ctx.font = "16px -apple-system, Arial";
  ctx.fillText("Daily Goal", cx, cy + 32);

  // Kcal label below ring
  ctx.fillStyle = TEXT2;
  ctx.font = "17px -apple-system, Arial";
  ctx.fillText("1,152 / 1,600 kcal", cx, cy + 124);

  // ── 3 stat chips with accent color per type ───────────────────────────────
  const stats = [
    { val: "8.2k", label: "Steps", color: G },
    { val: "47", label: "Active min", color: "#fbbf24" },
    { val: "124", label: "BPM", color: "#f87171" },
  ];
  const chipW = 136, chipH = 76, chipGap = 10;
  const totalW = chipW * 3 + chipGap * 2;
  const chipStartX = (W - totalW) / 2;
  const chipY = 516;

  stats.forEach(({ val, label, color }, i) => {
    const x = chipStartX + i * (chipW + chipGap);

    ctx.fillStyle = CARD;
    rr(ctx, x, chipY, chipW, chipH, 14);
    ctx.fill();

    // Colored top accent bar
    const barGrad = ctx.createLinearGradient(x, chipY, x + chipW, chipY);
    barGrad.addColorStop(0, color);
    barGrad.addColorStop(1, "transparent");
    ctx.fillStyle = barGrad;
    rr(ctx, x, chipY, chipW, 3, 2);
    ctx.fill();

    ctx.strokeStyle = `${color}33`;
    ctx.lineWidth = 1;
    rr(ctx, x, chipY, chipW, chipH, 14);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = "bold 28px -apple-system, Arial";
    ctx.fillText(val, x + chipW / 2, chipY + 40);
    ctx.fillStyle = TEXT2;
    ctx.font = "13px -apple-system, Arial";
    ctx.fillText(label, x + chipW / 2, chipY + 60);
  });

  // ── Weekly activity bar chart ─────────────────────────────────────────────
  const chartY = 626;
  ctx.fillStyle = TEXT1;
  ctx.font = "bold 20px -apple-system, Arial";
  ctx.textAlign = "left";
  ctx.fillText("Weekly Activity", 28, chartY);
  ctx.textAlign = "center";

  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const heights = [68, 44, 80, 56, 92, 48, 32];
  const barW = 46, barGap = 18;
  const barAreaW = barW * 7 + barGap * 6;
  const barStartX = (W - barAreaW) / 2;
  const barBaseY = chartY + 112;

  days.forEach((day, i) => {
    const x = barStartX + i * (barW + barGap);
    const h = heights[i];
    const isToday = i === 4;

    if (isToday) {
      // Glowing bar for today
      ctx.save();
      ctx.shadowBlur = 10;
      ctx.shadowColor = G;
      const barG = ctx.createLinearGradient(0, barBaseY - h, 0, barBaseY);
      barG.addColorStop(0, G2);
      barG.addColorStop(1, G);
      ctx.fillStyle = barG;
      rr(ctx, x, barBaseY - h, barW, h, 7);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = "rgba(61,220,132,0.2)";
      rr(ctx, x, barBaseY - h, barW, h, 7);
      ctx.fill();
    }

    ctx.fillStyle = isToday ? G : TEXT2;
    ctx.font = isToday ? "bold 15px -apple-system, Arial" : "14px -apple-system, Arial";
    ctx.fillText(day, x + barW / 2, barBaseY + 20);
  });

  // ── Today's sessions ─────────────────────────────────────────────────────
  const sessY = 806;
  ctx.fillStyle = TEXT1;
  ctx.font = "bold 20px -apple-system, Arial";
  ctx.textAlign = "left";
  ctx.fillText("Today's Sessions", 28, sessY);
  ctx.textAlign = "center";

  const sessions = [
    { name: "Strength Training", duration: "45 min", rating: "4.8" },
    { name: "Recovery Run", duration: "20 min", rating: "4.5" },
  ];
  sessions.forEach(({ name, duration, rating }, i) => {
    const sy = sessY + 16 + i * 68;
    ctx.fillStyle = CARD;
    rr(ctx, 24, sy, W - 48, 56, 12);
    ctx.fill();
    ctx.strokeStyle = BORDER;
    ctx.lineWidth = 1;
    rr(ctx, 24, sy, W - 48, 56, 12);
    ctx.stroke();

    // Glowing play dot
    ctx.save();
    ctx.shadowBlur = 8;
    ctx.shadowColor = G;
    ctx.fillStyle = G;
    ctx.beginPath();
    ctx.arc(54, sy + 28, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = BG;
    ctx.font = "bold 14px Arial";
    ctx.fillText("▶", 55, sy + 33);

    ctx.fillStyle = TEXT1;
    ctx.font = "bold 17px -apple-system, Arial";
    ctx.textAlign = "left";
    ctx.fillText(name, 78, sy + 24);
    ctx.fillStyle = TEXT2;
    ctx.font = "13px -apple-system, Arial";
    ctx.fillText(duration, 78, sy + 44);

    ctx.fillStyle = G;
    ctx.textAlign = "right";
    ctx.font = "bold 16px -apple-system, Arial";
    ctx.fillText(`★ ${rating}`, W - 32, sy + 33);
    ctx.textAlign = "center";
  });

  // ── Bottom navigation ─────────────────────────────────────────────────────
  ctx.fillStyle = CARD;
  ctx.fillRect(0, 944, W, 80);

  // Top border with glow
  const navBorder = ctx.createLinearGradient(0, 944, W, 944);
  navBorder.addColorStop(0, "transparent");
  navBorder.addColorStop(0.5, G);
  navBorder.addColorStop(1, "transparent");
  ctx.strokeStyle = navBorder;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 944); ctx.lineTo(W, 944);
  ctx.stroke();

  const navItems = [
    { icon: "⌂", label: "Home", active: true },
    { icon: "↗", label: "Stats", active: false },
    { icon: "◎", label: "Goals", active: false },
    { icon: "○", label: "Profile", active: false },
  ];
  navItems.forEach(({ icon, label, active }, i) => {
    const nx = 64 + i * 128;
    if (active) {
      ctx.save();
      ctx.shadowBlur = 10;
      ctx.shadowColor = G;
      ctx.fillStyle = G;
      ctx.font = "bold 24px Arial";
      ctx.fillText(icon, nx, 978);
      ctx.restore();
      ctx.fillStyle = G;
    } else {
      ctx.fillStyle = TEXT2;
      ctx.font = "bold 24px Arial";
      ctx.fillText(icon, nx, 978);
    }
    ctx.fillStyle = active ? G : TEXT2;
    ctx.font = "13px -apple-system, Arial";
    ctx.fillText(label, nx, 1002);
    if (active) {
      ctx.save();
      ctx.shadowBlur = 6;
      ctx.shadowColor = G;
      ctx.fillStyle = G;
      ctx.beginPath();
      ctx.arc(nx, 946, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  });

  return new THREE.CanvasTexture(canvas);
}

// Video texture hook – loads numa_mockup.mp4 as a Three.js VideoTexture
function useVideoTexture() {
  const [texture, setTexture] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/numa_mockup.mp4";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    videoRef.current = video;

    video.addEventListener("canplay", () => {
      const vt = new THREE.VideoTexture(video);
      vt.minFilter = THREE.LinearFilter;
      vt.magFilter = THREE.LinearFilter;
      setTexture(vt);
      video.play().catch(() => {});
    });

    video.load();
    return () => {
      video.pause();
      video.src = "";
    };
  }, []);

  return texture;
}

// The real iPhone 15 Pro model component
function IPhoneModel({ screenTexture }) {
  const { scene, nodes } = useGLTF("/models/iphone.glb");
  const groupRef = useRef();

  // Very gentle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    }
  });

  // Apply screen texture whenever it changes
  useEffect(() => {
    if (!nodes) return;
    const screenMesh = nodes[SCREEN_NODE];
    if (screenMesh && screenTexture) {
      screenMesh.material = screenMesh.material.clone();
      screenMesh.material.map = screenTexture;
      screenMesh.material.emissiveMap = screenTexture;
      screenMesh.material.emissive = new THREE.Color(0x3DDC84);
      screenMesh.material.emissiveIntensity = 0.12;
      screenMesh.material.roughness = 0;
      screenMesh.material.needsUpdate = true;
    }
  }, [nodes, screenTexture]);

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={[15, 15, 15]}
        position={[0, -0.8, 0]}
        rotation={[0, Math.PI / 6, 0]}
      />
    </group>
  );
}

// Preload so it starts fetching immediately on mount
useGLTF.preload("/models/iphone.glb");

function Scene({ activeApp }) {
  const benchmarkTexture = useMemo(() => makeBenchmarkTexture(), []);
  const videoTexture = useVideoTexture();

  const screenTexture =
    activeApp === "benchmark"
      ? benchmarkTexture
      : videoTexture;

  return (
    <>
      {/* Environment map for metallic reflections — makes the titanium finish look real */}
      <Environment preset="city" />

      {/* Key light — slightly warm */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
        color="#fff8f0"
        castShadow
      />
      {/* Green accent rim light from below-right — ties to designColor */}
      <pointLight
        position={[3, -3, 3]}
        intensity={1.2}
        color="#3DDC84"
      />
      {/* Cool fill from the left */}
      <pointLight
        position={[-6, 4, 2]}
        intensity={0.8}
        color="#c4cfde"
      />
      {/* Subtle ambient */}
      <ambientLight intensity={0.25} />

      <IPhoneModel screenTexture={screenTexture} />

      {/* Soft shadow under the phone */}
      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.4}
        scale={8}
        blur={2.5}
        far={3}
        color="#000000"
      />

      <OrbitControls
        target={[0, -0.8, 0]}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </>
  );
}

class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return <PhoneFallback activeApp={this.props.activeApp} />;
    return this.props.children;
  }
}

const Phone3D = ({ activeApp = "meditation" }) => {
  if (!hasWebGL()) {
    return <PhoneFallback activeApp={activeApp} />;
  }

  return (
    <WebGLErrorBoundary activeApp={activeApp}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        camera={{ position: [0, 0, 4], fov: 40 }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene activeApp={activeApp} />
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  );
};

export default Phone3D;
