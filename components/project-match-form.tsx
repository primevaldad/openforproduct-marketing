"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export function ProjectMatchForm() {
  const [interests, setInterests] = useState("");
  const [contribution, setContribution] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "pending") return;
    setStatus("pending");

    // Submit via a simple fetch to a Formspree-style endpoint or the app's API.
    // Replace with your actual endpoint or Firebase Function URL.
    try {
      await fetch("https://app.openforproduct.com/api/project-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interests, contribution }),
      });
      setStatus("success");
      setInterests("");
      setContribution("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#b8512c]/30 bg-[#b8512c]/10 p-6">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#b8512c]" />
        <div>
          <p className="font-semibold text-[#fffaf2]">Request received!</p>
          <p className="mt-1 text-sm text-[#e9e5d9]">Check your inbox for project introductions.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-[#e9e5d9]">
        What kinds of work sound interesting?
        <input
          name="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Technology, education, writing, community..."
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[#fffaf2] outline-none placeholder:text-[#c2bc9e] focus:ring-2 focus:ring-white/40"
          disabled={status === "pending"}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[#e9e5d9]">
        What could you imagine contributing?
        <input
          name="contribution"
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
          placeholder="Feedback, research, design, testing, not sure yet..."
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[#fffaf2] outline-none placeholder:text-[#c2bc9e] focus:ring-2 focus:ring-white/40"
          disabled={status === "pending"}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[#e9e5d9]">
        Email address
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c2bc9e]" />
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-[#fffaf2] outline-none placeholder:text-[#c2bc9e] focus:ring-2 focus:ring-white/40"
              disabled={status === "pending"}
            />
          </div>
          <button
            type="submit"
            id="project-match-submit"
            disabled={status === "pending" || !email.trim()}
            className="flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-[#b8512c] transition hover:bg-[#fffaf2] disabled:opacity-70"
          >
            {status === "pending" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === "pending" ? "Sending…" : "Find my way in"}
          </button>
        </div>
      </label>
      {status === "error" && (
        <p className="text-sm text-red-300">Something went wrong. Please try again or email us directly.</p>
      )}
      <p className="text-xs text-[#c2bc9e]">
        We'll use this to send your introductions—not to toss you into a generic funnel.
      </p>
    </form>
  );
}
