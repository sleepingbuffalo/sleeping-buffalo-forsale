import FadeIn from './FadeIn'

const LISTING_URL =
  'https://www.northwestranchland.com/properties/mt/historic-sleeping-buffalo-hot-springs-resort-for-sale/1129953/'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" role="presentation" />
      <div className="contact__inner">
        <FadeIn>
          <span className="eyebrow">Ready to Talk</span>
          <h2>The Next Chapter Starts Here</h2>
          <hr className="gold-rule center long" />
          <p className="contact__intro">
            Reach out to Carly Bishop at Northwest Realty and Auction. She
            knows this property and she will take good care of you.
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
            View the Full Listing
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
