import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
  
            {/* Brand */}
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="text-green-500">
                  Dharani
                </span>{" "}
                Astrology
              </h3>
  
              <p className="leading-7 text-slate-300">
                Guiding individuals through the timeless
                wisdom of Astrology with clarity,
                compassion, and accuracy.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Quick Links
              </h4>
  
              <ul className="space-y-3 text-slate-300">
  <li>
    <Link to="/" className="hover:text-green-500">
      Home
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-green-500">
      About Us
    </Link>
  </li>

  <li>
    <Link to="/services" className="hover:text-green-500">
      Services
    </Link>
  </li>

  <li>
    <Link to="/problems" className="hover:text-green-500">
      Common Problems
    </Link>
  </li>

  <li>
    <Link to="/testimonials" className="hover:text-green-500">
      Testimonials
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-green-500">
      Contact
    </Link>
  </li>
</ul>
            </div>
  
            {/* Services */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Services
              </h4>
  
              <ul className="space-y-3 text-slate-300">
                <li>Life Chart & Kundali</li>
                <li>Career Astrology</li>
                <li>Business Astrology</li>
                <li>Marriage Compatibility</li>
                <li>Marriage Problems</li>
                <li>Kids Problems</li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Contact
              </h4>
  
              <div className="space-y-3 text-slate-300">
                <p>Bangalore - BTM</p>
  
                <p>
                  B. Ramapuram,
                  <br />
                  Puthalapattu,
                  <br />
                  Chittoor, India
                </p>
  
                <p>+91 8073790667</p>
  
                <p>WhatsApp: 8073790667</p>
              </div>
            </div>
  
          </div>
  
          <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
            © 2026 Dharani Astrology. All Rights Reserved.
          </div>
  
        </div>
      </footer>
    );
  }