"use client";

import { useState } from "react";

import { testimonials } from "@/data/site_content";

const HomeTestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = testimonials[testimonialIndex];

  return (
    <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-12">
      <img src={testimonial.backgroundImageUrl} alt="Client testimonial background" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-3xl rounded-3xl bg-white/92 p-8 text-center">
        <p className="font-heading text-3xl uppercase leading-tight text-[var(--color-ink)]">“{testimonial.quote}”</p>
        <p className="mt-4 text-sm uppercase tracking-[0.15em] text-[var(--color-muted)]">{testimonial.attribution}</p>
        <div className="mt-5 flex items-center justify-center gap-2">
          <button type="button" onClick={() => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.18em]">Prev</button>
          <button type="button" onClick={() => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.18em]">Next</button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;
