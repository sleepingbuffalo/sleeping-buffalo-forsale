export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" role="presentation" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__label">Saco, Montana &nbsp;&middot;&nbsp; Est. 1909</p>
        <h1 className="hero__title">A Letter to Whoever Comes Next</h1>
        <p className="hero__sub">
          Sleeping Buffalo Hot Springs and Resort is ready for its next steward
        </p>
      </div>
      <a
        href="#origin"
        className="hero__chevron"
        aria-label="Scroll to story"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
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
