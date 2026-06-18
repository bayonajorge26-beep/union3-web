import React from "react";

/**
 * Trust/stat block — oversized display number with a label. Optional icon.
 * Used in the "confianza" band (e.g. "+15 años de experiencia").
 */
export function StatCard({ icon = null, value, label, align = "center", style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        gap: 6,
        ...style,
      }}
      {...rest}
    >
      {icon ? (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            color: "var(--accent)",
            marginBottom: 6,
          }}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "64px",
          lineHeight: 0.9,
          color: "var(--white)",
          letterSpacing: "0.01em",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-caps)",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
