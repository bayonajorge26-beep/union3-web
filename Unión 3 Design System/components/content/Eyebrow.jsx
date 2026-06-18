import React from "react";

/**
 * Eyebrow / overline — wide-tracked uppercase label with a short red tick.
 * Sits above section titles for rhythm and orientation.
 */
export function Eyebrow({ children, color = "var(--accent)", style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--text-muted)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 28, height: 3, background: color, display: "inline-block" }} aria-hidden="true" />
      {children}
    </span>
  );
}
