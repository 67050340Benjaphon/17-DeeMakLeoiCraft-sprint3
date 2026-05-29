const schedule = [
  { day: "Monday", available: "09:00 - 17:00" },
  { day: "Tuesday", available: "09:00 - 17:00" },
  { day: "Wednesday", available: "10:00 - 16:00" },
  { day: "Thursday", available: "09:00 - 18:00" },
  { day: "Friday", available: "09:00 - 16:00" },
];

export default function Schedule() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Availability schedule</h1>
        <p className="mt-2 text-slate-600">Appointments are available each weekday. Choose a slot that works for your team.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {schedule.map(({ day, available }) => (
          <div key={day} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{day}</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">{available}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
