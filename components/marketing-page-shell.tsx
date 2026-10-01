import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./logo";

type CtaProps = { href: string; label: string; external?: boolean };

type MarketingPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: CtaProps;
  secondaryCta?: CtaProps;
  children: ReactNode;
};

function SiteNav() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#b8512c] focus:ring-offset-4"
        aria-label="Open for Product home"
      >
        <Logo className="h-12 w-12 shrink-0 text-[#b8512c]" />
        <div className="font-serif text-[17px] leading-[0.95] tracking-[-0.02em] text-[#25251f]">
          <div>OPEN</div>
          <div className="pl-3 text-[10px] italic">for</div>
          <div>PRODUCT</div>
        </div>
      </Link>
      <nav className="hidden gap-6 text-sm font-medium text-[#555146] md:flex" aria-label="Main navigation">
        <Link href="/how-it-works" className="transition hover:text-[#b8512c]">How it works</Link>
        <Link href="/blog" className="transition hover:text-[#b8512c]">Blog</Link>
        <Link href="/podcast" className="transition hover:text-[#b8512c]">Podcast</Link>
        <Link href="/contact" className="transition hover:text-[#b8512c]">Contact</Link>
      </nav>
      <a
        href="https://app.openforproduct.com"
        className="rounded-xl bg-[#b8512c] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#9e4323]"
      >
        Open the app
      </a>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-10 shrink-0 text-[#b8512c]" />
        <div className="font-serif text-[15px] leading-[0.95] tracking-[-0.02em] text-[#25251f]">
          <div>OPEN</div>
          <div className="pl-2 text-[9px] italic">for</div>
          <div>PRODUCT</div>
        </div>
      </div>
      <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#555146]" aria-label="Footer navigation">
        <Link href="/" className="transition hover:text-[#b8512c]">Home</Link>
        <Link href="/how-it-works" className="transition hover:text-[#b8512c]">How it works</Link>
        <Link href="/blog" className="transition hover:text-[#b8512c]">Blog</Link>
        <Link href="/podcast" className="transition hover:text-[#b8512c]">Podcast</Link>
        <Link href="/contact" className="transition hover:text-[#b8512c]">Contact</Link>
        <Link href="/support" className="transition hover:text-[#b8512c]">Support</Link>
      </nav>
      <p className="text-xs text-[#9b9580]">© {new Date().getFullYear()} Open for Product</p>
    </footer>
  );
}

export function MarketingPageShell({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  children,
}: MarketingPageShellProps) {
  return (
    <div className="min-h-screen bg-[#f6f0e5] text-[#292820]">
      <SiteNav />
      <main>
        <div className="mx-auto max-w-6xl px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6b6557] transition hover:text-[#b8512c]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <section className="mx-auto max-w-6xl px-6 pb-12 pt-6 lg:px-10 lg:pb-16 lg:pt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a7658]">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f4b40]">{intro}</p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {primaryCta && (
                  primaryCta.external ? (
                    <a
                      href={primaryCta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b8512c] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9e4323]"
                    >
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b8512c] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9e4323]"
                    >
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )
                )}
                {secondaryCta && (
                  secondaryCta.external ? (
                    <a
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center rounded-xl border border-[#b8512c] px-6 py-4 font-semibold text-[#a84827] transition hover:bg-[#fffaf2]"
                    >
                      {secondaryCta.label}
                    </a>
                  ) : (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center rounded-xl border border-[#b8512c] px-6 py-4 font-semibold text-[#a84827] transition hover:bg-[#fffaf2]"
                    >
                      {secondaryCta.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-[#dfd5c5] bg-[#fbf8f1]">
          <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
