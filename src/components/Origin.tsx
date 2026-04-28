import FadeIn from './FadeIn'

export default function Origin() {
  return (
    <section className="section origin" id="origin">
      <div className="container">
        <div className="origin__grid">
          <FadeIn className="origin__text">
            <span className="eyebrow">The Beginning</span>
            <h2>It Began in 1909</h2>
            <hr className="gold-rule long" />
            <p>
              In 1909 an oil drilling crew was working the Hi-Line plains
              outside of Saco, Montana. They hit something they were not
              looking for. Hot mineral water came rushing up from deep in the
              earth and they could not shut it off. Someone in the community
              learned about it and saw not a problem but an answer. Their son
              had polio. They piped that water into a horse trough and let the
              boy bathe in it.
            </p>
            <p>
              That is where Sleeping Buffalo Hot Springs begins. Not with a
              resort or a business plan, but with a parent who loved their
              child and a community that believed in something.
            </p>
            <p>
              The Saco Health Legion eventually built the first proper pools
              and opened the place to the public. For decades it was the
              destination that Hi-Line families came to know by heart. A place
              that belonged to the community before it ever belonged to anyone
              in particular.
            </p>
          </FadeIn>
          <FadeIn className="origin__images" delay={1}>
            <figure className="origin__frame">
              <img
                src="/images/historic-oil-derrick.jpg"
                alt="The historic entrance and origin of the springs"
                loading="lazy"
              />
            </figure>
            <figure className="origin__frame">
              <img
                src="/images/historic-pool-1920s.jpg"
                alt="The original Legion Health Pool from the early days"
                loading="lazy"
              />
              <figcaption className="origin__caption">
                The original Legion Health Pool, built by the community, for
                the community
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
