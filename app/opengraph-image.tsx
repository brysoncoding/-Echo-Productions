import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Echo Productions — Live Production & AV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 78px",
          background:
            "radial-gradient(circle at 78% 22%, #123b82 0, #07101f 34%, #02050b 72%)",
          color: "white",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.2,
            background:
              "linear-gradient(115deg, transparent 0 28%, #1687ff 28.5%, transparent 29.5% 52%, #1687ff 52.5%, transparent 53.5%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 82,
              height: 82,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "6px solid #1687ff",
              fontSize: 48,
              fontWeight: 900,
            }}
          >
            E
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 900, letterSpacing: 8 }}>
              ECHO
            </div>
            <div
              style={{
                fontSize: 27,
                letterSpacing: 12,
                color: "#b9c7dc",
                marginTop: -6,
              }}
            >
              PRODUCTIONS
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 58,
            fontSize: 29,
            letterSpacing: 4,
            color: "#dbe7f7",
          }}
        >
          LIVE PRODUCTION&nbsp;&nbsp; / &nbsp;&nbsp;AUDIO&nbsp;&nbsp; / &nbsp;&nbsp;VIDEO&nbsp;&nbsp; / &nbsp;&nbsp;LIGHTING&nbsp;&nbsp; / &nbsp;&nbsp;STREAMING
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 58 }}>
          {["AUDIO", "VIDEO", "LIGHTING", "STREAMING", "TECH SUPPORT"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "14px 22px",
                  border: "1px solid #24598f",
                  borderRadius: 8,
                  fontSize: 19,
                  letterSpacing: 2,
                  color: "#8fc7ff",
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 54,
            fontSize: 25,
            letterSpacing: 8,
            color: "#8fc7ff",
          }}
        >
          YOUR VISION. OUR GEAR.
        </div>
      </div>
    ),
    size,
  );
}
