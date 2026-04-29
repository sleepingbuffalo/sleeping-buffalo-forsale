import FadeIn from './FadeIn'

export default function Origin() {
  return (
    <section className="section origin" id="origin">
      <div className="container">
        <div className="origin__grid">
          <FadeIn className="origin__text">
            <span className="eyebrow">Origin</span>
            <h2>It Began in 1909</h2>
            <hr className="gold-rule long" />
            <p>
              In 1909 an oil drilling crew was working the Hi-Line plains
              outside of Saco, Montana. They hit something they were not
              looking for. Hot mineral water came rushing up from deep in the
              earth and they could not shut it off.
            </p>
            <p>
              Someone in the community learned about it and saw not a problem
              but an answer. Their son had polio. They piped that water into a
              horse trough and let the boy bathe in it.
            </p>
            <p>
              That is where Sleeping Buffalo Hot Springs begins. Not with a
              resort or a business plan, but with a parent who loved their
              child and a community that believed in something.
            </p>
            <p>
              The Saco Health Legion eventually built the first proper pools
              and opened the place to the public. For decades families across
              the Hi-Line came to know this place by heart.
            </p>
          </FadeIn>
          <FadeIn className="origin__images" delay={1}>
            <figure className="origin__frame">
              <img
                src="/images/oil%20derrick%20picture.JPG"
                alt="Historic oil derrick from the era when the springs were discovered"
                loading="lazy"
              />
              <figcaption className="origin__caption">
                The drilling crews of the Hi-Line, c. 1909
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
