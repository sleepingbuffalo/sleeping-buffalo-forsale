export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" role="presentation" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">A Letter to Whoever Comes Next</h1>
        <p className="hero__sub">
          Sleeping Buffalo Hot Springs and Resort &nbsp;&middot;&nbsp; Saco, Montana
          &nbsp;&middot;&nbsp; <span className="gold">Est. 1909</span>
        </p>
      </div>
      <a href="#origin" className="hero__scroll" aria-label="Scroll to story">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4v16m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
