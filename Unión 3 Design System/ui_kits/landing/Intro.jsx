// Unión 3 — animated intro overlay. Black screen, wordmark fade+scale with a
// mechanical glitch, then a red line wipes across. Unmounts after ~2.8s.
function Intro({ onDone }) {
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

  return React.createElement(
    "div",
    {
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
        transition: "opacity .6s var(--ease-out), transform .6s var(--ease-out)",
      },
    },
    React.createElement("style", null, INTRO_CSS),
    React.createElement(
      "div",
      { className: "u3-intro-wm" },
      "UNIÓN",
      React.createElement("span", { className: "u3-intro-3" }, "3")
    ),
    React.createElement("div", { className: "u3-intro-line" }),
    React.createElement("div", { className: "u3-intro-tag" }, "TALLER MECÁNICO · SANT BOI")
  );
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
