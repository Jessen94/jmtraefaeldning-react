"use client";

import { useCallback, FormEvent } from "react";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Forespørgsel fra ${SITE.name}`);
    const body = encodeURIComponent(
      [
        name && `Navn: ${name}`,
        email && `E-mail: ${email}`,
        phone && `Telefon: ${phone}`,
        "",
        "Besked:",
        message || "(ingen tekst)",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block font-display text-sm font-semibold text-primary">
          Navn *
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-2 block w-full border-0 border-b-2 border-outline-variant bg-transparent px-1 py-3 text-base text-on-surface outline-none transition focus:border-focus-brown focus-visible:border-focus-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-brown"
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-display text-sm font-semibold text-primary">
          E-mail *
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          className="mt-2 block w-full border-0 border-b-2 border-outline-variant bg-transparent px-1 py-3 text-base text-on-surface outline-none transition focus:border-focus-brown focus-visible:border-focus-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-brown"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-display text-sm font-semibold text-primary">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="mt-2 block w-full border-0 border-b-2 border-outline-variant bg-transparent px-1 py-3 text-base text-on-surface outline-none transition focus:border-focus-brown focus-visible:border-focus-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-brown"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-display text-sm font-semibold text-primary">
          Besked *
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={6}
          className="mt-2 block w-full resize-y rounded-md border border-card-border px-4 py-3 text-base leading-relaxed text-on-surface outline-none transition focus:border-focus-brown focus-visible:border-focus-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-brown md:rounded-lg"
          placeholder=""
        />
      </div>
      <button
        type="submit"
        className="w-full min-h-[48px] rounded-base bg-accent-cta px-8 py-3.5 font-display text-base font-bold text-on-accent-cta shadow-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
      >
        Send forespørgsel
      </button>
      <p className="text-sm text-on-surface-variant">
        Vi åbner din mailklient til {SITE.email} med din besked. Du kan også ringe eller skrive direkte hvis du foretrækker
        det.
      </p>
    </form>
  );
}
