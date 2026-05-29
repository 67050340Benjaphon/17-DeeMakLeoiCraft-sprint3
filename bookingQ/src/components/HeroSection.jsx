import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-sky-600 p-8 text-white shadow-lg sm:p-12">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sky-100">Service Booking</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Fast, reliable booking for teams and professionals.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-sky-100/90">
          Discover services, schedule appointments, and manage bookings from a single dashboard built for modern businesses.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/schedule"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            View schedule
          </Link>
          <Link
            to="/bookings"
            className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            My bookings
          </Link>
        </div>
      </div>
    </section>
  );
}
