import FadeIn from './FadeIn'

export default function Restoration() {
  return (
    <section className="section restoration">
      <div className="container">
        <div className="restoration__partA">
          <FadeIn className="restoration__partA-header">
            <span className="eyebrow">What We Found</span>
            <h2>What We Found in 2013</h2>
            <hr className="gold-rule center long" />
          </FadeIn>
          <FadeIn className="before-pair" delay={1}>
            <img
              src="/images/before-algae-pool.jpg"
              alt="The pool overrun with algae before restoration"
              loading="lazy"
            />
            <img
              src="/images/indoor-pool-before.jpg"
              alt="The empty indoor pool before restoration"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="partA__body" delay={2}>
            <p>
              The state had shut the whole operation down for sanitary reasons.
              Algae had taken over the pools. Mice had moved into the rooms.
              The previous owner had rigged up old carnival water slides and
              the local EMTs who still come here to soak told us those slides
              had been sending people to the emergency room on a regular basis.
              The doors were locked and the whole place was falling apart.
            </p>
            <p>
              We figured we would slap some paint on the walls and get the
              pools running again. Then Michelle posted about it on Facebook.
              By the next morning the post had gathered several thousand likes
              and followers overnight. We went back and looked at the old
              books. The demand was never the question. People had just been
              waiting for someone to give them a reason to come back.
            </p>
            <p>We went at it with everything we had.</p>
          </FadeIn>
        </div>

        <hr className="restoration__divider" />

        <FadeIn className="partB__header">
          <span className="eyebrow">A Decade of Care</span>
          <h2>What Ten Years of Work Looks Like</h2>
          <hr className="gold-rule center long" />
        </FadeIn>

        <div className="partB__editorial">
          <FadeIn className="editorial-card left">
            <div className="frame">
              <img
                src="/images/indoor-pool-night.jpg"
                alt="The indoor mineral pools at night"
                loading="lazy"
              />
            </div>
            <p className="caption">
              The indoor mineral pools, open year round
            </p>
          </FadeIn>
          <FadeIn className="editorial-card right-top" delay={1}>
            <div className="frame">
              <img
                src="/images/outdoor-pool-dusk.jpg"
                alt="The outdoor pool at dusk"
                loading="lazy"
              />
            </div>
            <p className="caption">128 feet of open Montana sky</p>
          </FadeIn>
          <FadeIn className="editorial-card right-bot" delay={2}>
            <div className="frame">
              <img
                src="/images/log-cabin-interior.jpg"
                alt="Inside one of the historic log cabins"
                loading="lazy"
              />
            </div>
            <p className="caption">
              The stone cabins, built with rock from Fort Peck Dam
            </p>
          </FadeIn>
        </div>

        <FadeIn className="editorial-card panoramic partB__panoramic">
          <div className="frame">
            <img
              src="/images/hero-aerial-steam.jpg"
              alt="Sleeping Buffalo from above"
              loading="lazy"
            />
          </div>
          <p className="caption">
            Sleeping Buffalo from above, the Hi-Line stretching to the horizon
          </p>
        </FadeIn>

        <div className="partB__row">
          <FadeIn className="editorial-card row-a">
            <div className="frame">
              <img
                src="/images/saloon-dining.jpg"
                alt="The Buffalo Saloon dining room"
                loading="lazy"
              />
            </div>
            <p className="caption">
              The Buffalo Saloon and 54 Prime Steakhouse
            </p>
          </FadeIn>
          <FadeIn className="editorial-card row-b" delay={1}>
            <div className="frame">
              <img
                src="/images/cabin-night.jpg"
                alt="A cabin lit up at night"
                loading="lazy"
              />
            </div>
            <p className="caption">Where guests come back year after year</p>
          </FadeIn>
          <FadeIn className="editorial-card row-c" delay={2}>
            <div className="frame">
              <img
                src="/images/suite-1.jpg"
                alt="A modern suite"
                loading="lazy"
              />
            </div>
            <p className="caption">
              Modern suites with the warmth of the original building
            </p>
          </FadeIn>
        </div>

        <FadeIn className="editorial-card panoramic" delay={1}>
          <div className="frame">
            <img
              src="/images/aerial-property.jpg"
              alt="Aerial view of the entire property"
              loading="lazy"
            />
          </div>
          <p className="caption">
            Everything you see has been built or restored since 2014
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
