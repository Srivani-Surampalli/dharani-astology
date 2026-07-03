// src/pages/Contact.tsx

export default function Contact() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h1
            className="mb-4 text-5xl font-bold text-slate-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact Us
          </h1>

          <p className="text-lg text-slate-600">
            Get in touch with Dharani Astrology for any inquiries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Details */}
          <div className="space-y-6">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
  <h3 className="mb-3 text-xl font-semibold">
    📍 Address
  </h3>

  <p className="leading-7 text-slate-600">
    <span className="block text-lg font-bold text-gray-700">
      Peddineni Sravana Kumar
    </span>

    Bangalore - BTM
    <br />
    B. Ramapuram
    <br />
    Puthalapattu
    <br />
    Chittoor, India
  </p>
</div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                📞 Phone
              </h3>

              <a
                href="tel:+918073790667"
                className="text-green-700"
              >
                +91 8073790667
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                💬 WhatsApp
              </h3>

              <a
                href="https://wa.me/918073790667"
                target="_blank"
                rel="noreferrer"
                className="text-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                ✉️ Email
              </h3>

              <p className="text-slate-600">
                dharaniastrology@gmail.com
              </p>
            </div>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Location"
              width="100%"
              height="100%"
              loading="lazy"
              src="https://maps.google.com/maps?q=BTM%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>

        </div>
      </div>
    </section>
  );
}