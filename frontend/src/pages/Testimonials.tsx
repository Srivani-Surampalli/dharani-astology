import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { TESTIMONIALS } from "../constants/testimonials";
import {
  getTestimonials,
} from "../services/testimonialService";


export default function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials =
      async () => {
        try {
          const response =
            await getTestimonials();
  
            setTestimonials([
              ...TESTIMONIALS,
              ...response.testimonials,
            ]);
        } catch (error) {
          console.error(error);
        }
      };
  
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#f4fbf6] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-3 text-lg font-semibold text-green-700">
            Client Experiences
          </p>

          <h1
            className="mb-6 text-5xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Clients Say
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            Every consultation is unique. These experiences
            reflect how personalized astrological guidance
            has helped individuals navigate important life decisions.
          </p>

        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-green-700 p-12 text-white">

            <p className="mb-6 text-5xl">⭐</p>

            <h2
              className="mb-6 text-4xl font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Featured Success Story
            </h2>

            <p className="mb-6 text-lg leading-8">
              "We were facing severe marriage delays and uncertainty.
              After a detailed horoscope analysis, Dharani Astrology
              identified significant planetary influences and recommended
              traditional remedies. Within a year, everything fell into place
              and we are now happily married."
            </p>

            <div className="font-semibold">
              — Priya & Sunil
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Client Testimonials
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="mb-4 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mb-6 leading-7 text-slate-600">
                  "{testimonial.feedback}"
                </p>

                <div className="border-t pt-4">

                  <h3 className="font-semibold text-slate-800">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-green-700">
                    {testimonial.issue}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <h2
              className="text-4xl font-bold text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Clients Trust Dharani Astrology
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border p-6 text-center">
              <div className="mb-3 text-4xl">🎯</div>
              <h3 className="font-semibold">
                Personalized Guidance
              </h3>
            </div>

            <div className="rounded-2xl border p-6 text-center">
              <div className="mb-3 text-4xl">📜</div>
              <h3 className="font-semibold">
                Traditional Knowledge
              </h3>
            </div>

            <div className="rounded-2xl border p-6 text-center">
              <div className="mb-3 text-4xl">🙏</div>
              <h3 className="font-semibold">
                Practical Remedies
              </h3>
            </div>

            <div className="rounded-2xl border p-6 text-center">
              <div className="mb-3 text-4xl">🌟</div>
              <h3 className="font-semibold">
                Trusted Support
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Share Experience */}
<section className="py-20">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2
      className="mb-4 text-4xl font-bold text-slate-800"
      style={{
        fontFamily: "Playfair Display, serif",
      }}
    >
      Share Your Experience
    </h2>

    <p className="mb-8 text-lg text-slate-600">
      Have you benefited from our astrological guidance?
      We'd love to hear about your experience and how
      it has helped you on your journey.
    </p>

    <Link
      to="/feedback"
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
      Share Your Experience
    </Link>

  </div>
</section>

      {/* CTA */}
      <section className="bg-[#f4fbf6] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2
            className="mb-5 text-4xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready To Begin Your Journey?
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            Discover how personalized astrological guidance
            can help bring clarity and confidence to your life.
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
            Book Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}