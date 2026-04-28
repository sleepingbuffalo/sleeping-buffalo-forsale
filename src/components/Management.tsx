import FadeIn from './FadeIn'

export default function Management() {
  return (
    <section className="management">
      <div className="management__layout">
        <div className="management__text">
          <FadeIn>
            <span className="eyebrow">Stewardship</span>
            <h2>This Place Will Be in Good Hands</h2>
            <hr className="gold-rule long" />
          </FadeIn>
          <FadeIn delay={1}>
            <p>
              You do not have to move to Saco, Montana to own Sleeping Buffalo.
              The operation has a strong team in place and management options
              are available that allow an owner to oversee things from wherever
              they call home.
            </p>
            <p>
              Our son Christian has been by our side through all of it. He
              knows every guest by name, every quirk of the well, every rhythm
              of the seasons here on the Hi-Line. He has offered to stay on
              and guide whoever comes next through the transition before
              setting off to pursue his own passion in naturopathic medicine.
              That offer is genuine and it comes from a place of love for this
              property.
            </p>
            <p>
              What matters is not where you live. What matters is that the
              right person is at the helm with the right people around them.
            </p>
          </FadeIn>
        </div>
        <div className="management__image" role="presentation" />
      </div>
    </section>
  )
}
