import { NavLink } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";

const activeClass = "text-sky-600";
const baseClass = "transition-colors hover:text-sky-500";

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <NavLink to="/" className="text-xl font-semibold text-slate-900">
            bookingQ
          </NavLink>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}>
            Home
          </NavLink>
          <NavLink to="/schedule" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}>
            Schedule
          </NavLink>
          <NavLink to="/bookings" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}>
            Bookings
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}>
            About
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-700">{user ? `Hello, ${user.name}` : "Guest"}</span>
          {user ? (
            <button
              type="button"
              onClick={signOut}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              Log out
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
