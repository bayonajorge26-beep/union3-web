// Unión 3 — landing page composition. Pulls primitives from the DS bundle.
const { Button, ServiceCard, StatCard, Eyebrow, Badge, BeforeAfterSlider } = window.UniN3DesignSystem_c91c39;
const Ico = window.U3Icons;
const WA_URL = "https://wa.me/34640083764?text=Hola%20Uni%C3%B3n%203,%20quiero%20pedir%20cita";
// Número directo de WhatsApp (fallback)
const WA_TEL = "+34 640 08 37 64";

// ---- scroll reveal (CSS keyframe entrance — always ends visible) ----
function Reveal({ children, delay = 0, style = {} }) {
  return React.createElement(
    "div",
    { className: "u3-reveal", style: { animationDelay: delay + "ms", ...style } },
    children
  );
}

const Section = ({ id, children, style }) =>
  <section id={id} style={{ padding: "var(--section-y) var(--gutter)", ...style }}>
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>{children}</div>
  </section>;

const SectionHead = ({ eyebrow, title, accent, sub }) =>
  <div style={{ marginBottom: 48 }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 style={{
      margin: "16px 0 0", fontFamily: "var(--font-display)", color: "var(--white)",
      fontSize: "clamp(34px,5vw,52px)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em",
    }}>
      {title} {accent ? <span style={{ color: "var(--accent)" }}>{accent}</span> : null}
    </h2>
    {sub ? <p style={{ margin: "16px 0 0", maxWidth: 560, color: "var(--text-muted)", fontSize: 16, lineHeight: 1.6 }}>{sub}</p> : null}
  </div>;

// ---- Nav ----
function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = ["Servicios", "Trabajos", "Confianza", "Contacto"];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: solid ? "rgba(10,10,10,0.88)" : "transparent",
      backdropFilter: solid ? "blur(10px)" : "none",
      borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background .3s var(--ease-out), border-color .3s var(--ease-out)",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", height: 68, padding: "0 var(--gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--white)", textTransform: "uppercase", letterSpacing: ".01em" }}>
            UNIÓN<span style={{ color: "var(--accent)" }}> 3</span>
          </span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ display: "flex", gap: 26 }} className="u3-navlinks">
            {links.map((l) =>
              <a key={l} href={"#" + l.toLowerCase()} style={{
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, textTransform: "uppercase",
                letterSpacing: ".06em", color: "var(--text-muted)", textDecoration: "none",
              }} onMouseEnter={(e) => e.target.style.color = "var(--white)"}
                 onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>{l}</a>)}
          </div>
          <a href={WA_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm" iconRight={<Ico.Arrow />}>Pide cita</Button>
          </a>
        </nav>
      </div>
    </header>
  );
}

// ---- Hero ----
function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px var(--gutter) 80px", overflow: "hidden" }}>
      {/* background motifs */}
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(900px 500px at 78% 18%, rgba(204,0,0,0.16), transparent 60%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5,
        backgroundImage: "linear-gradient(var(--ink-700) 1px, transparent 1px), linear-gradient(90deg, var(--ink-700) 1px, transparent 1px)",
        backgroundSize: "64px 64px", maskImage: "radial-gradient(circle at 70% 30%, #000, transparent 70%)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: 880 }}>
          <Reveal><Badge variant="outline">Taller mecánico · Sant Boi de Llobregat</Badge></Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", color: "var(--white)",
              fontSize: "clamp(48px, 9vw, 104px)", lineHeight: 0.92, textTransform: "uppercase", letterSpacing: "-0.015em" }}>
              Tu taller de <span style={{ color: "var(--accent)" }}>confianza</span> en Sant Boi
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ margin: "26px 0 0", maxWidth: 600, color: "var(--text-muted)", fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.6 }}>
              Mecánica general, Pre-ITV, frenos, distribución, diagnóstico y aire acondicionado. Presupuesto sin compromiso y reparación garantizada.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 38 }}>
              <a href={WA_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <Button variant="whatsapp" size="lg" icon={<Ico.WhatsApp />}>Pide cita por WhatsApp</Button>
              </a>
              <a href="#servicios" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg">Ver servicios</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      {/* scroll hint */}
      <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)",
        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--text-subtle)" }}>
        Desliza
      </div>
    </section>
  );
}

// ---- Services ----
const SERVICES = [
  ["Wrench", "Mecánica general", "Revisiones, cambios de aceite, embrague y reparación integral de tu vehículo."],
  ["Shield", "Pre-ITV", "Inspeccionamos tu coche a fondo para que pase la ITV a la primera."],
  ["Disc", "Frenos", "Pastillas, discos, líquido y diagnóstico completo del sistema de frenado."],
  ["Cog", "Distribución", "Sustitución de correa o cadena de distribución según el fabricante."],
  ["Gauge", "Diagnóstico", "Lectura de centralita y diagnosis electrónica con equipo profesional."],
  ["Snow", "Aire AC", "Carga de gas, limpieza de circuito y reparación del aire acondicionado."],
];
function Services() {
  return (
    <Section id="servicios" style={{ borderTop: "1px solid var(--border)", background: "var(--surface-raised)" }}>
      <SectionHead eyebrow="Nuestros servicios" title="Lo que hacemos" accent="por tu coche"
        sub="Todo lo que tu vehículo necesita, en un solo taller. Trabajo honesto y precios claros." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {SERVICES.map(([ic, t, d], i) => {
          const I = Ico[ic];
          return <Reveal key={t} delay={(i % 3) * 80}>
            <ServiceCard icon={<I />} title={t} description={d} />
          </Reveal>;
        })}
      </div>
    </Section>
  );
}

// ---- Before / After ----
function Trabajos() {
  return (
    <Section id="trabajos">
      <SectionHead eyebrow="Antes y después" title="Trabajos" accent="reales"
        sub="Arrastra el control para ver la diferencia. Resultados de reparaciones y puestas a punto realizadas en el taller." />
      <Reveal>
        <BeforeAfterSlider
          height={460}
          beforeLabel="Antes"
          afterLabel="Después"
          before={<img src="assets/antes.png" alt="Antes de la reparación" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
          after={<img src="assets/despues.png" alt="Después de la reparación" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
        />
      </Reveal>
    </Section>
  );
}

// ---- Trust ----
const STATS = [
  ["Clock", "+15", "años de experiencia"],
  ["Users", "+500", "clientes satisfechos"],
  ["Tag", "0€", "presupuesto sin compromiso"],
];
function Confianza() {
  return (
    <Section id="confianza" style={{ background: "var(--surface-raised)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 40 }}>
        {STATS.map(([ic, v, l], i) => {
          const I = Ico[ic];
          return <Reveal key={l} delay={i * 100}>
            <StatCard icon={<I />} value={v} label={l} />
          </Reveal>;
        })}
      </div>
    </Section>
  );
}

// ---- CTA band ----
function CtaBand() {
  return (
    <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Reveal>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)",
          background: "linear-gradient(135deg, var(--red-600), var(--red-500))", padding: "56px 40px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", color: "var(--white)", fontSize: "clamp(30px,4.5vw,46px)",
            textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1 }}>
            ¿Tu coche necesita un repaso?
          </h2>
          <p style={{ margin: "16px auto 30px", maxWidth: 520, color: "rgba(255,255,255,0.9)", fontSize: 17 }}>
            Escríbenos por WhatsApp y te damos cita y presupuesto sin compromiso.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "inline-block" }}>
            <Button variant="whatsapp" size="lg" icon={<Ico.WhatsApp />}>Pide cita por WhatsApp</Button>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

// ---- Footer ----
function Footer() {
  const social = [["Instagram", "#"], ["Facebook", "#"]];
  return (
    <footer id="contacto" style={{ background: "var(--black)", borderTop: "1px solid var(--border)", padding: "64px var(--gutter) 36px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }} className="u3-footgrid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--white)", textTransform: "uppercase" }}>
                UNIÓN<span style={{ color: "var(--accent)" }}> 3</span>
              </span>
            </div>
            <p style={{ margin: 0, color: "var(--text-subtle)", fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
              Taller mecánico de confianza en Sant Boi de Llobregat. Reparación, mantenimiento y puesta a punto de turismos y furgonetas.
            </p>
          </div>
          <div>
            <h4 style={footH}>Contacto</h4>
            <FootLine icon={<Ico.Pin size={18} />}>C/ Exemple, 3 · 08830 Sant Boi de Llobregat</FootLine>
            <a href={WA_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <FootLine icon={<Ico.WhatsApp size={18} />} hover>{WA_TEL}</FootLine>
            </a>
            <FootLine icon={<Ico.Clock size={18} />}>L–V 8:30–13:30 · 15:30–19:30</FootLine>
          </div>
          <div>
            <h4 style={footH}>Síguenos</h4>
            <div style={{ display: "flex", gap: 12 }}>
              {social.map(([name, href]) => {
                const I = Ico[name];
                return <a key={name} href={href} aria-label={name} style={{
                  width: 42, height: 42, borderRadius: "var(--radius-md)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)",
                  background: "var(--surface-card)", transition: "all .2s var(--ease-out)",
                }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                   onMouseLeave={(e) => { e.currentTarget.style.background = "var(--surface-card)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <span style={{ width: 20, height: 20 }}><I /></span>
                </a>;
              })}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>© {new Date().getFullYear()} Unión 3 · Taller mecánico</span>
          <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>Sant Boi de Llobregat, Barcelona</span>
        </div>
      </div>
    </footer>
  );
}
const footH = { margin: "0 0 16px", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--white)" };
function FootLine({ icon, children, hover }) {
  return <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12, color: hover ? "var(--text-muted)" : "var(--text-subtle)", fontSize: 14, lineHeight: 1.5 }}>
    <span style={{ width: 18, height: 18, color: "var(--accent)", flex: "none", marginTop: 1 }}>{icon}</span>
    {children}
  </div>;
}

// ---- App ----
function Landing() {
  const Intro = window.U3Intro;
  return (
    <React.Fragment>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Trabajos />
        <Confianza />
        <CtaBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}
window.U3Landing = Landing;
