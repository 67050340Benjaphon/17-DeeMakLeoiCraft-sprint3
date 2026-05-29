import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="p-6">
        <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
          {service.category}
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
        <p className="mt-3 text-slate-600">{service.description}</p>
        <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-500">
          <span>{service.duration}</span>
          <span className="font-semibold text-slate-900">{service.price}</span>
        </div>
        <Link
          to={`/services/${service.slug}`}
          className="mt-6 inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
