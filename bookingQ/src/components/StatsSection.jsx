export default function StatsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {[
        { label: "Bookings managed", value: "1,200+" },
        { label: "Satisfied customers", value: "98%" },
        { label: "Average response time", value: "30 mins" },
      ].map((item) => (
        <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
          <p className="mt-2 text-sm text-slate-500">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
