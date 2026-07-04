export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">주식회사 별의문 · Stargate Corp</p>
        <h1 className="title">
          🌌 stargate<span className="accent">88</span>
        </h1>
        <p className="subtitle">AI 소프트웨어로 지도·데이터·자동화를 잇습니다.</p>

        <div className="stack">
          {["Next.js", "TypeScript", "Supabase", "Python", "n8n", "GIS", "AI/ML"].map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="links">
          <a className="link primary" href="https://stargate11.com">
            stargate11.com
          </a>
          <a className="link" href="https://github.com/jds068888-coder/stargate88">
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} 주식회사 별의문 (Stargate Corp)
      </footer>
    </main>
  );
}
