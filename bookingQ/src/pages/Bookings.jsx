import { useEffect, useState } from "react";
import { fetchBookings } from "../api/bookingQClient";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadBookings() {
      setIsLoading(true);
      setError("");

      try {
        const result = await fetchBookings();
        if (isMounted) {
          setBookings(Array.isArray(result) ? result : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.message || "Unable to load bookings.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBookings();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Your bookings</h1>
        <p className="mt-2 text-slate-600">Review upcoming service appointments and stay on schedule.</p>
      </div>
      {isLoading ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
          <p className="text-lg font-medium">Loading your bookings…</p>
        </div>
      ) : error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 text-rose-700">
          <p className="text-lg font-medium">{error}</p>
          <p className="mt-2 text-sm text-rose-700">Check your backend service or API URL and refresh.</p>
        </div>
      ) : bookings.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
          <p className="text-lg font-medium">You have no bookings yet.</p>
          <p className="mt-2 text-slate-600">Head back to the home page and book a service to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">{booking.serviceName}</p>
                  <p className="text-xl font-semibold text-slate-900">{booking.name}</p>
                </div>
                <p className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{booking.date} @ {booking.time}</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">Booking confirmed for {booking.email}.</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
