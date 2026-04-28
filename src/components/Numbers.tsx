import FadeIn from './FadeIn'

type Stat = { value: string; label: string }

const stats: Stat[] = [
  { value: '1909', label: 'The year the hot springs were first discovered' },
  { value: '116', label: 'Years of continuous community history' },
  { value: '3,200 ft', label: 'Depth of the new artesian mineral well' },
  { value: '128 ft', label: 'Length of the outdoor pool' },
  { value: '10', label: 'Years of continuous reinvestment and expansion since 2014' },
  { value: '$9.7M', label: 'Asking price for the complete operation' },
  { value: 'Est. 1909', label: 'A legacy no amount of money can manufacture' },
]

export default function Numbers() {
  return (
    <section className="section numbers">
      <div className="container">
        <FadeIn className="numbers__header">
          <span className="eyebrow">By the Numbers</span>
          <h2>What You Are Stepping Into</h2>
          <hr className="gold-rule center long" />
        </FadeIn>
        <div className="numbers__grid">
          {stats.map((s, i) => (
            <FadeIn
              key={s.value}
              className="numbers__card"
              delay={(i % 4) as 0 | 1 | 2 | 3}
            >
              <div className="stat">{s.value}</div>
              <div className="label">{s.label}</div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="numbers__closer" delay={2}>
          Sleeping Buffalo is not being sold. It is being passed on.
        </FadeIn>
      </div>
    </section>
  )
}
