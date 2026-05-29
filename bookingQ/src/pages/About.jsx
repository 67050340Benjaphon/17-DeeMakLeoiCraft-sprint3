export default function About() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">About bookingQ</h1>
        <p className="mt-4 text-slate-600">
          bookingQ makes it easy to schedule services, manage bookings, and keep teams aligned. Our simple interface helps operations move faster.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Designed for teams</h2>
          <p className="mt-3 text-slate-600">Manage service requests, track bookings, and collaborate in one workflow.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Built for speed</h2>
          <p className="mt-3 text-slate-600">Find the right services fast and confirm bookings in just a few clicks.</p>
        </div>
      </div>
    </div>
  );
}
