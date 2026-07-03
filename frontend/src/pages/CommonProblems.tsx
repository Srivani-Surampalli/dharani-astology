import { Link } from "react-router-dom";
import { PROBLEMS } from "../constants/common-problems";

export default function CommonProblems() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#f4fbf6] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-3 text-lg font-semibold text-green-700">
            Birth Chart Analysis
          </p>

          <h1
            className="mb-6 text-5xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Common Problems & Remedies
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            Understand common astrological doshas,
            their effects on life, and traditional
            remedies recommended to restore balance
            and harmony.
          </p>

        </div>
      </section>

      {/* Problem Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2">

            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  p-8
                  shadow-sm
                  transition
                  hover:shadow-lg
                "
              >
                <h2
                  className="mb-6 text-2xl font-bold text-slate-800"
                >
                  {problem.title}
                </h2>

                <div className="mb-6">

                  <h3 className="mb-3 font-semibold text-red-600">
                    Effects
                  </h3>

                  <ul className="space-y-2">
                    {problem.effects.map((effect) => (
                      <li
                        key={effect}
                        className="text-slate-600"
                      >
                        • {effect}
                      </li>
                    ))}
                  </ul>

                </div>

                <div>

                  <h3 className="mb-3 font-semibold text-green-700">
                    Recommended Remedies
                  </h3>

                  <ul className="space-y-2">
                    {problem.remedies.map((remedy) => (
                      <li
                        key={remedy}
                        className="text-slate-600"
                      >
                        ✓ {remedy}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2
            className="mb-6 text-4xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Every Horoscope Is Unique
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            The presence of a dosha does not necessarily
            mean negative outcomes. The strength of planets,
            house placements, and other astrological factors
            must be carefully analyzed before drawing conclusions.
          </p>

        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2
            className="mb-5 text-4xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Need A Personalized Analysis?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Receive a detailed horoscope reading and
            remedies tailored specifically to your chart.
          </p>

          <Link
            to="/book-appointment"
            className="
              inline-flex
              rounded-full
              bg-green-700
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-green-800
            "
          >
            Schedule Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}