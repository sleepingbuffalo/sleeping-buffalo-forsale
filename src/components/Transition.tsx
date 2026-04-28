import FadeIn from './FadeIn'

export default function Transition() {
  return (
    <section className="transition" id="transition">
      <div className="transition__layout">
        <div className="transition__text">
          <FadeIn>
            <span className="eyebrow">Your Transition</span>
            <h2>You Don&rsquo;t Have to Live Here. But You Could.</h2>
            <hr className="gold-rule long" />
          </FadeIn>
          <FadeIn delay={1}>
            <p>
              The operation has a strong existing team and professional
              management options are available. Owning Sleeping Buffalo does
              not require uprooting your life. Plenty of successful properties
              like this one are run by owners who are not on the property
              every day.
            </p>
            <p>
              Christian Simpson has been part of this place since the
              beginning. He knows every guest, every system, every quiet
              detail that does not make it into any manual. When the
              transition happens, he will be there to make sure whoever takes
              the reins understands what they have. That offer stands for as
              long as it is needed.
            </p>
            <p>
              Dennis is not hovering. He is not looking to consult from a
              distance or stay involved once the handshake is done. He is
              looking to hand this to someone who is hungry for it and then go
              be with his wife. Clean. Complete.
            </p>
            <a
              className="transition__download"
              href="/sleeping-buffalo-letter-short.pdf"
            >
              <svg
                className="transition__download-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>
                Download the one page letter to share with a partner or
                advisor
              </span>
            </a>
          </FadeIn>
        </div>
        <div className="transition__image" role="presentation" />
      </div>
    </section>
  )
}
