"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { Section } from "./Section";
import { site } from "@/content/site";

const field =
  "w-full border-b border-hairline bg-transparent py-3 text-fg placeholder:text-fg-faint outline-none transition-colors duration-500 focus:border-accent";

export default function Contact() {
  const { contact } = site;
  const f = contact.fields;
  const [sent, setSent] = useState(false);

  // No backend is wired yet: the form confirms locally. Replace the body of
  // this handler with a route handler call or a form service when ready.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact" label={contact.label} headline={contact.headline} aside={contact.sub}>
      <div className="grid gap-16 pb-24 md:grid-cols-12 md:pb-32">
        <Reveal className="md:col-span-7">
          {sent ? (
            <p className="font-display text-2xl font-300 text-fg">{f.sent}</p>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="label text-fg-faint">{f.name}</span>
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="block">
                <span className="label text-fg-faint">{f.company}</span>
                <input name="company" autoComplete="organization" className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className="label text-fg-faint">{f.projectType}</span>
                <select name="projectType" defaultValue="" className={`${field} appearance-none`}>
                  <option value="" disabled className="bg-bg">
                    —
                  </option>
                  {f.projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-bg">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="label text-fg-faint">{f.message}</span>
                <textarea name="message" rows={4} required className={`${field} resize-none`} />
              </label>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center gap-4 self-start border-b border-accent pb-2 font-display text-sm tracking-[0.22em] text-fg uppercase transition-colors duration-500 hover:text-accent"
              >
                {f.submit}
                <span aria-hidden className="h-px w-8 bg-accent transition-all duration-500 group-hover:w-12" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.2} className="grid gap-10 text-sm md:col-span-4 md:col-start-9">
          <div>
            <p className="label text-fg-faint">{contact.office.label}</p>
            <address className="mt-3 not-italic leading-relaxed text-fg-muted">
              {contact.office.lines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
          </div>
          <div>
            <p className="label text-fg-faint">{contact.phone.label}</p>
            <a href={contact.phone.href} className="mt-3 block text-fg-muted transition-colors duration-500 hover:text-accent" dir="ltr">
              {contact.phone.value}
            </a>
          </div>
          <div>
            <p className="label text-fg-faint">{contact.email.label}</p>
            <a href={contact.email.href} className="mt-3 block text-fg-muted transition-colors duration-500 hover:text-accent">
              {contact.email.value}
            </a>
          </div>
          <a
            href={contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="bg-logo inline-flex items-center gap-3 self-start px-6 py-3.5 font-display text-xs tracking-[0.22em] text-bg uppercase transition-opacity duration-500 hover:opacity-85"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.3c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 4.9 4.2 2.4.9 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4l-.5-.3-1.9-.9c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.5-.6-.5z" />
            </svg>
            {contact.whatsapp.label}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
