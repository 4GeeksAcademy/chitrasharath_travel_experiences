"use client";

import { useState } from "react";

import { newsletterContent } from "@/data/site_content";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-sand)] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-6 md:flex md:items-end md:justify-between md:space-y-0 md:gap-8">
        <div className="max-w-xl space-y-3">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Newsletter
          </p>
          <h2 className="font-heading text-3xl leading-tight text-[var(--color-ink)]">
            {newsletterContent.heading}
          </h2>
          <p className="text-sm text-[var(--color-muted)]">{newsletterContent.blurb}</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-3 md:space-y-0 md:flex md:gap-3">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={newsletterContent.placeholder}
            className="w-full rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--color-ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-paper)] md:w-auto"
          >
            {newsletterContent.submitLabel}
          </button>
        </form>
      </div>
      {submitted ? (
        <p className="mx-auto mt-4 max-w-6xl text-sm text-[var(--color-muted)]">
          Thanks. You are on the list.
        </p>
      ) : null}
    </section>
  );
};

export default NewsletterSignup;
