/* @ds-bundle: {"format":3,"namespace":"UniN3DesignSystem_c91c39","components":[{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"BeforeAfterSlider","sourcePath":"components/media/BeforeAfterSlider.jsx"}],"sourceHashes":{"components/cards/ServiceCard.jsx":"a4c65093723b","components/cards/StatCard.jsx":"bcccf8e755c5","components/content/Badge.jsx":"fb94c3b9f97a","components/content/Eyebrow.jsx":"433fedc9f29c","components/forms/Button.jsx":"30ddf3856fea","components/media/BeforeAfterSlider.jsx":"ec1577b40d81","ui_kits/landing/Icons.jsx":"7d7161587437","ui_kits/landing/Intro.jsx":"76e1c6e9d89d","ui_kits/landing/Landing.jsx":"f87f96a6db4c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UniN3DesignSystem_c91c39 = window.UniN3DesignSystem_c91c39 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Service card — dark tile with an icon chip, title and short description.
 * Used in the Unión 3 services grid. The red top-rule animates on hover.
 */
function ServiceCard({
  icon = null,
  title,
  description,
  style = {},
  ...rest
}) {
  const onEnter = e => {
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
  const onLeave = e => {
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
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      padding: "28px 24px 26px",
      transition: "transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "data-rule": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      height: 3,
      width: "100%",
      background: "var(--accent)",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-base) var(--ease-mech)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-chip": true,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--ink-700)",
      color: "var(--accent)",
      marginBottom: 20,
      transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)"
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "20px",
      letterSpacing: "-0.01em",
      color: "var(--white)",
      textTransform: "uppercase"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trust/stat block — oversized display number with a label. Optional icon.
 * Used in the "confianza" band (e.g. "+15 años de experiencia").
 */
function StatCard({
  icon = null,
  value,
  label,
  align = "center",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: 6,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      color: "var(--accent)",
      marginBottom: 6
    },
    "aria-hidden": "true"
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "64px",
      lineHeight: 0.9,
      color: "var(--white)",
      letterSpacing: "0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-caps)",
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category badge. Solid red, outline, or neutral.
 */
function Badge({
  children,
  variant = "solid",
  style = {},
  ...rest
}) {
  const variants = {
    solid: {
      background: "var(--accent)",
      color: "var(--white)",
      border: "1px solid var(--accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)"
    },
    neutral: {
      background: "var(--ink-700)",
      color: "var(--text-muted)",
      border: "1px solid var(--border)"
    }
  };
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / overline — wide-tracked uppercase label with a short red tick.
 * Sits above section titles for rhythm and orientation.
 */
function Eyebrow({
  children,
  color = "var(--accent)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      background: color,
      display: "inline-block"
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Unión 3 primary action button. Industrial, square-ish, bold uppercase label.
 * Variants: primary (brand red), whatsapp (green), secondary (outline), ghost.
 */
function Button({
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
    sm: {
      padding: "10px 16px",
      fontSize: "13px",
      gap: "8px",
      icon: 16
    },
    md: {
      padding: "14px 24px",
      fontSize: "15px",
      gap: "10px",
      icon: 18
    },
    lg: {
      padding: "18px 32px",
      fontSize: "17px",
      gap: "12px",
      icon: 20
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      border: "2px solid var(--accent)",
      boxShadow: "var(--shadow-accent)"
    },
    whatsapp: {
      background: "var(--whatsapp)",
      color: "#06351A",
      border: "2px solid var(--whatsapp)",
      boxShadow: "0 8px 28px rgba(37,211,102,0.30)"
    },
    secondary: {
      background: "transparent",
      color: "var(--white)",
      border: "2px solid var(--border-strong)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "2px solid transparent",
      boxShadow: "none"
    }
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
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...v,
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
    if (variant === "whatsapp") e.currentTarget.style.filter = "brightness(1.06)";
    if (variant === "secondary") e.currentTarget.style.borderColor = "var(--white)";
    if (variant === "ghost") e.currentTarget.style.color = "var(--white)";
  };
  const hoverOut = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.borderColor = v.border.split(" ").slice(2).join(" ");
    if (variant === "ghost") e.currentTarget.style.color = v.color;
  };
  const iconSize = s.icon;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: iconSize,
      height: iconSize
    },
    "aria-hidden": "true"
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: iconSize,
      height: iconSize
    },
    "aria-hidden": "true"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/media/BeforeAfterSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Before/after comparison slider. Drag (or click) the handle to wipe between
 * two layers. Layers are color placeholders by default; pass `before`/`after`
 * nodes to render your own content. Brand red handle + grip.
 */
function BeforeAfterSlider({
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
  const setFromX = clientX => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  const onDown = e => {
    dragging.current = true;
    setFromX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  React.useEffect(() => {
    const move = e => {
      if (!dragging.current) return;
      setFromX(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => dragging.current = false;
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
  const placeholder = (bg, text, sub) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      opacity: 0.5,
      letterSpacing: "0.02em"
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      opacity: 0.35
    }
  }, sub));
  const chip = (text, side) => /*#__PURE__*/React.createElement("span", {
    style: {
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
      backdropFilter: "blur(4px)"
    }
  }, text);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseDown: onDown,
    onTouchStart: onDown,
    style: {
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border)",
      userSelect: "none",
      cursor: "ew-resize",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, after || placeholder("linear-gradient(135deg,#2a2a2a,#161616)", "DESPUÉS", "Trabajo terminado"), chip(afterLabel, "right")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }, before || placeholder("linear-gradient(135deg,#3a0b0b,#1a0606)", "ANTES", "Estado inicial"), chip(beforeLabel, "left")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 3,
      background: "var(--accent)",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      letterSpacing: "-2px"
    }
  }, "\u2039\u203A")));
}
Object.assign(__ds_scope, { BeforeAfterSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/BeforeAfterSlider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Icons.jsx
try { (() => {
// Unión 3 — inline icon set (Lucide-style, 24px stroke). Shared via window.
const _ico = (children, props = {}) => React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: props.size || "100%",
  height: props.size || "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: props.sw || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, children);
const P = (d, k) => React.createElement("path", {
  d,
  key: k
});
const Cr = (cx, cy, r, k) => React.createElement("circle", {
  cx,
  cy,
  r,
  key: k
});
const L = (x1, y1, x2, y2, k) => React.createElement("line", {
  x1,
  y1,
  x2,
  y2,
  key: k
});
const Icons = {
  Wrench: p => _ico([P("M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.4a4 4 0 0 0 5.3-5.4l-2.5 2.5-2.1-.4-.4-2.1 2.4-2.4z", 1)], p),
  Shield: p => _ico([P("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", 1), P("M9 12l2 2 4-4", 2)], p),
  Disc: p => _ico([Cr(12, 12, 10, 1), Cr(12, 12, 3, 2)], p),
  Cog: p => _ico([Cr(12, 12, 3, 1), P("M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 14a1.6 1.6 0 0 0-1.5-1H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 3 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 3a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 17 3a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 7v0a1.6 1.6 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z", 2)], p),
  Gauge: p => _ico([P("M22 12h-4l-3 9L9 3l-3 9H2", 1)], p),
  Snow: p => _ico([L(12, 2, 12, 22, 1), L(2, 12, 22, 12, 2), P("M5 5l14 14M19 5L5 19", 3), P("M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5M6 12l-2.5-2.5M6 12l-2.5 2.5M18 12l2.5-2.5M18 12l2.5 2.5", 4)], p),
  Arrow: p => _ico([P("M5 12h14M13 6l6 6-6 6", 1)], {
    sw: 2.5,
    ...p
  }),
  WhatsApp: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p && p.size || "100%",
    height: p && p.size || "100%",
    fill: "currentColor",
    ...p
  }, P("M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.3.6-.6.8-.8 1-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.8 2 1 .3.1.4.2.5.3 0 .2 0 .7-.2 1.3Z", 1)),
  Pin: p => _ico([P("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z", 1), Cr(12, 10, 3, 2)], p),
  Phone: p => _ico([P("M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z", 1)], p),
  Clock: p => _ico([Cr(12, 12, 10, 1), P("M12 6v6l4 2", 2)], p),
  Users: p => _ico([P("M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", 1), Cr(9, 7, 4, 2), P("M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8", 3)], p),
  Tag: p => _ico([P("M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8z", 1), L(7, 7, 7.01, 7, 2)], p),
  Instagram: p => _ico([React.createElement("rect", {
    x: 2,
    y: 2,
    width: 20,
    height: 20,
    rx: 5,
    key: 1
  }), P("M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z", 2), L(17.5, 6.5, 17.51, 6.5, 3)], p),
  Facebook: p => _ico([P("M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", 1)], p),
  Menu: p => _ico([L(3, 6, 21, 6, 1), L(3, 12, 21, 12, 2), L(3, 18, 21, 18, 3)], p),
  Star: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p && p.size || "100%",
    height: p && p.size || "100%",
    fill: "currentColor",
    ...p
  }, P("M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z", 1))
};
window.U3Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Intro.jsx
try { (() => {
// Unión 3 — animated intro overlay. Black screen, wordmark fade+scale with a
// mechanical glitch, then a red line wipes across. Unmounts after ~2.8s.
function Intro({
  onDone
}) {
  const [exit, setExit] = React.useState(false);
  const [gone, setGone] = React.useState(false);
  React.useEffect(() => {
    // allow skip if user has already seen it this session
    const t1 = setTimeout(() => setExit(true), 2500);
    const t2 = setTimeout(() => {
      setGone(true);
      onDone && onDone();
    }, 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (gone) return null;
  return React.createElement("div", {
    onClick: () => {
      setExit(true);
      setTimeout(() => {
        setGone(true);
        onDone && onDone();
      }, 600);
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "var(--black)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      opacity: exit ? 0 : 1,
      transform: exit ? "scale(1.06)" : "scale(1)",
      transition: "opacity .6s var(--ease-out), transform .6s var(--ease-out)"
    }
  }, React.createElement("style", null, INTRO_CSS), React.createElement("div", {
    className: "u3-intro-wm"
  }, "UNIÓN", React.createElement("span", {
    className: "u3-intro-3"
  }, "3")), React.createElement("div", {
    className: "u3-intro-line"
  }), React.createElement("div", {
    className: "u3-intro-tag"
  }, "TALLER MECÁNICO · SANT BOI"));
}
const INTRO_CSS = `
.u3-intro-wm{
  font-family: var(--font-display);
  font-size: clamp(56px, 13vw, 150px);
  line-height: .9;
  letter-spacing: .01em;
  color: var(--white);
  text-transform: uppercase;
  display: flex;
  align-items: baseline;
  gap: .12em;
  opacity: 0;
  animation: u3wm .7s var(--ease-out) .15s forwards, u3glitch .18s steps(2) .35s 2;
}
.u3-intro-3{ color: var(--accent); }
@keyframes u3wm{
  0%{ opacity: 0; transform: scale(1.25); filter: blur(8px); }
  100%{ opacity: 1; transform: scale(1); filter: blur(0); }
}
@keyframes u3glitch{
  0%{ transform: translate(0,0); }
  50%{ transform: translate(-3px, 1px); }
  100%{ transform: translate(2px,-1px); }
}
.u3-intro-line{
  height: 4px; width: 0; margin-top: 26px;
  background: var(--accent);
  box-shadow: 0 0 24px rgba(204,0,0,.7);
  animation: u3line .9s var(--ease-mech) .9s forwards;
}
@keyframes u3line{ to{ width: min(440px, 64vw); } }
.u3-intro-tag{
  margin-top: 18px;
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: .26em;
  color: var(--text-subtle);
  text-transform: uppercase;
  opacity: 0;
  animation: u3fade .6s var(--ease-out) 1.5s forwards;
}
@keyframes u3fade{ to{ opacity: 1; } }
@media (prefers-reduced-motion: reduce){
  .u3-intro-wm,.u3-intro-line,.u3-intro-tag{ animation-duration: .01ms !important; opacity:1; width:auto; }
}
`;
window.U3Intro = Intro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Landing.jsx
try { (() => {
// Unión 3 — landing page composition. Pulls primitives from the DS bundle.
const {
  Button,
  ServiceCard,
  StatCard,
  Eyebrow,
  Badge,
  BeforeAfterSlider
} = window.UniN3DesignSystem_c91c39;
const Ico = window.U3Icons;
const WA_URL = "https://wa.me/34640083764?text=Hola%20Uni%C3%B3n%203,%20quiero%20pedir%20cita";
// Número directo de WhatsApp (fallback)
const WA_TEL = "+34 640 08 37 64";

// ---- scroll reveal (CSS keyframe entrance — always ends visible) ----
function Reveal({
  children,
  delay = 0,
  style = {}
}) {
  return React.createElement("div", {
    className: "u3-reveal",
    style: {
      animationDelay: delay + "ms",
      ...style
    }
  }, children);
}
const Section = ({
  id,
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    padding: "var(--section-y) var(--gutter)",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto"
  }
}, children));
const SectionHead = ({
  eyebrow,
  title,
  accent,
  sub
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: "16px 0 0",
    fontFamily: "var(--font-display)",
    color: "var(--white)",
    fontSize: "clamp(34px,5vw,52px)",
    lineHeight: 1,
    textTransform: "uppercase",
    letterSpacing: "-0.01em"
  }
}, title, " ", accent ? /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--accent)"
  }
}, accent) : null), sub ? /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "16px 0 0",
    maxWidth: 560,
    color: "var(--text-muted)",
    fontSize: 16,
    lineHeight: 1.6
  }
}, sub) : null);

// ---- Nav ----
function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = ["Servicios", "Trabajos", "Confianza", "Contacto"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: solid ? "rgba(10,10,10,0.88)" : "transparent",
      backdropFilter: solid ? "blur(10px)" : "none",
      borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background .3s var(--ease-out), border-color .3s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: 68,
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      color: "var(--white)",
      textTransform: "uppercase",
      letterSpacing: ".01em"
    }
  }, "UNI\xD3N", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " 3"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26
    },
    className: "u3-navlinks"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      color: "var(--text-muted)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.target.style.color = "var(--white)",
    onMouseLeave: e => e.target.style.color = "var(--text-muted)"
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Ico.Arrow, null)
  }, "Pide cita")))));
}

// ---- Hero ----
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "120px var(--gutter) 80px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(900px 500px at 78% 18%, rgba(204,0,0,0.16), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      backgroundImage: "linear-gradient(var(--ink-700) 1px, transparent 1px), linear-gradient(90deg, var(--ink-700) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
      maskImage: "radial-gradient(circle at 70% 30%, #000, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Taller mec\xE1nico \xB7 Sant Boi de Llobregat")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "24px 0 0",
      fontFamily: "var(--font-display)",
      color: "var(--white)",
      fontSize: "clamp(48px, 9vw, 104px)",
      lineHeight: 0.92,
      textTransform: "uppercase",
      letterSpacing: "-0.015em"
    }
  }, "Tu taller de ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "confianza"), " en Sant Boi")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      maxWidth: 600,
      color: "var(--text-muted)",
      fontSize: "clamp(16px,2vw,19px)",
      lineHeight: 1.6
    }
  }, "Mec\xE1nica general, Pre-ITV, frenos, distribuci\xF3n, diagn\xF3stico y aire acondicionado. Presupuesto sin compromiso y reparaci\xF3n garantizada.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Ico.WhatsApp, null)
  }, "Pide cita por WhatsApp")), /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Ver servicios")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 26,
      left: "50%",
      transform: "translateX(-50%)",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: ".26em",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Desliza"));
}

// ---- Services ----
const SERVICES = [["Wrench", "Mecánica general", "Revisiones, cambios de aceite, embrague y reparación integral de tu vehículo."], ["Shield", "Pre-ITV", "Inspeccionamos tu coche a fondo para que pase la ITV a la primera."], ["Disc", "Frenos", "Pastillas, discos, líquido y diagnóstico completo del sistema de frenado."], ["Cog", "Distribución", "Sustitución de correa o cadena de distribución según el fabricante."], ["Gauge", "Diagnóstico", "Lectura de centralita y diagnosis electrónica con equipo profesional."], ["Snow", "Aire AC", "Carga de gas, limpieza de circuito y reparación del aire acondicionado."]];
function Services() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "servicios",
    style: {
      borderTop: "1px solid var(--border)",
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Nuestros servicios",
    title: "Lo que hacemos",
    accent: "por tu coche",
    sub: "Todo lo que tu veh\xEDculo necesita, en un solo taller. Trabajo honesto y precios claros."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 16
    }
  }, SERVICES.map(([ic, t, d], i) => {
    const I = Ico[ic];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: t,
      delay: i % 3 * 80
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      icon: /*#__PURE__*/React.createElement(I, null),
      title: t,
      description: d
    }));
  })));
}

// ---- Before / After ----
function Trabajos() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "trabajos"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Antes y despu\xE9s",
    title: "Trabajos",
    accent: "reales",
    sub: "Arrastra el control para ver la diferencia. Resultados de reparaciones y puestas a punto realizadas en el taller."
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(BeforeAfterSlider, {
    height: 460,
    beforeLabel: "Antes",
    afterLabel: "Despu\xE9s",
    before: /*#__PURE__*/React.createElement("img", {
      src: "assets/antes.png",
      alt: "Antes de la reparaci\xF3n",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }),
    after: /*#__PURE__*/React.createElement("img", {
      src: "assets/despues.png",
      alt: "Despu\xE9s de la reparaci\xF3n",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  })));
}

// ---- Trust ----
const STATS = [["Clock", "+15", "años de experiencia"], ["Users", "+500", "clientes satisfechos"], ["Tag", "0€", "presupuesto sin compromiso"]];
function Confianza() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "confianza",
    style: {
      background: "var(--surface-raised)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: 40
    }
  }, STATS.map(([ic, v, l], i) => {
    const I = Ico[ic];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: l,
      delay: i * 100
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: /*#__PURE__*/React.createElement(I, null),
      value: v,
      label: l
    }));
  })));
}

// ---- CTA band ----
function CtaBand() {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 80,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      background: "linear-gradient(135deg, var(--red-600), var(--red-500))",
      padding: "56px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      color: "var(--white)",
      fontSize: "clamp(30px,4.5vw,46px)",
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      lineHeight: 1
    }
  }, "\xBFTu coche necesita un repaso?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px auto 30px",
      maxWidth: 520,
      color: "rgba(255,255,255,0.9)",
      fontSize: 17
    }
  }, "Escr\xEDbenos por WhatsApp y te damos cita y presupuesto sin compromiso."), /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Ico.WhatsApp, null)
  }, "Pide cita por WhatsApp")))));
}

// ---- Footer ----
function Footer() {
  const social = [["Instagram", "#"], ["Facebook", "#"]];
  return /*#__PURE__*/React.createElement("footer", {
    id: "contacto",
    style: {
      background: "var(--black)",
      borderTop: "1px solid var(--border)",
      padding: "64px var(--gutter) 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 40
    },
    className: "u3-footgrid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      color: "var(--white)",
      textTransform: "uppercase"
    }
  }, "UNI\xD3N", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " 3"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-subtle)",
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 320
    }
  }, "Taller mec\xE1nico de confianza en Sant Boi de Llobregat. Reparaci\xF3n, mantenimiento y puesta a punto de turismos y furgonetas.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: footH
  }, "Contacto"), /*#__PURE__*/React.createElement(FootLine, {
    icon: /*#__PURE__*/React.createElement(Ico.Pin, {
      size: 18
    })
  }, "C/ Exemple, 3 \xB7 08830 Sant Boi de Llobregat"), /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(FootLine, {
    icon: /*#__PURE__*/React.createElement(Ico.WhatsApp, {
      size: 18
    }),
    hover: true
  }, WA_TEL)), /*#__PURE__*/React.createElement(FootLine, {
    icon: /*#__PURE__*/React.createElement(Ico.Clock, {
      size: 18
    })
  }, "L\u2013V 8:30\u201313:30 \xB7 15:30\u201319:30")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: footH
  }, "S\xEDguenos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, social.map(([name, href]) => {
    const I = Ico[name];
    return /*#__PURE__*/React.createElement("a", {
      key: name,
      href: href,
      "aria-label": name,
      style: {
        width: 42,
        height: 42,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        background: "var(--surface-card)",
        transition: "all .2s var(--ease-out)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "var(--accent)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "var(--accent)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "var(--surface-card)";
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20
      }
    }, /*#__PURE__*/React.createElement(I, null)));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 22,
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontSize: 12
    }
  }, "\xA9 ", new Date().getFullYear(), " Uni\xF3n 3 \xB7 Taller mec\xE1nico"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontSize: 12
    }
  }, "Sant Boi de Llobregat, Barcelona"))));
}
const footH = {
  margin: "0 0 16px",
  fontFamily: "var(--font-sans)",
  fontWeight: 800,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: ".14em",
  color: "var(--white)"
};
function FootLine({
  icon,
  children,
  hover
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      marginBottom: 12,
      color: hover ? "var(--text-muted)" : "var(--text-subtle)",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      color: "var(--accent)",
      flex: "none",
      marginTop: 1
    }
  }, icon), children);
}

// ---- App ----
function Landing() {
  const Intro = window.U3Intro;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Trabajos, null), /*#__PURE__*/React.createElement(Confianza, null), /*#__PURE__*/React.createElement(CtaBand, null)), /*#__PURE__*/React.createElement(Footer, null));
}
window.U3Landing = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.BeforeAfterSlider = __ds_scope.BeforeAfterSlider;

})();
