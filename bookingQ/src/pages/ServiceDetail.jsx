import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../data/services";
import BookingModal from "../components/BookingModal";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = useMemo(() => services.find((item) => item.slug === slug), [slug]);
  const [isOpen, setIsOpen] = useState(false);

  if (!service) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-700">Service not found. Please return to the home page.</p>
        <button onClick={() => navigate(-1)} className="mt-4 rounded-full bg-sky-600 px-5 py-3 text-white">
          Go back
        </button>
      </div>
    );
  }

  const handleBooked = () => {
    // booking confirmed on backend, keep the UI flow simple
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              {service.category}
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">{service.title}</h1>
            <p className="mt-5 text-slate-600">{service.description}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-4">
                <dt className="text-sm text-slate-500">Duration</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-900">{service.duration}</dd>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <dt className="text-sm text-slate-500">Price</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-900">{service.price}</dd>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <dt className="text-sm text-slate-500">Team size</dt>
                <dd className="mt-2 text-lg font-semibold text-slate-900">{service.teamSize}</dd>
              </div>
            </dl>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Booking</p>
            <p className="text-2xl font-semibold text-slate-900">Ready to get started?</p>
            <button
              onClick={() => setIsOpen(true)}
              className="w-full rounded-3xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Book this service
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {service.features.map((feature) => (
          <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-900">{feature}</p>
          </div>
        ))}
      </div>
      <BookingModal service={service} isOpen={isOpen} onClose={() => setIsOpen(false)} onBooked={handleBooked} />
    </div>
  );
}
