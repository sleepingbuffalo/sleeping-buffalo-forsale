import FadeIn from './FadeIn'

type Item = {
  src: string
  caption: string
  alt: string
  span: string
}

const items: Item[] = [
  {
    src: '/images/inside pool at night.jpg',
    caption: 'The Indoor Mineral Pools',
    alt: 'The indoor mineral pools at night',
    span: 's-tall',
  },
  {
    src: '/images/outside pool at dusk.jpg',
    caption: 'The Outdoor Pool — 128 Feet of Open Sky',
    alt: 'The outdoor mineral pool at dusk',
    span: 's-wide',
  },
  {
    src: '/images/log cabin interior.jpg',
    caption: 'The Stone Cabins — Built with Fort Peck Rock',
    alt: 'Inside one of the historic log cabins',
    span: 's-mid',
  },
  {
    src: '/images/buffalo saloon.jpg',
    caption: 'The Buffalo Saloon and 54 Prime Steakhouse',
    alt: 'The Buffalo Saloon at night',
    span: 's-mid2',
  },
  {
    src: '/images/greenhouse.jpg',
    caption: 'The Regenerative Greenhouse',
    alt: 'The greenhouse on the property',
    span: 's-mid3',
  },
  {
    src: '/images/campground.jpg',
    caption: 'The RV Park and Campground',
    alt: 'The RV park and campground',
    span: 's-feat',
  },
  {
    src: '/images/areal of nelson.jpg',
    caption: 'Nelson Reservoir — Right Across the Road',
    alt: 'Aerial view of Nelson Reservoir',
    span: 's-sm1',
  },
  {
    src: '/images/cabin 3 exterior at night.jpg',
    caption: 'Where Guests Come Back Year After Year',
    alt: 'Cabin three lit up at night',
    span: 's-sm2',
  },
]

export default function Showcase() {
  return (
    <section className="section showcase">
      <div className="container">
        <FadeIn className="showcase__header">
          <span className="eyebrow">A Decade of Care</span>
          <h2>Ten Years of Building Something Worth Keeping</h2>
          <hr className="gold-rule center" />
        </FadeIn>
        <div className="showcase__grid">
          {items.map((item, i) => (
            <FadeIn
              key={item.src}
              className={`showcase__item ${item.span}`}
              delay={(i % 3) as 0 | 1 | 2}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="showcase__caption">
                <span>{item.caption}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
