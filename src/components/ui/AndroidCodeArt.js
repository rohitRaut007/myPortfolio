import React, { useState, useEffect } from "react";
import { FaAndroid } from "react-icons/fa";

const codeLines = [
  { text: "// athlete_performance.py", type: "comment" },
  { text: "@api_view(['GET', 'POST'])", type: "decorator" },
  { text: "def track_athlete(request):", type: "keyword" },
  { text: "  data = serialize(request)", type: "normal" },
  { text: "  metrics = analyzePerf(data)", type: "normal" },
  { text: "  return Response(metrics)", type: "keyword" },
  { text: "", type: "empty" },
  { text: "// React Native + Django", type: "comment" },
  { text: "const loadMetrics = async () => {", type: "normal" },
  { text: "  await ReactQuery.prefetch()", type: "highlight" },
];

const AndroidCodeArt = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(
        () => setVisibleLines((v) => v + 1),
        120 + Math.random() * 80,
      );
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const interval = setInterval(
      () => setShowCursor((v) => !v),
      530,
    );
    return () => clearInterval(interval);
  }, []);

  const getColor = (type) => {
    switch (type) {
      case "comment":
        return "rgba(61,220,132,0.45)";
      case "decorator":
        return "#7dd3fc";
      case "keyword":
        return "#c084fc";
      case "highlight":
        return "#fbbf24";
      default:
        return "rgba(61,220,132,0.85)";
    }
  };

  return (
    <div
      style={{
        background: "rgba(8,13,8,0.96)",
        border: "1px solid rgba(61,220,132,0.25)",
        borderRadius: "12px",
        padding: "14px 16px",
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "11px",
        width: "268px",
        backdropFilter: "blur(8px)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(61,220,132,0.08), 0 0 20px rgba(61,220,132,0.08)",
      }}
    >
      {/* Terminal title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(61,220,132,0.12)",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#ff5f57",
          }}
        />
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#febc2e",
          }}
        />
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#28c840",
          }}
        />
        <div style={{ flex: 1 }} />
        <FaAndroid style={{ color: "#3DDC84", fontSize: "13px" }} />
        <span
          style={{ color: "rgba(61,220,132,0.5)", fontSize: "10px" }}
        >
          athlete_performance.py
        </span>
      </div>

      {/* Line numbers + code */}
      <div style={{ lineHeight: "1.75" }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <span
              style={{
                color: "rgba(61,220,132,0.2)",
                userSelect: "none",
                minWidth: "16px",
                textAlign: "right",
                fontSize: "10px",
              }}
            >
              {i + 1}
            </span>
            <span style={{ color: getColor(line.type) }}>
              {line.text || " "}
            </span>
          </div>
        ))}
        {/* Blinking cursor on active line */}
        {visibleLines < codeLines.length && (
          <div style={{ display: "flex", gap: "10px" }}>
            <span
              style={{
                color: "rgba(61,220,132,0.2)",
                minWidth: "16px",
                textAlign: "right",
                fontSize: "10px",
              }}
            >
              {visibleLines + 1}
            </span>
            <span
              style={{
                color: "#3DDC84",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              █
            </span>
          </div>
        )}
        {/* Steady cursor after typing done */}
        {visibleLines >= codeLines.length && (
          <div style={{ display: "flex", gap: "10px" }}>
            <span
              style={{
                color: "rgba(61,220,132,0.2)",
                minWidth: "16px",
                textAlign: "right",
                fontSize: "10px",
              }}
            >
              {codeLines.length + 1}
            </span>
            <span
              style={{
                color: "#3DDC84",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              █
            </span>
          </div>
        )}
      </div>

      {/* Footer status bar */}
      <div
        style={{
          marginTop: "12px",
          paddingTop: "8px",
          borderTop: "1px solid rgba(61,220,132,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "rgba(61,220,132,0.4)", fontSize: "10px" }}>
          Python · Django REST
        </span>
        <span
          style={{
            background: "rgba(61,220,132,0.12)",
            color: "#3DDC84",
            padding: "1px 6px",
            borderRadius: "3px",
            fontSize: "9px",
            border: "1px solid rgba(61,220,132,0.2)",
          }}
        >
          ● LIVE
        </span>
      </div>
    </div>
  );
};

export default AndroidCodeArt;
