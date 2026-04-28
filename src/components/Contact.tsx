import FadeIn from './FadeIn'

const LISTING_URL =
  'https://www.northwestranchland.com/properties/mt/historic-sleeping-buffalo-hot-springs-resort-for-sale/1129953/'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" role="presentation" />
      <div className="contact__inner">
        <FadeIn>
          <span className="eyebrow">Contact</span>
          <h2>This Place Is Ready for You</h2>
          <hr className="gold-rule center long" />
          <p className="contact__intro">
            The story above is not a pitch. It is the honest account of what
            this place has been and what it has become. If you felt something
            reading it, that feeling is worth a conversation. Carly Bishop has
            spent real time with this property and with this family. She will
            answer your questions honestly, arrange a visit, and take care of
            you throughout the process.
          </p>
        </FadeIn>
        <FadeIn className="contact__card" delay={1}>
          <p className="name">Carly Bishop</p>
          <p className="agency">Northwest Realty and Auction</p>
          <p className="line">
            <a href="tel:+14063906746">(406) 390.6746</a>
          </p>
          <p className="line">
            <a href="mailto:carly@bishopincmt.com">carly@bishopincmt.com</a>
          </p>
        </FadeIn>
        <FadeIn delay={2}>
          <a
            className="btn"
            href={LISTING_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            View the Official Listing
          </a>
        </FadeIn>
        <FadeIn className="contact__price" delay={3}>
          <span className="contact__price-label">Asking Price</span>
          <span className="contact__price-value">$9.7 Million</span>
        </FadeIn>
      </div>
    </section>
  )
}
