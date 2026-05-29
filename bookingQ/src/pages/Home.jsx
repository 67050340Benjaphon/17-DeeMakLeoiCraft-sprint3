import { useMemo, useState } from "react";
import services from "../data/services";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import FeaturedCarousel from "../components/FeaturedCarousel";
import StatsSection from "../components/StatsSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(
    () =>
      services.filter((item) =>
        [item.title, item.category, item.description].some((field) =>
          field.toLowerCase().includes(query.toLowerCase()),
        ),
      ),
    [query],
  );

  return (
    <div className="space-y-10">
      <HeroSection />
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore services</p>
            <h2 className="text-3xl font-semibold text-slate-900">Find the right support for your team.</h2>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <FeaturedCarousel />
      <StatsSection />
      <TestimonialsCarousel />
    </div>
  );
}
