import React from "react";
import { FaAndroid } from "react-icons/fa";

const PhoneFallback = ({ activeApp }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        style={{
          width: "220px",
          height: "440px",
          background: "linear-gradient(145deg, #0c140c, #0f160f)",
          borderRadius: "36px",
          border: "2px solid rgba(61,220,132,0.35)",
          boxShadow:
            "10px 10px 19px #050a05, -10px -10px 19px #0f170f, 0 0 24px rgba(61,220,132,0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "12px 10px 20px",
          position: "relative",
        }}
      >
        {/* Top notch */}
        <div
          style={{
            width: "60px",
            height: "8px",
            background: "#060b06",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
        {/* Screen area */}
        <div
          style={{
            width: "100%",
            flex: 1,
            borderRadius: "20px",
            overflow: "hidden",
            background: "#060b06",
            position: "relative",
          }}
        >
          {activeApp === "benchmark" ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #050a05, #0a180a)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {/* App icon */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "14px",
                  background: "rgba(61,220,132,0.12)",
                  border: "1px solid rgba(61,220,132,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  boxShadow: "0 0 16px rgba(61,220,132,0.2)",
                }}
              >
                <FaAndroid style={{ color: "#3DDC84", fontSize: "26px" }} />
              </div>
              <p
                style={{
                  color: "#3DDC84",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: "700",
                  fontSize: "10px",
                  textAlign: "center",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "0 10px",
                }}
              >
                Sports Tech
              </p>
              <p
                style={{
                  color: "rgba(61,220,132,0.5)",
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "8px",
                  textAlign: "center",
                  padding: "0 14px",
                  lineHeight: "1.5",
                }}
              >
                Athlete Performance
              </p>
              {/* Stat bars */}
              <div
                style={{
                  marginTop: "8px",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {[0.85, 0.6, 0.9].map((pct, i) => (
                  <div
                    key={i}
                    style={{
                      height: "3px",
                      background: "rgba(61,220,132,0.1)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${pct * 100}%`,
                        background: "rgba(61,220,132,0.6)",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "4px",
                  display: "flex",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "10px" }}>🍎</span>
                <span
                  style={{
                    color: "rgba(61,220,132,0.5)",
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "7px",
                    alignSelf: "center",
                  }}
                >
                  App Store
                </span>
                <span style={{ fontSize: "10px", marginLeft: "4px" }}>▶️</span>
                <span
                  style={{
                    color: "rgba(61,220,132,0.5)",
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "7px",
                    alignSelf: "center",
                  }}
                >
                  Play Store
                </span>
              </div>
            </div>
          ) : (
            <video
              src="/videos/numa_mockup.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
        {/* Home indicator */}
        <div
          style={{
            width: "32px",
            height: "4px",
            background: "rgba(61,220,132,0.2)",
            borderRadius: "2px",
            marginTop: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default PhoneFallback;
