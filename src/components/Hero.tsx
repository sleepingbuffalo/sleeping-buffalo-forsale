export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" role="presentation" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__label">For Sale &nbsp;&middot;&nbsp; Saco, Montana</p>
        <h1 className="hero__title">
          Sleeping Buffalo
          <br />
          <em>Hot Springs and Resort</em>
        </h1>
        <p className="hero__sub">
          A 116 year old Montana legacy on 32 acres along the Hi-Line, fully
          restored and ready for its next steward
        </p>

        <div className="hero__price">
          <span className="hero__price-label">Asking</span>
          <span className="hero__price-value">$9.7 Million</span>
        </div>

        <div className="hero__broker">
          <div className="hero__broker-name">
            Listed with <em>Carly Bishop</em>
          </div>
          <div className="hero__broker-firm">
            Northwest Realty and Auction
          </div>
          <div className="hero__broker-line">
            <a href="tel:+14063906746">(406) 390.6746</a>
            <span className="hero__broker-dot">&middot;</span>
            <a href="mailto:carly@bishopincmt.com">carly@bishopincmt.com</a>
          </div>
        </div>
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
