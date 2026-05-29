export default function SearchBar({ value, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5">
      <label className="sr-only" htmlFor="service-search">
        Search services
      </label>
      <input
        id="service-search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
        placeholder="Search services by name, category, or keyword"
      />
    </div>
  );
}
