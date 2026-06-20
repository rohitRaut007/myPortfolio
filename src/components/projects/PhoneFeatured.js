import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import PhoneFallback from "./PhoneFallback";

const Phone3D = lazy(() => import("./Phone3D"));

const PhoneFeatured = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [activeApp] = useState("benchmark");
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mb-16 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #0c140c, #0f160f)",
        boxShadow: "10px 10px 19px #050a05, -10px -10px 19px #0f170f",
        border: "1px solid rgba(61,220,132,0.12)",
      }}
    >
      {/* Featured badge */}
      <div className="px-6 pt-5 pb-0">
        <span
          className="text-xs font-titleFont uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: "rgba(61,220,132,0.1)",
            color: "#3DDC84",
            border: "1px solid rgba(61,220,132,0.3)",
          }}
        >
          Featured — Live on App Store &amp; Play Store
        </span>
      </div>

      {/* Main split layout */}
      <div className="flex flex-col lgl:flex-row gap-0">
        {/* Left — Case study text */}
        <div className="w-full lgl:w-1/2 p-6 lgl:p-10 flex flex-col justify-between gap-6">
          <div>
            <h3
              className="text-3xl lgl:text-4xl font-bold font-titleFont text-white mb-2"
              style={{ lineHeight: 1.2 }}
            >
              Sports Tech Platform{" "}
              <span style={{ color: "#3DDC84", fontSize: "0.75em" }}>
                for Athlete Monitoring &amp; Performance
              </span>
            </h3>
            <p className="text-sm font-bodyFont" style={{ color: "#9ca3af" }}>
              React Native · Django · AWS · Docker · OpenAI API
            </p>
          </div>

          <p className="text-sm font-bodyFont leading-7" style={{ color: "#c4cfde" }}>
            Built end-to-end from scratch — a cross-platform sports tech
            platform for athlete performance tracking and monitoring, shipped to
            both app stores. Owned everything: schema design, API, mobile client,
            CI/CD pipeline, and cloud infrastructure.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "< 1s", label: "App load time", sub: "down from ~2s" },
              { stat: "30%", label: "Fewer API calls", sub: "via React Query caching" },
              { stat: "AWS", label: "S3 · EC2 · Lambda", sub: "full cloud stack" },
              { stat: "AI", label: "OpenAI integration", sub: "content recommendations" },
            ].map(({ stat, label, sub }) => (
              <div
                key={label}
                className="rounded-lg p-3"
                style={{
                  background: "rgba(61,220,132,0.05)",
                  border: "1px solid rgba(61,220,132,0.15)",
                }}
              >
                <p
                  className="text-xl font-bold font-titleFont"
                  style={{ color: "#3DDC84" }}
                >
                  {stat}
                </p>
                <p className="text-xs font-medium text-white mt-0.5">{label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Tech bullets */}
          <ul className="flex flex-col gap-2">
            {[
              "Django REST Framework + Celery task queues — async notifications and batch report generation decoupled from the request cycle, keeping API p95 under 200 ms",
              "Full offline-first data layer via SQLite + Hive: athlete records available in zero-connectivity environments, synced to the server on reconnect",
              "GitHub Actions CI/CD pipeline: lint → unit test → build → zero-downtime deploy to EC2, blocking any PR that breaks the test suite",
              "Pytest covering all Django service and API layers; Jest + React Native Testing Library for mobile — both gates enforced in CI before any merge",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-bodyFont"
                style={{ color: "#c4cfde" }}
              >
                <span style={{ color: "#3DDC84", marginTop: "2px", flexShrink: 0 }}>
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Store links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/in/app/benchmark-better-every-day/id6758438556"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-bodyFont transition-all duration-300"
              style={{
                background: "#0c140c",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3DDC84";
                e.currentTarget.style.color = "#3DDC84";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              🍎 App Store
            </a>
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-bodyFont transition-all duration-300"
              style={{
                background: "#0c140c",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3DDC84";
                e.currentTarget.style.color = "#3DDC84";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              ▶ Play Store
            </a>
          </div>
        </div>

        {/* Right — 3D Phone */}
        <div className="w-full lgl:w-1/2 flex items-center justify-center p-6 lgl:p-10">
          <div style={{ width: "100%", height: "480px" }}>
            {shouldLoad ? (
              <Suspense fallback={<PhoneFallback activeApp={activeApp} />}>
                <Phone3D activeApp={activeApp} />
              </Suspense>
            ) : (
              <PhoneFallback activeApp={activeApp} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFeatured;
