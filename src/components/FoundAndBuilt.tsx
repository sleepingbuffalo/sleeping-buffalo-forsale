import FadeIn from './FadeIn'

export default function FoundAndBuilt() {
  return (
    <section className="section found" id="found">
      <div className="container">
        <FadeIn className="found__header">
          <span className="eyebrow">Then and Now</span>
          <h2>What We Found. What We Built.</h2>
          <hr className="gold-rule center long" />
        </FadeIn>

        <div className="found__split">
          <FadeIn className="found__col found__col--before">
            <div className="found__tag">Then</div>
            <div className="found__stack">
              <img
                src="/images/IMG_4471.JPG"
                alt="The shuttered pool and rusting waterslide before restoration"
                loading="lazy"
              />
              <img
                src="/images/indoor-pool-before.jpg"
                alt="The empty indoor pool before restoration"
                loading="lazy"
              />
            </div>
            <p>
              When Dennis arrived in 2013, the state had shut the whole
              operation down for sanitary reasons. Algae had taken over the
              pools. Mice had moved into the rooms. The previous owner had
              rigged up old carnival water slides and the local EMTs who still
              came here to soak told Dennis those slides had been sending
              people to the emergency room on a regular basis. The doors were
              locked and the whole place was falling apart.
            </p>
          </FadeIn>

          <FadeIn className="found__col found__col--after" delay={1}>
            <div className="found__tag found__tag--gold">Now</div>
            <div className="found__stack">
              <img
                src="/images/outdoor-pool-night-lit.jpg"
                alt="The remodeled 128 foot outdoor pool lit at night"
                loading="lazy"
              />
              <img
                src="/images/saloon-bar.jpg"
                alt="Inside the Buffalo Saloon and 54 Prime Steakhouse"
                loading="lazy"
              />
            </div>
            <p>
              What followed was ten years of giving it everything. In 2014 the
              interior was gutted and rebuilt from the ground up, the pools
              retiled, the hotel rooms rebuilt. In 2016 the original stone
              cabins were brought back to life. In 2017 the RV park and
              campground were built with a proper bathhouse. In 2021 a new
              artesian well was drilled 3,200 feet down. In 2023 the Buffalo
              Saloon and 54 Prime Steakhouse were built from scratch alongside
              a greenhouse to grow food on the property. In 2024 the outdoor
              pool was remodeled to stretch 128 feet under an open Montana
              sky.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
