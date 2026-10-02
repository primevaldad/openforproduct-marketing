"use client";

import { useState, useEffect } from "react";
import { Users, ArrowRight, RefreshCw, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  photoUrl?: string | null;
  tags?: Array<{ id: string; display: string; isCategory?: boolean }>;
  contributionNeeds?: string[];
  memberCount?: number;
  progress?: number;
  featured?: boolean;
  urlPath?: string;
  visual?: "fundry" | "book" | "queen" | string;
}

export const INITIAL_FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "fundry",
    name: "Fundry",
    tagline: "A simpler way to move complex projects forward through transparent, contributor-directed funding.",
    visual: "fundry",
    tags: [{ id: "funding", display: "Funding", isCategory: true }],
    contributionNeeds: ["Early contributors welcome"],
    memberCount: 3,
    urlPath: "/projects",
  },
  {
    id: "open-book",
    name: "Open Book",
    tagline: "A participatory publishing experiment where communities help shape books one chapter at a time.",
    visual: "book",
    tags: [{ id: "publishing", display: "Publishing", isCategory: true }],
    contributionNeeds: ["Writers, readers, facilitators"],
    memberCount: 5,
    urlPath: "/projects",
  },
  {
    id: "session-queen",
    name: "Session Queen",
    tagline: "A context-preserving workspace for people who think, research, and build across many tools.",
    visual: "queen",
    tags: [{ id: "technology", display: "Technology", isCategory: true }],
    contributionNeeds: ["Testers and product thinkers"],
    memberCount: 4,
    urlPath: "/projects",
  },
];

function CardVisual({ project }: { project: FeaturedProject }) {
  if (project.photoUrl) {
    return (
      <div className="relative h-44 overflow-hidden bg-[#2a2924]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.photoUrl}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
    );
  }

  if (project.visual === "fundry") {
    return (
      <div className="relative h-44 overflow-hidden bg-[#d8e1d4]">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#6e7755]" />
        <div className="absolute bottom-12 left-10 h-20 w-2 bg-[#f7f2e8]" />
        <div className="absolute bottom-16 left-5 h-px w-12 rotate-[22deg] bg-[#f7f2e8]" />
        <div className="absolute bottom-16 left-5 h-px w-12 -rotate-[22deg] bg-[#f7f2e8]" />
        <div className="absolute bottom-12 left-28 h-24 w-2 bg-[#f7f2e8]" />
      </div>
    );
  }

  if (project.visual === "book") {
    return (
      <div className="grid h-44 grid-cols-3 grid-rows-2 overflow-hidden bg-[#e8d1a8]">
        <div className="bg-[#2f5a56]" /><div className="bg-[#d6ae69]" /><div className="bg-[#ede0c5]" />
        <div className="bg-[#b9552d]" /><div className="bg-[#63705c]" /><div className="bg-[#d9c694]" />
      </div>
    );
  }

  if (project.visual === "queen") {
    return (
      <div className="relative h-44 overflow-hidden bg-[#18272f]">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4c178] shadow-[0_0_40px_rgba(212,193,120,0.35)]" />
        <div className="absolute left-1/2 top-1/2 h-7 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border-4 border-[#b88958]" />
        <Sparkles className="absolute left-8 top-8 h-4 w-4 text-[#f5e6aa]" />
        <Sparkles className="absolute right-12 top-6 h-3 w-3 text-[#f5e6aa]" />
        <Sparkles className="absolute bottom-8 left-16 h-3 w-3 text-[#f5e6aa]" />
      </div>
    );
  }

  // Graceful fallback for any live project without a photoUrl
  return (
    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#2f503f] via-[#465c49] to-[#c5aa69] p-4 flex flex-col justify-end">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />
      <div className="relative z-10 flex items-center gap-1.5 text-xs font-medium text-[#f0ecdf]">
        <Sparkles className="h-3.5 w-3.5 text-[#e5d19c]" />
        <span>Open for Product</span>
      </div>
    </div>
  );
}

export function FeaturedProjectsWidget() {
  const [projects, setProjects] = useState<FeaturedProject[]>(INITIAL_FEATURED_PROJECTS);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const PAGE_SIZE = 3;
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentProjects = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  useEffect(() => {
    let isMounted = true;
    async function fetchFeatured() {
      try {
        setIsLoading(true);
        // Determine endpoint (supports local dev cross-port testing)
        const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
        const endpoint = isLocal
          ? "http://localhost:3001/api/public/featured-projects"
          : "https://app.openforproduct.com/api/public/featured-projects";

        const res = await fetch(endpoint, {
          headers: { Accept: "application/json" },
        });

        if (!res.ok) return;
        const data = await res.json();

        if (isMounted && data.success && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (err) {
        // Silently fallback to static projects
        console.debug("Could not hydrate featured projects from API, using static default.", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchFeatured();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleShuffle = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 3-Column Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {currentProjects.map((project) => {
          const appUrl = `https://app.openforproduct.com${project.urlPath || `/projects/${project.id}`}`;
          const primaryTag = project.tags && project.tags.length > 0 ? project.tags[0].display : "Community";
          const needsText = Array.isArray(project.contributionNeeds) && project.contributionNeeds.length > 0
            ? project.contributionNeeds[0]
            : "Contributors welcome";

          return (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#dfd5c5] bg-[#fffaf2] shadow-[0_12px_36px_rgba(62,49,31,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Clickable full card link */}
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 focus:outline-none"
                aria-label={`View project ${project.name}`}
              />

              <div className="relative">
                <CardVisual project={project} />
                
                {/* Badges atop visual */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-[#f8ead7] backdrop-blur-md border border-white/10">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    Featured
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-2xl group-hover:text-[#b8512c] transition-colors">
                    {project.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#ebe1cb] px-2.5 py-0.5 text-xs text-[#6a5c3f] font-medium">
                    {primaryTag}
                  </span>
                </div>

                <p className="mt-2.5 text-sm leading-6 text-[#5c584d] line-clamp-3">
                  {project.tagline || project.description}
                </p>

                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between gap-2 border-t border-[#dfd5c5]/60 pt-3 text-xs text-[#5c584d]">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#4f5f49]">
                      <Users className="h-3.5 w-3.5 text-[#4f5f49]" />
                      {project.memberCount || 1} {project.memberCount === 1 ? "collaborator" : "collaborators"}
                    </span>
                    <span className="line-clamp-1 max-w-[130px] text-right italic text-[#7a7658]">
                      {needsText}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-end font-semibold text-xs text-[#b8512c] group-hover:underline">
                    <span>View project</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination & Cycle Controls (Shown when more than 3 projects exist) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[#dfd5c5] pt-4 text-xs text-[#7a7658]">
          <div className="flex items-center gap-2">
            <span>
              Showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, projects.length)} of {projects.length} featured projects
            </span>
            {isLoading && (
              <span className="italic text-[#b8512c]">updating…</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfd5c5] bg-white/70 px-2.5 py-1 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition active:scale-95"
              title="Cycle to next projects"
              aria-label="Cycle projects"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-[#b8512c] ${isRotating ? "animate-spin" : ""}`} />
              <span>Cycle</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#dfd5c5] bg-white/70 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="px-2 font-medium">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#dfd5c5] bg-white/70 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
