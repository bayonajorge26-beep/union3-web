import React from "react";

/**
 * Unión 3 primary action button. Industrial, square-ish, bold uppercase label.
 * Variants: primary (brand red), whatsapp (green), secondary (outline), ghost.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "10px 16px", fontSize: "13px", gap: "8px", icon: 16 },
    md: { padding: "14px 24px", fontSize: "15px", gap: "10px", icon: 18 },
    lg: { padding: "18px 32px", fontSize: "17px", gap: "12px", icon: 20 },
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      border: "2px solid var(--accent)",
      boxShadow: "var(--shadow-accent)",
    },
    whatsapp: {
      background: "var(--whatsapp)",
      color: "#06351A",
      border: "2px solid var(--whatsapp)",
      boxShadow: "0 8px 28px rgba(37,211,102,0.30)",
    },
    secondary: {
      background: "transparent",
      color: "var(--white)",
      border: "2px solid var(--border-strong)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "2px solid transparent",
      boxShadow: "none",
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    fontSize: s.fontSize,
    letterSpacing: "var(--ls-caps)",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...v,
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
    if (variant === "whatsapp") e.currentTarget.style.filter = "brightness(1.06)";
    if (variant === "secondary") e.currentTarget.style.borderColor = "var(--white)";
    if (variant === "ghost") e.currentTarget.style.color = "var(--white)";
  };
  const hoverOut = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.borderColor = v.border.split(" ").slice(2).join(" ");
    if (variant === "ghost") e.currentTarget.style.color = v.color;
  };

  const iconSize = s.icon;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      {...rest}
    >
      {icon ? (
        <span style={{ display: "inline-flex", width: iconSize, height: iconSize }} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
      {iconRight ? (
        <span style={{ display: "inline-flex", width: iconSize, height: iconSize }} aria-hidden="true">
          {iconRight}
        </span>
      ) : null}
    </button>
  );
}
