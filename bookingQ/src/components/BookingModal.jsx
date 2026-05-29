import { useState } from "react";
import { bookService } from "../api/bookingQClient";

export default function BookingModal({ service, isOpen, onClose, onBooked }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const booking = await bookService({
        serviceId: service.id,
        serviceName: service.title,
        name,
        email,
        date,
        time,
      });
      onBooked(booking);
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      setIsSubmitting(false);
      const message = error instanceof Error ? error.message : "Unable to complete the booking. Please try again.";
      setErrorMessage(message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Book {service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">Choose a date and enter your contact details.</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Full name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Date</label>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Time</label>
              <select
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
              >
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Booking…" : "Confirm booking"}
          </button>
          {errorMessage ? (
            <p className="mt-3 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
