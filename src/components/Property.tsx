import FadeIn from './FadeIn'

export default function Property() {
  return (
    <section className="section property" id="property">
      <div className="container">
        <FadeIn className="property__header">
          <span className="eyebrow">The Property</span>
          <h2>What You Are Buying</h2>
          <hr className="gold-rule center long" />
        </FadeIn>

        <div className="property__row">
          <FadeIn className="property__text">
            <p>
              The property spans 32 acres along the Hi-Line plains outside of
              Saco, Montana, with Nelson Reservoir sitting directly across the
              road.
            </p>
            <p>
              At the heart of the operation is the mineral water itself. A
              brand new artesian well was drilled in 2021 to a depth of 3,200
              feet, delivering fresh mineral water the way it was always meant
              to flow. The indoor facility features multiple pools at varying
              temperatures. The outdoor pool was fully remodeled in 2024 and
              stretches 128 feet under an open Montana sky with underwater
              lighting and a hot tub.
            </p>
          </FadeIn>
          <FadeIn className="property__image" delay={1}>
            <img
              src="/images/aerial-property.jpg"
              alt="Aerial view of the full Sleeping Buffalo property"
              loading="lazy"
            />
          </FadeIn>
        </div>

        <div className="property__row property__row--reverse">
          <FadeIn className="property__image">
            <img
              src="/images/outdoor-pool-night-lit.jpg"
              alt="The 128 foot outdoor mineral pool lit at night"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="property__text" delay={1}>
            <p>
              The original stone cabins were built in the 1920s using rock
              quarried for the Fort Peck Dam. Every one of them was fully
              restored in 2016 with every modern comfort fitted inside while
              every bit of that history was kept intact. The property also
              includes hotel suites, and an RV park and campground built in
              2017 with a full bathhouse.
            </p>
            <p>
              The Buffalo Saloon and 54 Prime Steakhouse were built from
              scratch in 2023, along with a regenerative greenhouse that grows
              food directly on the property.
            </p>
          </FadeIn>
        </div>

        <div className="property__quad">
          <FadeIn className="property__tile">
            <img
              src="/images/indoor-pool-night.jpg"
              alt="The indoor mineral pools"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="property__tile" delay={1}>
            <img
              src="/images/cabin-night.jpg"
              alt="A restored stone cabin at night"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="property__tile" delay={2}>
            <img
              src="/images/saloon-bar.jpg"
              alt="Inside the Buffalo Saloon and 54 Prime Steakhouse"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="property__tile" delay={3}>
            <img
              src="/images/aerial-nelson.jpg"
              alt="Nelson Reservoir at sunset, directly across the road"
              loading="lazy"
            />
          </FadeIn>
        </div>

        <FadeIn className="property__residence">
          <p>
            The owner&rsquo;s residence is a 5,388 square foot custom built
            home with radiant floor heating, a heated garage, detailed
            woodwork, four bedrooms, three bathrooms, and a concrete encased
            walk in gun safe. A 1,200 square foot manager&rsquo;s home with
            three bedrooms and two bathrooms sits on the property as well. A
            100 by 50 foot shop provides additional storage, parking, and
            workspace.
          </p>
          <p className="property__closer">
            To stand at the edge of the outdoor pool on a cold Montana evening,
            watching steam rise from the water while the reservoir catches the
            last light across the road, is to understand immediately why
            people have been coming here for over a century.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
