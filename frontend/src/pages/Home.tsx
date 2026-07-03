import { Link } from "react-router-dom";
import homeVideo from "../assets/videos/home.mp4";
import panditPhoto from "../assets/images/pandit.jpeg";

export default function Hero() {
    return (
      <section className="bg-[#f4fbf6]">
        <div className="mx-auto flex max-w-7xl items-center gap-16 px-6 py-20">
  
          {/* Left Content */}
          <div className="flex-1">
  
            <p className="mb-3 text-lg font-semibold text-green-700">
              Dharani Astrology
            </p>
  
            <h1
              className="mb-6 text-3xl font-bold leading-tight text-slate-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Guiding Your Life Through The Timeless
              Wisdom of Astrology
            </h1>
  
            <p className="mb-6 text-base leading-8 text-slate-600">
              Dharani Astrology is devoted to guiding
              individuals through the timeless wisdom
              of Astrology. Rooted in ancient scriptures
              and refined through years of experience,
              we carefully analyze planetary positions
              and cosmic energies to reveal meaningful
              insights about your life, career,
              relationships, health, and spiritual growth.
            </p>
  
            <p className="mb-10 text-base leading-8 text-slate-600">
              Our approach goes beyond simple predictions.
              We believe astrology is a divine tool for
              self-understanding and transformation,
              helping individuals make confident decisions
              and move forward with clarity and purpose.
            </p>

            <div className="mb-10 flex flex-wrap gap-5">

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-green-700">
                10+
              </h3>

              <p className="text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-green-700">
                1000+
              </h3>

              <p className="text-slate-600">
                Consultations
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-green-700">
                95%
              </h3>

              <p className="text-slate-600">
                Client Satisfaction
              </p>
            </div>

            </div>
  
            <div className="flex gap-4">
              <Link
              to="/services"
                className="
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
                Explore Services
              </Link>
  
              <Link
              to="/book-appointment"
                className="
                  rounded-full
                  bg-slate-700
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Book An Appointment
              </Link>
            </div>
  
          </div>
  
          {/* Right Side */}
         <div className="flex gap-16">

         {/* Pandit Photo */}
          <div
            className="
              absolute
              z-20
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <img
              src={panditPhoto}
              alt="Sri Dharani Guruji"
              className="
                h-40
                w-40
                rounded-full
                border-4
                border-white
                object-cover
                shadow-2xl
              "
            />
          </div>

         <div className="relative flex-1 overflow-hidden rounded-3xl">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-[350px] w-full object-cover"
  >
    <source src={homeVideo} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/20" />

  <div className="absolute bottom-8 left-8 text-white">
    <h3 className="text-3xl font-bold">
      Dharani Astrology
    </h3>

    <p className="mt-2">
      Career • Marriage • Business • Health
    </p>
  </div>

</div>
         </div>
  
        </div>
      </section>
    );
  }