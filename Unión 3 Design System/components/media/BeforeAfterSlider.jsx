import React from "react";

/**
 * Before/after comparison slider. Drag (or click) the handle to wipe between
 * two layers. Layers are color placeholders by default; pass `before`/`after`
 * nodes to render your own content. Brand red handle + grip.
 */
export function BeforeAfterSlider({
  before = null,
  after = null,
  beforeLabel = "Antes",
  afterLabel = "Después",
  start = 50,
  height = 380,
  style = {},
  ...rest
}) {
  const [pos, setPos] = React.useState(start);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const setFromX = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  const onDown = (e) => {
    dragging.current = true;
    setFromX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  React.useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      setFromX(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const placeholder = (bg, text, sub) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        color: "var(--white)",
      }}
    >
      <span style={{ fontFamily: "var(--font-display)", fontSize: 40, opacity: 0.5, letterSpacing: "0.02em" }}>{text}</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "var(--ls-caps)", textTransform: "uppercase", opacity: 0.35 }}>{sub}</span>
    </div>
  );

  const chip = (text, side) => (
    <span
      style={{
        position: "absolute",
        bottom: 16,
        [side]: 16,
        padding: "5px 11px",
        fontFamily: "var(--font-sans)",
        fontWeight: 800,
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "var(--ls-caps)",
        color: "var(--white)",
        background: side === "left" ? "rgba(10,10,10,0.7)" : "var(--accent)",
        border: side === "left" ? "1px solid var(--border)" : "1px solid var(--accent)",
        borderRadius: "var(--radius-sm)",
        backdropFilter: "blur(4px)",
      }}
    >
      {text}
    </span>
  );

  return (
    <div
      ref={ref}
      onMouseDown={onDown}
      onTouchStart={onDown}
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        userSelect: "none",
        cursor: "ew-resize",
        ...style,
      }}
      {...rest}
    >
      {/* AFTER (full, underneath) */}
      <div style={{ position: "absolute", inset: 0 }}>
        {after || placeholder("linear-gradient(135deg,#2a2a2a,#161616)", "DESPUÉS", "Trabajo terminado")}
        {chip(afterLabel, "right")}
      </div>
      {/* BEFORE (clipped from left) */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before || placeholder("linear-gradient(135deg,#3a0b0b,#1a0606)", "ANTES", "Estado inicial")}
        {chip(beforeLabel, "left")}
      </div>
      {/* Handle */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 3, background: "var(--accent)", transform: "translateX(-50%)" }}>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 44,
            height: 44,
            borderRadius: "var(--radius-pill)",
            background: "var(--accent)",
            border: "3px solid var(--white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-md)",
            color: "var(--white)",
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          ‹›
        </span>
      </div>
    </div>
  );
}
