import React, { useState, useEffect, useRef } from "react";

const JET = "'JetBrains Mono', 'Roboto Mono', monospace";
const G = "#3DDC84";

/* ─── Code snippets (3 rotating) ─── */
const SNIPPETS = [
  {
    file: "athlete_performance.py",
    lang: "Python · Django REST",
    lines: [
      [{ t: "# athlete_performance.py", c: "#5e7268" }],
      [{ t: "@api_view", c: G }, { t: "([", c: "#a7bcb2" }, { t: "'GET'", c: "#9be7b8" }, { t: ", ", c: "#a7bcb2" }, { t: "'POST'", c: "#9be7b8" }, { t: "])", c: "#a7bcb2" }],
      [{ t: "def ", c: G }, { t: "track_athlete", c: "#d7ece2" }, { t: "(request):", c: "#a7bcb2" }],
      [{ t: "    data = ", c: "#a7bcb2" }, { t: "serialize", c: "#d7ece2" }, { t: "(request)", c: "#a7bcb2" }],
      [{ t: "    metrics = ", c: "#a7bcb2" }, { t: "analyzePerf", c: "#d7ece2" }, { t: "(data)", c: "#a7bcb2" }],
      [{ t: "    return ", c: G }, { t: "Response(metrics)", c: "#a7bcb2" }],
    ],
  },
  {
    file: "App.tsx",
    lang: "TypeScript · React Native",
    lines: [
      [{ t: "// App.tsx — iOS & Android", c: "#5e7268" }],
      [{ t: "export default ", c: G }, { t: "function ", c: G }, { t: "App", c: "#d7ece2" }, { t: "() {", c: "#a7bcb2" }],
      [{ t: "  const ", c: G }, { t: "{ data } = ", c: "#a7bcb2" }, { t: "useQuery", c: "#d7ece2" }, { t: "(api)", c: "#a7bcb2" }],
      [{ t: "  return ", c: G }, { t: "<Dashboard data={data} />", c: "#9be7b8" }],
      [{ t: "}", c: "#a7bcb2" }],
      [],
    ],
  },
  {
    file: "deploy.py",
    lang: "Python · AWS Infra",
    lines: [
      [{ t: "# deploy.py — AWS ECS + RDS", c: "#5e7268" }],
      [{ t: "service = ", c: "#a7bcb2" }, { t: "ecs.Service", c: "#d7ece2" }, { t: "(", c: "#a7bcb2" }],
      [{ t: "    cluster = prod,", c: "#a7bcb2" }],
      [{ t: "    desired_count = ", c: "#a7bcb2" }, { t: "3", c: "#9be7b8" }, { t: ",", c: "#a7bcb2" }],
      [{ t: ")", c: "#a7bcb2" }],
      [{ t: "service.", c: "#a7bcb2" }, { t: "deploy", c: "#d7ece2" }, { t: "()", c: "#a7bcb2" }],
    ],
  },
];

/* Total character count for a snippet (including newline separators) */
const snipLen = (s) =>
  s.lines.reduce((n, l) => n + l.reduce((a, tk) => a + tk.t.length, 0), 0) +
  (s.lines.length - 1);

/* Build visible code lines from (snip, typed) */
const buildCodeLines = (snipIdx, typed) => {
  const s = SNIPPETS[snipIdx];
  const lens = s.lines.map(l => l.reduce((a, tk) => a + tk.t.length, 0));
  let acc = 0, activeLine = s.lines.length - 1;
  for (let li = 0; li < s.lines.length; li++) {
    if (typed <= acc + lens[li]) { activeLine = li; break; }
    acc += lens[li] + 1;
  }
  let budget = typed;
  return s.lines.map((src, li) => {
    const vis = [];
    for (const tk of src) {
      if (budget <= 0) break;
      const take = Math.min(tk.t.length, budget);
      vis.push({ t: tk.t.slice(0, take), c: tk.c });
      budget -= take;
      if (take < tk.t.length) break;
    }
    budget -= 1; // newline separator
    return { num: String(li + 1), tokens: vis, caret: li === activeLine };
  });
};

/* ─── RightBanner ─── */
const RightBanner = ({ platform = "ios" }) => {
  const [codeState, setCodeState] = useState({ snip: 0, typed: 0 });
  const holdUntil = useRef(0);

  /* Platform label for status bar */
  const platformLabel =
    platform === "ios" ? "iOS" : platform === "android" ? "Android" : "React Native";

  /* Typewriter tick */
  useEffect(() => {
    const tick = () => {
      setCodeState(prev => {
        const total = snipLen(SNIPPETS[prev.snip]);
        if (prev.typed < total) {
          return { ...prev, typed: Math.min(total, prev.typed + 3) };
        }
        if (!holdUntil.current) {
          holdUntil.current = Date.now() + 2600;
          return prev;
        }
        if (Date.now() > holdUntil.current) {
          holdUntil.current = 0;
          return { snip: (prev.snip + 1) % SNIPPETS.length, typed: 0 };
        }
        return prev;
      });
    };
    const id = setInterval(tick, 46);
    return () => clearInterval(id);
  }, []);

  const codeLines = buildCodeLines(codeState.snip, codeState.typed);
  const currentSnip = SNIPPETS[codeState.snip];

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", minHeight: "520px" }}>

      {/* Top 40% — floating icons zone (HeroCanvas renders here) */}
      <div style={{ flex: 2 }} />

      {/* Bottom 60% — terminal */}
      <div style={{ flex: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "14px" }}>

      {/* Status bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
        fontFamily: JET, fontSize: "11px", letterSpacing: "0.05em",
      }}>
        <span style={{ color: "#6f8278" }}>▸ RENDERING</span>
        <span style={{ color: G, fontWeight: 600, minWidth: "104px", textAlign: "center" }}>
          {platformLabel}
        </span>
        <span style={{ width: "1px", height: "14px", background: "rgba(180,210,195,0.18)", display: "inline-block" }} />
        <span style={{ color: "#6f8278" }}>ONE CODEBASE</span>
      </div>

      {/* Glassmorphism code card */}
      <div style={{
        border: "1px solid rgba(61,220,132,0.16)",
        borderRadius: "16px",
        background: "linear-gradient(180deg, rgba(10,17,14,0.82), rgba(6,11,9,0.78))",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        overflow: "hidden",
      }}>
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "13px 18px", borderBottom: "1px solid rgba(61,220,132,0.12)",
        }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
          </div>
          <span style={{ fontFamily: JET, fontSize: "12.5px", color: "#8a9d93" }}>
            {currentSnip.file}
          </span>
        </div>

        {/* Code body */}
        <div style={{
          padding: "14px 18px",
          fontFamily: JET,
          fontSize: "12.5px",
          lineHeight: 1.75,
          minHeight: "170px",
        }}>
          {codeLines.map((line, li) => (
            <div key={li} style={{ display: "flex", gap: "18px", minHeight: "1.85em" }}>
              <span style={{ color: "#3a4d44", width: "14px", textAlign: "right", flexShrink: 0, userSelect: "none" }}>
                {line.num}
              </span>
              <span style={{ whiteSpace: "pre", color: "#a7bcb2" }}>
                {line.tokens.map((tok, ti) => (
                  <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                ))}
                {line.caret && (
                  <span
                    style={{
                      display: "inline-block", width: "7px", height: "15px",
                      background: G, verticalAlign: "-2px", marginLeft: "1px",
                    }}
                    className="cursor-blink"
                  />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "11px 18px", borderTop: "1px solid rgba(61,220,132,0.12)",
          fontFamily: JET, fontSize: "12px", color: "#6f8278",
        }}>
          <span>{currentSnip.lang}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: G }}>
            <span className="live-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: G, display: "inline-block" }} />
            LIVE
          </span>
        </div>
      </div>

      </div>{/* end bottom 50% */}
    </div>
  );
};

export default RightBanner;
