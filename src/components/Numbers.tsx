import FadeIn from './FadeIn'

type Stat = { value: string; label: string }

const stats: Stat[] = [
  { value: '1909', label: 'Year the hot springs were first discovered' },
  { value: '116', label: 'Years of continuous community history' },
  { value: '3,200 ft', label: 'Depth of the artesian mineral well drilled in 2021' },
  { value: '128 ft', label: 'Length of the outdoor pool' },
  { value: '$3M+', label: 'Annual gross revenue in the 1980s at one dollar a swim' },
  { value: '30,000+', label: 'Followers who showed up overnight when we announced the reopening' },
  { value: '$9.7M', label: 'Asking price' },
]

export default function Numbers() {
  return (
    <section className="section numbers">
      <div className="container">
        <FadeIn className="numbers__header">
          <span className="eyebrow">By the Numbers</span>
          <h2>What You Are Acquiring</h2>
          <hr className="gold-rule center" />
        </FadeIn>
        <div className="numbers__grid">
          {stats.map((s, i) => (
            <FadeIn
              key={s.value}
              className="numbers__card"
              delay={(i % 3) as 0 | 1 | 2}
            >
              <div className="stat">{s.value}</div>
              <div className="label">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
