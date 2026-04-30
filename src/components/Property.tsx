import { useCallback, useEffect, useState } from 'react'
import FadeIn from './FadeIn'

type Slide = { src: string; caption: string }

const slides: Slide[] = [
  { src: '/images/outdoor-pool-night-lit.jpg', caption: '128 feet of open Montana sky' },
  { src: '/images/outdoor-pool-steam.jpg', caption: 'Steam rising on a cold evening' },
  { src: '/images/aerobics-ladies.jpg', caption: 'The community this place has built' },
  { src: '/images/indoor-pool-dusk.jpg', caption: 'The indoor mineral pools at dusk' },
  { src: '/images/indoor-cold-pool.jpg', caption: 'The cold plunge pool' },
  { src: '/images/outdoor-hot-tubs.jpg', caption: 'Hot tubs under the Montana sky' },
  { src: '/images/cabin-exterior.jpg', caption: 'Stone cabins quarried from Fort Peck Dam rock' },
  { src: '/images/cabin-interior.jpg', caption: 'Every modern comfort inside' },
  { src: '/images/cabin-night.jpg', caption: 'The cabins at night' },
  { src: '/images/log-cabin-interior.jpg', caption: 'Warm and built to last' },
  { src: '/images/saloon-exterior.jpg', caption: 'Inside the Buffalo Saloon' },
  { src: '/images/buffalo saloon.jpg', caption: 'The Buffalo Saloon and 54 Prime Steakhouse' },
  { src: '/images/saloon-dining.jpg', caption: 'Fine dining on the Hi-Line' },
  { src: '/images/saloon-seating.jpg', caption: 'A gathering place' },
  { src: '/images/suite-1.jpg', caption: 'Hotel suites' },
  { src: '/images/suite-2.jpg', caption: 'Every comfort provided' },
  { src: '/images/suite-bathroom.jpg', caption: 'Fully remodeled throughout' },
  { src: '/images/greenhouse.jpg', caption: 'Regenerative greenhouse growing food on-site' },
  { src: '/images/campground.jpg', caption: 'RV park and campground with full bathhouse' },
  { src: '/images/aerial-nelson.jpg', caption: 'Nelson Reservoir across the road' },
  { src: '/images/aerial-campground.jpg', caption: '32 acres along the Hi-Line' },
  { src: '/images/aerial-property.jpg', caption: 'Everything you see is included' },
  { src: '/images/entrance-sign.jpg', caption: '116 years of history behind this sign' },
]

export default function Property() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex(i => (i + 1) % slides.length), [])
  const prev = useCallback(
    () => setIndex(i => (i - 1 + slides.length) % slides.length),
    []
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Warm browser cache for the next slide so rapid navigation stays smooth.
  useEffect(() => {
    const upcoming = new Image()
    upcoming.src = slides[(index + 1) % slides.length].src
  }, [index])

  const current = slides[index]

  return (
    <section className="section property" id="property">
      <div className="container">
        <FadeIn className="property__header">
          <span className="eyebrow">The Property</span>
          <h2>What You Are Buying</h2>
          <hr className="gold-rule center long" />
        </FadeIn>

        <FadeIn className="property__prose">
          <p>
            The property spans 32 acres along the Hi-Line plains outside of
            Saco, Montana, with Nelson Reservoir sitting directly across the
            road.
          </p>
          <p>
            At the heart of the operation is the mineral water itself. A brand
            new artesian well was drilled in 2021 to a depth of 3,200 feet,
            delivering fresh mineral water the way it was always meant to flow.
            The indoor facility features multiple pools at varying temperatures.
            The outdoor pool was fully remodeled in 2024 and stretches 128 feet
            under an open Montana sky with underwater lighting and a hot tub.
          </p>
          <p>
            The original stone cabins were built in the 1920s using rock
            quarried for the Fort Peck Dam. Every one of them was fully restored
            in 2016 with every modern comfort fitted inside while every bit of
            that history was kept intact. The property also includes hotel
            suites, and an RV park and campground built in 2017 with a full
            bathhouse.
          </p>
          <p>
            The Buffalo Saloon and 54 Prime Steakhouse were built from scratch
            in 2023, along with a regenerative greenhouse that grows food
            directly on the property.
          </p>
        </FadeIn>
      </div>

      <FadeIn
        className="carousel"
        role="region"
        aria-label="Property photo carousel"
      >
        <div className="carousel__stage">
          <img
            key={current.src}
            src={current.src}
            alt={current.caption}
            className="carousel__image"
          />
        </div>
        <button
          type="button"
          className="carousel__nav carousel__nav--prev"
          onClick={prev}
          aria-label="Previous photo"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="carousel__nav carousel__nav--next"
          onClick={next}
          aria-label="Next photo"
        >
          &#8250;
        </button>
      </FadeIn>

      <div className="container">
        <div className="carousel__meta">
          <p
            key={`cap-${index}`}
            className="carousel__caption"
            aria-live="polite"
          >
            {current.caption}
          </p>
          <p className="carousel__counter" aria-label={`Photo ${index + 1} of ${slides.length}`}>
            {index + 1} <span className="carousel__counter-divider">/</span>{' '}
            {slides.length}
          </p>
        </div>

        <FadeIn className="property__residence">
          <p>
            What transfers with the sale is a complete, operational resort.
            The aquatics facility includes seven mineral pools ranging from
            48 to 108 degrees, a sauna, a dedicated sun tanning area, and a
            private birthday and event space. The main resort building
            features cedar beam construction and original rock walls.
            Accommodations include three interior suites, three stone rock
            cabins, and two log cabins, all fully furnished and guest-ready.
            The Buffalo Saloon is equipped to the highest standard with state
            of the art commercial equipment throughout. A 30 by 96 foot
            organic regenerative greenhouse with egg-laying chickens and a
            proper coop provides fresh food grown directly on the property.
            The RV park offers 30 fully serviced sites with 20, 30, and 60
            amp hookups, water, sewer, and a dual-gender bathhouse. The
            owner&rsquo;s residence is a 5,388 square foot custom home with
            radiant floor heating, four bedrooms, three bathrooms, and a
            heated garage. A manager&rsquo;s home is also on the property.
            Every piece of equipment needed to open the doors and pick up
            exactly where we left off is included in the sale.
          </p>
          <p className="property__closer">
            To stand at the edge of the outdoor pool on a cold Montana evening,
            watching steam rise from the water while the reservoir catches the
            last light across the road, is to understand immediately why people
            have been coming here for over a century.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
