import { useCallback, useEffect, useState } from 'react'
import FadeIn from './FadeIn'

type GalleryImage = { src: string; caption: string }

const galleryImages: GalleryImage[] = [
  { src: '/images/outdoor-pool-night-lit.jpg', caption: '128 feet of open Montana sky' },
  { src: '/images/outdoor-pool-dusk.jpg', caption: 'The outdoor pool at dusk' },
  { src: '/images/outdoor-pool-steam.jpg', caption: 'Steam rising on a cold evening' },
  { src: '/images/aerobics-ladies.jpg', caption: 'The community this place has built' },
  { src: '/images/indoor-pool-wide.jpg', caption: 'The indoor mineral pools' },
  { src: '/images/indoor-pool-big.jpg', caption: 'Multiple temperatures, year-round' },
  { src: '/images/outdoor-hot-tubs.jpg', caption: 'Hot tubs under the Montana sky' },
  { src: '/images/cabin-exterior.jpg', caption: 'Stone cabins quarried from Fort Peck Dam rock' },
  { src: '/images/cabin-interior.jpg', caption: 'Every modern comfort inside' },
  { src: '/images/cabin-interior-2.jpg', caption: 'Fully restored, fully equipped' },
  { src: '/images/cabin-night.jpg', caption: 'The cabins at night' },
  { src: '/images/log-cabin-interior.jpg', caption: 'Warm and built to last' },
  { src: '/images/saloon-exterior.jpg', caption: 'The Buffalo Saloon and 54 Prime Steakhouse' },
  { src: '/images/saloon-bar.jpg', caption: 'Built from scratch in 2023' },
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
  { src: '/images/dennis-michelle.jpg', caption: 'Dennis and Michelle Simpson' },
]

export default function Property() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isOpen = lightboxIndex !== null

  const close = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(
    () => setLightboxIndex(i => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  )
  const prev = useCallback(
    () =>
      setLightboxIndex(i =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, next, prev])

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

      <FadeIn className="property__hero">
        <img
          src="/images/aerial-full-property.jpg"
          alt="Aerial view of the full Sleeping Buffalo property"
          loading="lazy"
        />
      </FadeIn>

      <div className="container">
        <FadeIn className="property__gallery">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="gallery-tile"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${img.caption}`}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
            </button>
          ))}
        </FadeIn>

        <FadeIn className="property__residence">
          <p>
            The owner&rsquo;s residence is a 5,388 square foot custom built
            home with radiant floor heating, a heated garage, detailed woodwork,
            four bedrooms, three bathrooms, and a concrete encased walk in gun
            safe. A 1,200 square foot manager&rsquo;s home with three bedrooms
            and two bathrooms sits on the property as well. A 100 by 50 foot
            shop provides additional storage, parking, and workspace.
          </p>
          <p className="property__closer">
            To stand at the edge of the outdoor pool on a cold Montana evening,
            watching steam rise from the water while the reservoir catches the
            last light across the road, is to understand immediately why people
            have been coming here for over a century.
          </p>
        </FadeIn>
      </div>

      {isOpen && lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Close gallery"
          >
            &times;
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={e => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <figure className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].caption}
              className="lightbox__image"
            />
            <figcaption key={`cap-${lightboxIndex}`} className="lightbox__caption">
              {galleryImages[lightboxIndex].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={e => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
