import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold no-underline"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <span className="text-green-700">Dharani</span>{" "}
          <span className="text-slate-800">Astrology</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <li
                  key={item.path}
                  className="relative"
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `
                      relative
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-green-700"
                          : "text-slate-700 hover:text-green-700"
                      }
                    `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}

                        <span
                          className={`
                            absolute
                            left-0
                            -bottom-1
                            h-[2px]
                            bg-green-700
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "w-full"
                                : "w-0 hover:w-full"
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link
            to="/book-appointment"
            className="
              cursor-pointer
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
            style={{
              background:
                "linear-gradient(90deg, #2e8b57 0%, #d4af37 100%)",
            }}
          >
            Book An Appointment
          </Link>

        </div>

      </div>
    </header>
  );
}