"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [data, setData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setError("Name, email, and a short message are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setData(initialState);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const inputClasses =
    variant === "dark"
      ? "w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[var(--gold)] focus:outline-none"
      : "w-full rounded-md border border-[var(--ink)]/15 bg-white px-3 py-2 text-sm text-[var(--ink)] placeholder:text-zinc-500 focus:border-[var(--gold)] focus:outline-none";

  const labelClasses =
    variant === "dark"
      ? "text-sm text-white/80"
      : "text-sm text-[var(--ink)]";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className={labelClasses}>Your Name *</label>
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={inputClasses}
          placeholder="kruthik B R"
          required
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={inputClasses}
            placeholder="you@gmail.com"
            required
          />
        </div>
        <div>
          <label className={labelClasses}>Phone</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className={inputClasses}
            placeholder="+91 9876543210"
          />
        </div>
      </div>
      <div>
        <label className={labelClasses}>Subject</label>
        <input
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          className={inputClasses}
          placeholder="Case or practice area"
        />
      </div>
      <div>
        <label className={labelClasses}>Message *</label>
        <textarea
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className={`${inputClasses} min-h-[120px] resize-none`}
          placeholder="Tell us about your matter..."
          required
        />
      </div>
      {error && <p className="text-sm text-red-300">{error}</p>}
      {status === "success" && (
        <p className="text-sm text-green-200">
          Received. We will reply shortly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-md bg-[var(--gold)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--black)] hover:bg-[#c99b04] transition-colors disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
