import Link from 'next/link'

export default function Home() {
  return (
    <section className="home-hero">
      <div>
        <div className="eyebrow">Advanced Web Technologies</div>
        <h1 className="display-title">Learn the web. Build what matters.</h1>
        <p className="lead">A focused course catalog for developing practical skills in modern frontend, backend, data, security, and AI.</p>
        <div className="hero-actions">
          <Link href="/courses" className="button button-primary">Explore courses <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <aside className="hero-note">
        <strong>Find your next direction.</strong>
        <p>Six carefully selected courses. One clear place to keep learning.</p>
      </aside>
    </section>
  )
}
