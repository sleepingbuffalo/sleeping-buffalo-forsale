import FadeIn from './FadeIn'

export default function Management() {
  return (
    <section className="management">
      <div
        className="management__bg"
        role="presentation"
        style={{ backgroundImage: "url('/images/dennis-fishing.jpg')" }}
      />
      <div className="management__overlay" />
      <div className="container">
        <div className="management__content">
          <FadeIn>
            <span className="eyebrow">Stewardship</span>
            <h2>You Do Not Have to Live Here to Own This</h2>
            <hr className="gold-rule" />
          </FadeIn>
          <FadeIn delay={1}>
            <p>
              The operation has a strong team in place and management options
              are available that allow an owner to oversee things from wherever
              they call home. Our son Christian has been by our side through all
              of it. He knows every inch of this operation, every guest by name,
              every quirk of the well and the pools and the saloon.
            </p>
            <p>
              Christian has his own next chapter calling him and plans to pursue
              naturopathic medicine once this transition is complete. But he has
              offered to stay on and help whoever comes next find their footing
              before setting off toward that path. That offer is real and it is
              genuine.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
