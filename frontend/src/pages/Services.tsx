import { Link } from "react-router-dom";
import { SERVICES } from "../constants/services";


const faqs = [
  {
    question: "How long does a consultation take?",
    answer:
      "Most consultations take between 30 to 60 minutes depending on the service selected.",
  },
  {
    question: "Do I need my birth time?",
    answer:
      "Accurate birth details help provide more precise astrological analysis and predictions.",
  },
  {
    question: "Will remedies be provided?",
    answer:
      "Yes. When required, personalized remedies (Pariharas) are suggested based on your horoscope.",
  },
  {
    question: "Can consultations be done online?",
    answer:
      "Yes. Consultations can be conducted through phone, video call, or in person.",
  },
];

export default function Services() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#f4fbf6] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-3 text-lg font-semibold text-green-700">
            Dharani Astrology Services
          </p>

          <h1
            className="mb-6 text-5xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Astrology Services Tailored To Your Needs
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            Whether you're facing career uncertainty,
            relationship challenges, business decisions,
            marriage delays, or family concerns,
            our personalized consultations provide
            clarity, guidance, and practical solutions.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Consultation Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="mb-5 text-5xl">
                  {service.icon}
                </div>

                <h3 className="mb-5 text-2xl font-semibold text-slate-800">
                  {service.title}
                </h3>

                <ul className="mb-8 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-slate-600"
                    >
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                to='/book-appointment'
                  className="
                    rounded-full
                    bg-green-700
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-green-800
                  "
                >
                  Book Consultation
                </Link>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* What To Expect */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              What You Can Expect
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Detailed Horoscope Analysis",
              "Planetary Influence Assessment",
              "Dosha Identification",
              "Personalized Guidance",
              "Practical Remedies (Pariharas)",
              "Future Opportunity Insights",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Who Should Consult */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <h2
              className="mb-8 text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Who Should Consult Us?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "Career uncertainty",
                "Marriage delays",
                "Relationship conflicts",
                "Business challenges",
                "Financial instability",
                "Health concerns",
                "Child-related issues",
                "Repeated obstacles in life",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border p-5 text-left"
                >
                  • {item}
                </div>
              ))}

            </div>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-slate-600">
              A personalized astrology consultation can help identify
              underlying planetary influences and provide practical
              guidance to move forward with clarity and confidence.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2
            className="mb-5 text-4xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Need Guidance?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Contact us to discuss which consultation is
            best suited for your situation.
          </p>

          <Link
            to="/contact"
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
            Contact Us
          </Link>

        </div>
      </section>

    </div>
  );
}