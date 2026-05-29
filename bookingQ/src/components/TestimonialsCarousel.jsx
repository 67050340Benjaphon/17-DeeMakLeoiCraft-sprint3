export default function TestimonialsCarousel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Customer stories</h2>
      <div className="mt-6 space-y-4">
        <article className="rounded-3xl bg-slate-50 p-5">
          <p className="text-slate-700">“bookingQ made scheduling our client demos effortless. The team loves the streamlined workflow.”</p>
          <p className="mt-3 text-sm font-semibold text-slate-900">— Alex, agency lead</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-5">
          <p className="text-slate-700">“We saved hours every week by managing appointments directly in one place.”</p>
          <p className="mt-3 text-sm font-semibold text-slate-900">— Priya, operations manager</p>
        </article>
      </div>
    </section>
  );
}
