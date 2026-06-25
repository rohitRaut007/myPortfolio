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
        background: "var(--c-bg-card)",
        boxShadow: "none",
        border: "1px solid var(--c-border)",
      }}
    >
      {/* Featured badge */}
      <div className="px-6 pt-5 pb-0">
        <span
          className="text-xs font-titleFont uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: "var(--c-border)",
            color: "var(--c-accent)",
            border: "1px solid var(--c-border-s)",
          }}
        >
          Live on App Store &amp; Play Store
        </span>
      </div>

      {/* Main split layout */}
      <div className="flex flex-col lgl:flex-row gap-0">
        {/* Left — Case study text */}
        <div className="w-full lgl:w-1/2 p-4 sml:p-6 lgl:p-10 flex flex-col justify-between gap-5 sml:gap-6">
          <div>
            <h3
              className="text-2xl sml:text-3xl lgl:text-4xl font-bold font-titleFont mb-2"
              style={{ lineHeight: 1.2, color: "var(--c-text-1)" }}
            >
              Sports Tech Platform{" "}
              <span style={{ color: "var(--c-accent)", fontSize: "0.75em" }}>
                for Athlete Monitoring &amp; Performance
              </span>
            </h3>
            <p className="text-sm font-bodyFont" style={{ color: "var(--c-text-3)" }}>
              React Native · Django · AWS · Docker · OpenAI API
            </p>
          </div>

          <p className="text-sm font-bodyFont leading-7" style={{ color: "var(--c-text-2)" }}>
            Built a cross-platform sports tech platform for athlete performance
            tracking from the ground up and shipped it to both stores. Handled
            everything: schema design, the API, mobile client, CI/CD pipeline,
            and cloud infra.
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
                  background: "var(--c-bg-card-2)",
                  border: "1px solid var(--c-border)",
                }}
              >
                <p
                  className="text-xl font-bold font-titleFont"
                  style={{ color: "var(--c-accent)" }}
                >
                  {stat}
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: "var(--c-text-1)" }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--c-text-4)" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Tech bullets */}
          <ul className="flex flex-col gap-2">
            {[
              "Django REST Framework with Celery for async work: notifications and batch report generation run off the request cycle, keeping API p95 under 200ms",
              "Full offline-first data layer via SQLite + Hive: athlete records available in zero-connectivity environments, synced to the server on reconnect",
              "GitHub Actions CI/CD pipeline: lint → unit test → build → zero-downtime deploy to EC2, blocking any PR that breaks the test suite",
              "Pytest covering all Django service and API layers; Jest + React Native Testing Library for mobile. Both gates run in CI and block merges on failure",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-bodyFont"
                style={{ color: "var(--c-text-2)" }}
              >
                <span style={{ color: "var(--c-accent)", marginTop: "2px", flexShrink: 0 }}>
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
                background: "var(--c-bg-card)",
                color: "var(--c-text-1)",
                border: "1px solid var(--c-border-s)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--c-accent)";
                e.currentTarget.style.color = "var(--c-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border-s)";
                e.currentTarget.style.color = "var(--c-text-1)";
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
                background: "var(--c-bg-card)",
                color: "var(--c-text-1)",
                border: "1px solid var(--c-border-s)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--c-accent)";
                e.currentTarget.style.color = "var(--c-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border-s)";
                e.currentTarget.style.color = "var(--c-text-1)";
              }}
            >
              ▶ Play Store
            </a>
          </div>
        </div>

        {/* Right — 3D Phone */}
        <div className="w-full lgl:w-1/2 flex items-center justify-center p-4 sml:p-6 lgl:p-10">
          <div style={{ width: "100%", height: "clamp(280px, 55vw, 480px)" }}>
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
