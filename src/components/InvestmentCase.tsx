import FadeIn from './FadeIn'

export default function InvestmentCase() {
  return (
    <section className="section invest" id="case">
      <div className="container">
        <div className="invest__grid">
          <FadeIn className="invest__text">
            <span className="eyebrow">The Investment Case</span>
            <h2>Why This Works</h2>
            <hr className="gold-rule long" />
            <p>
              The demand for Sleeping Buffalo was never manufactured. When
              Dennis and Michelle began working on the property in 2013,
              Michelle posted a single update on Facebook letting people know
              the old Sleeping Buffalo was being brought back. By the next
              morning several thousand people had responded. People who had
              grown up on the Hi-Line. People who had been coming since they
              were kids. People from across Montana and into Canada. All of
              them saying the same thing. They had been waiting.
            </p>
            <p className="invest__pull">
              That is not a marketing result. That is a community telling you
              it was ready.
            </p>
            <p>
              The history backs it up. In the 1980s, when a swim cost about a
              dollar, this property grossed over three million dollars a year.
              The demand has always been there. Today the resort boasts an
              extremely high occupancy rate across its accommodations and the
              pools draw visitors year round from across Montana and into
              Canada.
            </p>
            <p>
              Every major capital improvement has already been made. The new
              buyer inherits a turnkey operation. New artesian well. Remodeled
              pools. Rebuilt hotel rooms. New restaurant and saloon. Restored
              stone cabins. New campground. The heavy lifting is done. What
              remains is the opportunity.
            </p>
            <p>
              You do not have to relocate to own this. The existing team is
              strong and professional management options are available. And
              116 years of community history do not need to be built. They are
              already there, and they are loyal.
            </p>
          </FadeIn>
          <FadeIn className="invest__image" delay={1}>
            <img
              src="/images/guests-in-pool.jpg"
              alt="Guests soaking in the mineral pool"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
