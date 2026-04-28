import FadeIn from './FadeIn'

export default function Letter() {
  return (
    <section className="letter" id="letter">
      <div className="container">
        <div className="letter__grid">
          <FadeIn>
            <h2>A Letter to Whoever Comes Next</h2>
            <p className="letter__sub">
              From Dennis Simpson, steward of Sleeping Buffalo Hot Springs and
              Resort
            </p>
            <hr className="letter__rule" />
            <div className="letter__body">
              <p>
                I want to tell you how this place began, because I think it
                matters more than how I found it.
              </p>
              <p>
                In 1909 an oil drilling crew was working the Hi-Line plains
                outside of Saco, Montana. They hit something they were not
                looking for. Hot mineral water came rushing up from deep in the
                earth and they could not shut it off. Someone in the community
                learned about it and saw not a problem but an answer. Their son
                had polio. They piped that water into a horse trough and let the
                boy bathe in it.
              </p>
              <p>
                That is where Sleeping Buffalo Hot Springs begins. Not with a
                resort or a business plan, but with a parent who loved their
                child and a community that believed in something.
              </p>
              <p>
                The Saco Health Legion eventually built the first proper pools
                and opened the place to the public. For decades it was the
                destination Hi-Line families came to know by heart. My wife
                Michelle grew up in Whitewater, just down the road. She
                remembered it from childhood.
              </p>
              <p>
                I had spent over ten years running a hot springs in Bozeman.
                Sold it. Thought I was done. Retirement lasted about five
                minutes before I went half crazy with nothing to do. So when
                Michelle told me the old Sleeping Buffalo had been shut down and
                was sitting empty, I drove out to Saco to take a look.
              </p>
              <p>
                What I found was a mess. The state had shut the whole operation
                down for sanitary reasons. Algae had taken over the pools. Mice
                had moved into the rooms. The previous owner had rigged up old
                carnival water slides and the local EMTs who still come here to
                soak told me those slides had been sending people to the
                emergency room on a regular basis. The doors were locked and the
                whole place was falling apart.
              </p>
              <p>
                I figured I would slap some paint on the walls, clean up the
                mess, and get the pools running again. Nothing too serious.
              </p>
              <p>Then Michelle posted about it on Facebook.</p>
              <p>
                She just wrote that we were out here working on the old Sleeping
                Buffalo and that we planned to reopen it. By the next morning
                that post had gathered several thousand likes and followers
                overnight. People who grew up on the Hi-Line, people who had
                been coming here since they were kids, people from across
                Montana and into Canada, all of them saying they had been
                waiting for this place to come back.
              </p>
              <p>
                That changed everything. I went back and looked at the old
                books. In the 1980s, when a swim cost about a dollar, this place
                was grossing over three million dollars a year. The demand was
                never the question. People had just been waiting for someone to
                give them a reason to return.
              </p>
              <p>
                We went at it with everything we had. Over the next ten years we
                rebuilt the hot springs from the ground up, restored the
                original stone cabins that were quarried from the same rock used
                to build Fort Peck Dam, added an RV park, a greenhouse, a saloon
                and steakhouse, and remodeled the outdoor pool to stretch 128
                feet under an open Montana sky. We drilled a new artesian well
                3,200 feet deep in 2021 so the mineral water would flow clean
                and pure the way it was always meant to.
              </p>
              <p>
                We opened on Christmas Day in 2014. I will never forget pulling
                up that morning and finding Kathy Salsberry standing outside at
                9am with a smile on her face, waiting to come in. She has been a
                regular ever since.
              </p>
              <p>
                What happened after that is hard to put into words. A woman who
                was turning 99 came out to celebrate her birthday in these
                pools, the same pools where she had first learned to swim
                decades before. Every summer the Hi-Line Classic Car Tour rolls
                through and the property fills up with over 100 beautiful
                machines from another era. A guest once brought a full grown
                parrot into the Buffalo Saloon and that bird sat on my son
                Christian&rsquo;s shoulder the whole night while he bartended,
                greeting every single person who walked through the door.
              </p>
              <p>
                The honest reason I am selling is simple. Michelle lives and
                works in Scottsdale and I miss her. That is the whole story. I
                built something I am deeply proud of and now I want to go be
                with my wife. A man can only run in two directions for so long.
              </p>
              <p>
                My son Christian has been by my side through all of it. He knows
                every inch of this operation, every guest by name, every quirk
                of the well and the pools and the saloon. Christian has his own
                next chapter calling him and plans to pursue naturopathic
                medicine once this transition is complete. But he has offered to
                stay on and help whoever comes next find their footing before
                setting off toward that path. That offer is real and it is
                genuine.
              </p>
              <p>
                I also want to be clear about something that surprises people
                when they hear it. You do not have to live here to run this
                place. The operation has a strong team in place and management
                options are available that allow an owner to oversee things
                from wherever they call home. The difference for me is that
                after more than fifty years of being the person the buck stops
                with, I am not looking to manage from a distance. I am looking
                to hand the reins to someone who is hungry for them. There is a
                difference between being away from a business and being finished
                with one, and I am finished. Not because this place has not been
                worth every moment. It has been the greatest professional
                chapter of my life. But every chapter has an ending, and I have
                earned mine.
              </p>
              <p>
                What I am asking you to think about is not a business
                transaction. It is whether you are the kind of person who feels
                something when you walk into a place that has meant something to
                people for nearly a hundred years. Whether you can picture
                yourself standing at the edge of that outdoor pool on a cold
                Montana night watching the steam rise into a sky full of stars.
                Whether you have ever wanted to be the reason a community has a
                place to gather.
              </p>
              <p>
                Sleeping Buffalo has been cared for by more hands than mine. I
                am just the latest in a long line of people who saw something
                worth saving here and decided to give it everything they had. I
                hope you are the next one.
              </p>
              <p>
                When you are ready to talk, reach out to Carly Bishop at
                Northwest Realty and Auction. She knows this property and she
                will take good care of you.
              </p>
            </div>
            <div className="letter__signature">
              <p className="salutation">
                With gratitude for everything this place has given my family,
              </p>
              <p className="name">Dennis Simpson</p>
              <p className="role">
                Steward, Sleeping Buffalo Hot Springs and Resort
                <br />
                Saco, Montana
              </p>
            </div>
          </FadeIn>
          <FadeIn className="letter__portrait" delay={1} as="figure">
            <img
              src="/images/dennis-michelle.jpg"
              alt="Dennis and Michelle Simpson at Sleeping Buffalo"
              loading="lazy"
            />
            <figcaption>Dennis and Michelle Simpson</figcaption>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
