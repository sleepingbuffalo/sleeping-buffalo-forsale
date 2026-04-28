import FadeIn from './FadeIn'

export default function Origin() {
  return (
    <section className="section" id="origin">
      <div className="container">
        <div className="origin__grid">
          <FadeIn className="origin__text">
            <span className="eyebrow">The Beginning</span>
            <h2>It Began in 1909</h2>
            <hr className="gold-rule" />
            <p>
              In 1909 an oil drilling crew was working the Hi-Line plains outside
              of Saco, Montana. They hit something they were not looking for. Hot
              mineral water came rushing up from deep in the earth and they could
              not shut it off. Someone in the community learned about it and saw
              not a problem but an answer. Their son had polio. They piped that
              water into a horse trough and let the boy bathe in it.
            </p>
            <p>
              That is where Sleeping Buffalo Hot Springs begins. Not with a resort
              or a business plan, but with a parent who loved their child and a
              community that believed in something.
            </p>
          </FadeIn>
          <FadeIn className="origin__image" delay={1}>
            <img
              src="/images/old timy photos.jpg"
              alt="Historical photograph of Sleeping Buffalo Hot Springs"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
