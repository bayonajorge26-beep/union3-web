import React from "react";

/**
 * Small status / category badge. Solid red, outline, or neutral.
 */
export function Badge({ children, variant = "solid", style = {}, ...rest }) {
  const variants = {
    solid: { background: "var(--accent)", color: "var(--white)", border: "1px solid var(--accent)" },
    outline: { background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)" },
    neutral: { background: "var(--ink-700)", color: "var(--text-muted)", border: "1px solid var(--border)" },
  };
  const v = variants[variant] || variants.solid;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        fontFamily: "var(--font-sans)",
        fontWeight: 800,
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-caps)",
        borderRadius: "var(--radius-sm)",
        lineHeight: 1,
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
