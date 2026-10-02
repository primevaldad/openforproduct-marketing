import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, CircleDollarSign, Compass,
  Heart, Leaf, Sprout, Users,
} from "lucide-react";
import { ProjectMatchForm } from "@/components/project-match-form";
import { Logo } from "@/components/logo";
import { FeaturedProjectsWidget } from "@/components/featured-projects-widget";

export const metadata: Metadata = {
  title: "Open for Product — Build something that matters. Together.",
};

const principles = [
  { icon: Users, title: "Contribute what you can", copy: "Your time, skills, perspective, and energy are welcome. No rigid commitments required." },
  { icon: Sprout, title: "Learn while building", copy: "Grow your skills, explore new interests, and work alongside people who see things differently." },
  { icon: CircleDollarSign, title: "Share in the value", copy: "Contribution should be visible, credited, and connected to the value a project creates." },
];

const communityValues = [
  [Heart, "Human first, always"],
  [Leaf, "Slow tech, meaningful impact"],
  [Check, "Open, transparent, accountable"],
  [Compass, "Designed for real lives"],
] as const;

function BrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="Open for Product">
      <Logo className="h-12 w-12 shrink-0 text-[#b8512c]" />
      <div className="font-serif text-[17px] leading-[0.95] tracking-[-0.02em] text-[#25251f]">
        <div>OPEN</div>
        <div className="pl-3 text-[10px] italic">for</div>
        <div>PRODUCT</div>
      </div>
    </div>
  );
}

function HeroLandscape() {
  return (
    <div className="relative aspect-[1.16/1] min-h-[390px] overflow-hidden rounded-[42%_42%_18%_18%/30%_30%_14%_14%] bg-[#ead6b7] shadow-[0_30px_80px_rgba(64,48,27,0.14)]" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_22%_26%,rgba(255,255,255,0.55),transparent_27%),linear-gradient(#f0dcc0,#ead2aa)]" />
      <div className="absolute left-[45%] top-[23%] h-36 w-36 rounded-full bg-[#bd5125]" />
      <div className="absolute -left-[10%] top-[42%] h-56 w-[72%] rounded-[50%] bg-[#929166] rotate-[8deg]" />
      <div className="absolute right-[-12%] top-[37%] h-64 w-[72%] rounded-[50%] bg-[#a8a174] -rotate-[7deg]" />
      <div className="absolute -left-[12%] top-[54%] h-60 w-[86%] rounded-[50%] bg-[#6f7551] rotate-[6deg]" />
      <div className="absolute right-[-15%] top-[54%] h-56 w-[80%] rounded-[50%] bg-[#7f8057] -rotate-[7deg]" />
      <div className="absolute inset-x-0 bottom-0 h-[47%] bg-[#c5aa69]" />
      <div className="absolute left-[43%] top-[51%] h-[65%] w-[24%] origin-top -rotate-[5deg] rounded-[50%] bg-[#f7ead2] shadow-inner" />
      <div className="absolute bottom-[-4%] left-[48%] h-[52%] w-[26%] rotate-[8deg] rounded-[50%] bg-[#fff4df]" />
      <div className="absolute bottom-6 left-6 h-28 w-4 rounded-full bg-[#2f503f] rotate-[-10deg]" />
      <div className="absolute bottom-7 left-12 h-20 w-4 rounded-full bg-[#2f503f] rotate-[14deg]" />
      <div className="absolute bottom-4 right-8 h-32 w-4 rounded-full bg-[#2f503f] rotate-[8deg]" />
      <div className="absolute bottom-7 right-16 h-20 w-4 rounded-full bg-[#2f503f] rotate-[-12deg]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f0e5] text-[#292820]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#555146] md:flex" aria-label="Main navigation">
          <a href="https://app.openforproduct.com/projects" className="transition hover:text-[#b8512c]">Projects</a>
          <Link href="/about" className="transition hover:text-[#b8512c]">About</Link>
          <Link href="/how-it-works" className="transition hover:text-[#b8512c]">How it works</Link>
          <Link href="/blog" className="transition hover:text-[#b8512c]">Blog</Link>
          <Link href="/podcast" className="transition hover:text-[#b8512c]">Podcast</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://app.openforproduct.com/login"
            className="rounded-full border border-[#dfd5c5] bg-[#fffaf2] px-4 py-2 text-sm font-semibold text-[#292820] shadow-sm transition hover:bg-white"
          >
            Log in
          </a>
          <a
            href="https://app.openforproduct.com/signup"
            className="rounded-full bg-[#b8512c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a14422]"
          >
            Join
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-20">
          <div>
            <span className="inline-flex rounded-full bg-[#ebe1cb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6a43]">
              A different kind of creative space
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Build something that matters. <span className="italic text-[#b8512c]">Together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c584d]">
              Open for Product is where creators, thinkers, and builders come together to shape ideas into reality—openly, collaboratively, and sustainably.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#match"
                className="inline-flex items-center gap-2 rounded-full bg-[#b8512c] px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#a14422]"
              >
                Find your way in <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#dfd5c5] bg-[#fffaf2] px-6 py-3.5 text-base font-semibold text-[#292820] transition hover:bg-white"
              >
                Why we exist
              </Link>
            </div>
            <p className="mt-8 text-sm text-[#7a7658]">
              No pitch decks. No closed doors. Just real work, shared openly.
            </p>
          </div>
          <HeroLandscape />
        </section>

        <section className="border-y border-[#dfd5c5] bg-[#fbf8f1]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl tracking-[-0.03em]">Work should adapt to people.</h2>
              <div className="mx-auto mt-4 h-1 w-12 rounded bg-[#b8512c]" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="rounded-2xl border border-[#e1d7c6] bg-white/60 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#b8512c] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c584d]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a7658]">Happening now</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.03em]">
                People are building <span className="italic text-[#b8512c]">amazing things.</span>
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-[#5c584d]">
                Here are a few active projects that could use collaborators, thoughtful feedback, or a little momentum.
              </p>
              <a href="https://app.openforproduct.com/projects" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#a84827] underline-offset-4 hover:underline">
                Browse all projects <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div>
              <FeaturedProjectsWidget />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-[#e1d7c6] bg-[linear-gradient(100deg,#f4e4cf,#f9f1e5)] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div className="flex min-h-64 items-end rounded-2xl border border-[#dcbf9d] bg-[#f8ead7] p-8">
              <div className="grid w-full grid-cols-4 gap-4">
                {["A", "B", "C", "D"].map((item, index) => (
                  <div key={item} className="flex flex-col items-center gap-3">
                    <div className="h-14 w-14 rounded-full border-2 border-[#ad5b39] bg-[#f6dfc6]" />
                    <div className="h-14 w-px bg-[#ad5b39]" />
                    <div className="h-1 w-full rounded bg-[#ad5b39]" style={{ opacity: 0.5 + index * 0.1 }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a7658]">The way we work</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">Building together looks different here.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#5c584d]">
                Open for Product is being designed as a collaborative environment that respects capacity, makes contribution visible, and uses automation to support relationships rather than replace them.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {communityValues.map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b8512c] text-[#b8512c]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/how-it-works" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#a84827] underline-offset-4 hover:underline">
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="match" className="scroll-mt-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-2 lg:px-10">
            <div className="rounded-3xl bg-[#687052] p-8 text-[#fffaf2] lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e5e0ca]">An easier way in</p>
              <h2 className="mt-3 font-serif text-4xl">Let us introduce you.</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#f0ecdf]">
                Tell us what interests you, what kind of contribution feels realistic, and what you hope to find. We'll send a small set of thoughtful project introductions. No account required.
              </p>
              <ProjectMatchForm />
            </div>
            <div id="support" className="scroll-mt-24 rounded-3xl bg-[#b8512c] p-8 text-white lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="mt-7 font-serif text-4xl">Help move everything forward.</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#f8e7dd]">
                Your support helps us build and maintain the platform, grow the community, and make it easier for people to discover work that matters to them.
              </p>
              <Link href="/support" className="mt-8 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
                Chip in and support the work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <BrandMark />
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#555146]" aria-label="Footer navigation">
          <a href="https://app.openforproduct.com/projects" className="transition hover:text-[#b8512c]">Projects</a>
          <Link href="/how-it-works" className="transition hover:text-[#b8512c]">How it works</Link>
          <Link href="/blog" className="transition hover:text-[#b8512c]">Blog</Link>
          <Link href="/podcast" className="transition hover:text-[#b8512c]">Podcast</Link>
          <Link href="/contact" className="transition hover:text-[#b8512c]">Contact</Link>
        </nav>
        <p className="text-xs text-[#9b9580]">© {new Date().getFullYear()} Open for Product</p>
      </footer>
    </div>
  );
}
