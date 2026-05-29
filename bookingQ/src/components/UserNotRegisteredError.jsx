export default function UserNotRegisteredError() {
  return (
    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 text-slate-900">
      <h2 className="text-2xl font-semibold">Access restricted</h2>
      <p className="mt-4 text-slate-700">
        You need to be signed in to view your bookings. Please log in or register to continue.
      </p>
    </div>
  );
}
