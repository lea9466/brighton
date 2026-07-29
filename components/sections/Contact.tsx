"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/site-content";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const SHOW_CONTACT_FORM = false;

export function Contact() {
  const { contact } = siteContent;
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: FormErrors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = contact.validation.nameRequired;
    if (!email) {
      nextErrors.email = contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = contact.validation.emailInvalid;
    }
    if (!message) nextErrors.message = contact.validation.messageRequired;

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/10 bg-charcoal py-28 sm:py-36 lg:py-40"
    >
      <div className="site-shell grid gap-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
          <p
            data-reveal
            data-reveal-delay="1"
            className="mt-10 max-w-sm text-base leading-8 text-stone"
          >
            {contact.intro}
          </p>
          <div
            data-reveal
            data-reveal-delay="2"
            className="mt-12 flex gap-7"
          >
            {contact.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-link"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact form is temporarily hidden. */}
        {SHOW_CONTACT_FORM && (
          <form
            className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7"
            onSubmit={handleSubmit}
            noValidate
          >
          <FormField
            id="name"
            label={contact.fields.name}
            required
            error={errors.name}
          />
          <FormField
            id="email"
            label={contact.fields.email}
            type="email"
            required
            error={errors.email}
          />
          <div className="sm:col-span-2">
            <label className="form-label" htmlFor="message">
              {contact.fields.message}
            </label>
            <textarea
              className="form-control min-h-32 resize-y"
              id="message"
              name="message"
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="form-error">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-5 sm:col-span-2">
            <button type="submit" className="button-outline">
              {contact.submit}
              <span aria-hidden="true">↗</span>
            </button>
            {submitted && (
              <p className="text-sm text-mist" role="status">
                {contact.success}
              </p>
            )}
          </div>
          </form>
        )}
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  type = "text",
  required = false,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        id={id}
        name={id}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}
