import FadeIn from './FadeIn'

const photos = [
  { src: '/images/guests-in-pool.jpg', alt: 'Guests in the mineral pool' },
  { src: '/images/greenhouse.jpg', alt: 'The regenerative greenhouse' },
  { src: '/images/outdoor-pool-steam.jpg', alt: 'Steam rising from the outdoor pool' },
  { src: '/images/cabin-night.jpg', alt: 'A cabin lit up at night' },
  { src: '/images/saloon-bar.jpg', alt: 'The Buffalo Saloon bar' },
  { src: '/images/aerial-nelson.jpg', alt: 'Aerial view of Nelson Reservoir' },
  { src: '/images/dennis-fishing.jpg', alt: 'Dennis fishing on the reservoir' },
  { src: '/images/outdoor-pool-evening.jpg', alt: 'The outdoor pool in the evening' },
]

export default function Community() {
  return (
    <section className="section community" id="community">
      <div className="container">
        <FadeIn className="community__intro">
          <span className="eyebrow">The Heart of It</span>
          <h2>What This Place Has Become</h2>
          <hr className="gold-rule center long" />
          <p>
            What happened after we reopened is hard to put into words. A woman
            who was turning 99 years old came out to celebrate her birthday in
            these pools, the same pools where she had first learned to swim
            decades before. Every summer the Hi-Line Classic Car Tour rolls
            through and the property fills up with over 100 beautiful machines
            from another era. A girls church group passing through on a road
            trip pulled over and spent an afternoon helping us weed the
            greenhouse. A guest once brought a full grown parrot into the
            Buffalo Saloon. That bird sat on our son Christian&rsquo;s
            shoulder the whole night while he bartended, greeting every single
            person who walked through the door.
          </p>
          <p className="closer">
            This is not a resort that people visit. It is a place people come
            home to.
          </p>
        </FadeIn>
        <div className="community__masonry">
          {photos.map((p, i) => (
            <FadeIn
              key={p.src}
              className="photo"
              delay={(i % 4) as 0 | 1 | 2 | 3}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
