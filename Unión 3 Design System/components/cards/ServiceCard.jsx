import React from "react";

/**
 * Service card — dark tile with an icon chip, title and short description.
 * Used in the Unión 3 services grid. The red top-rule animates on hover.
 */
export function ServiceCard({ icon = null, title, description, style = {}, ...rest }) {
  const onEnter = (e) => {
    const el = e.currentTarget;
    el.style.background = "var(--surface-card-hover)";
    el.style.borderColor = "var(--border-strong)";
    el.style.transform = "translateY(-4px)";
    const rule = el.querySelector("[data-rule]");
    if (rule) rule.style.transform = "scaleX(1)";
    const chip = el.querySelector("[data-chip]");
    if (chip) {
      chip.style.background = "var(--accent)";
      chip.style.color = "var(--white)";
    }
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.background = "var(--surface-card)";
    el.style.borderColor = "var(--border)";
    el.style.transform = "translateY(0)";
    const rule = el.querySelector("[data-rule]");
    if (rule) rule.style.transform = "scaleX(0)";
    const chip = el.querySelector("[data-chip]");
    if (chip) {
      chip.style.background = "var(--ink-700)";
      chip.style.color = "var(--accent)";
    }
  };

  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "28px 24px 26px",
        transition:
          "transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <span
        data-rule
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 3,
          width: "100%",
          background: "var(--accent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform var(--dur-base) var(--ease-mech)",
        }}
      />
      <span
        data-chip
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 52,
          height: 52,
          borderRadius: "var(--radius-md)",
          background: "var(--ink-700)",
          color: "var(--accent)",
          marginBottom: 20,
          transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          fontWeight: 800,
          fontSize: "20px",
          letterSpacing: "-0.01em",
          color: "var(--white)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "10px 0 0",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: 1.55,
          color: "var(--text-muted)",
        }}
      >
        {description}
      </p>
    </article>
  );
}
