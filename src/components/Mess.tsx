import FadeIn from './FadeIn'

export default function Mess() {
  return (
    <section className="section mess">
      <div className="container">
        <FadeIn className="mess__header">
          <span className="eyebrow">What We Found</span>
          <h2>What We Found in 2013</h2>
          <hr className="gold-rule center" />
        </FadeIn>
        <FadeIn className="mess__images" delay={1}>
          <img
            src="/images/before-algae-pool.jpg"
            alt="The pool overrun with algae before restoration"
            loading="lazy"
          />
          <img
            src="/images/inside cold pool.jpg"
            alt="The empty cold pool before restoration"
            loading="lazy"
          />
        </FadeIn>
        <FadeIn className="mess__body" delay={2}>
          <p>
            The state had shut the whole operation down for sanitary reasons.
            Algae had taken over the pools. Mice had moved into the rooms. The
            previous owner had rigged up old carnival water slides, and the local
            EMTs who still come here to soak told us those slides had been
            sending people to the emergency room on a regular basis. The doors
            were locked and the whole place was falling apart. We figured we
            would slap some paint on the walls and get the pools running.
          </p>
          <p>
            Then Michelle posted about it on Facebook. By the next morning that
            post had gathered several thousand likes and followers overnight. We
            went back and looked at the old books. In the 1980s, when a swim cost
            about a dollar, this place was grossing over three million dollars a
            year. The demand was never the question. People had just been waiting
            for someone to give them a reason to come back.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
