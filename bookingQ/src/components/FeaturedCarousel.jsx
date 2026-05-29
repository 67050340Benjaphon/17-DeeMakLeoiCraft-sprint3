export default function FeaturedCarousel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Popular service categories</h2>
        <p className="text-sm text-slate-500">Designed for fast bookings.</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Digital</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">Web services</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Growth</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">Campaign setup</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Training</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">Team onboarding</p>
        </div>
      </div>
    </section>
  );
}
