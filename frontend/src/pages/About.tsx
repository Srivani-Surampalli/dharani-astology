import { Link } from 'react-router-dom';
import image from '../assets/images/image.jpg'

export default function About() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#f4fbf6] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1
            className="mb-6 text-5xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About Dharani Astrology
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Guiding lives through the timeless wisdom of Astrology,
            helping individuals find clarity, balance, and purpose.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <h2
                className="mb-6 text-4xl font-bold text-slate-800"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Who We Are
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Dharani Astrology is devoted to guiding individuals
                through the timeless wisdom of Astrology. Rooted in
                ancient scriptures and refined through years of
                experience, we carefully analyze planetary positions
                and cosmic energies to reveal meaningful insights
                about your life, career, relationships, health,
                and spiritual growth.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                Our mission is to help individuals understand their
                true potential and navigate life's challenges with
                confidence, wisdom, and clarity.
              </p>
            </div>

            <div>
              <img
                src={image}
                alt="Dharani Astrology"
                className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Philosophy
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">🌟</div>

              <h3 className="mb-4 text-xl font-semibold">
                Divine Guidance
              </h3>

              <p className="text-slate-600">
                Astrology is a sacred science that helps us understand
                life's deeper purpose and divine timing.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">🕉️</div>

              <h3 className="mb-4 text-xl font-semibold">
                Self Transformation
              </h3>

              <p className="text-slate-600">
                Awareness of karmic patterns enables growth,
                transformation, and conscious decision-making.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">🙏</div>

              <h3 className="mb-4 text-xl font-semibold">
                Practical Remedies
              </h3>

              <p className="text-slate-600">
                Authentic remedies and spiritual practices help
                restore balance and harmony in life.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Choose Dharani Astrology
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Accurate Analysis
              </h3>

              <p className="text-slate-600">
                Detailed horoscope and birth chart interpretation.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Personalized Guidance
              </h3>

              <p className="text-slate-600">
                Every consultation is tailored to your unique chart.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Traditional Wisdom
              </h3>

              <p className="text-slate-600">
                Based on authentic astrological principles and scriptures.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Practical Solutions
              </h3>

              <p className="text-slate-600">
                Actionable remedies for real-life challenges.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Areas We Help */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Areas We Help With
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Career Growth",
              "Business Success",
              "Marriage Compatibility",
              "Relationship Problems",
              "Child Guidance",
              "Health & Well-being",
              "Financial Stability",
              "Spiritual Growth",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-5 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Consultation Process
            </h2>
          </div>

          <div className="space-y-6">

            {[
              "Birth Details Collection",
              "Horoscope Analysis",
              "Identification of Doshas & Influences",
              "Personalized Consultation",
              "Recommended Remedies",
              "Continuous Guidance",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-xl border p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {index + 1}
                </div>

                <div>{step}</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">

          <h2
            className="mb-6 text-5xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Discover What The Stars Reveal
          </h2>

          <p className="mb-10 text-lg">
            Book a personalized consultation today and gain
            clarity about your future.
          </p>

          <div className="flex justify-center gap-4">

         <Link
         to="/book-appointment"
  className="
    rounded-full
    bg-white
    px-8
    py-4
    font-semibold
    text-green-700
    transition
    hover:bg-slate-100
  "
>
  Book An Appointment
</Link>

          </div>

        </div>
      </section>

    </div>
  );
}