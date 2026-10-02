"use client";

import { useState, useEffect } from "react";
import { Users, RefreshCw, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface FeaturedProject {
  id: string;
  title: string;
  name?: string;
  description: string;
  tagline?: string;
  category?: string;
  collaborators?: string;
  photoUrl?: string | null;
  project_type?: "public" | "private" | "personal";
  status?: "draft" | "published" | "archived";
  tags?: Array<{ id: string; display: string; isCategory?: boolean }>;
  contributionNeeds?: string[];
  memberCount?: number;
  featured?: boolean;
  urlPath?: string;
  visual?: "fundry" | "book" | "queen" | string;
}

export const FALLBACK_PROJECTS: FeaturedProject[] = [
  {
    id: "fundry",
    title: "Fundry",
    name: "Fundry",
    description: "A simpler way to move complex projects forward through transparent, contributor-directed funding.",
    tagline: "A simpler way to move complex projects forward through transparent, contributor-directed funding.",
    category: "Funding",
    collaborators: "Early contributors welcome",
    visual: "fundry",
    project_type: "public",
    status: "published",
    urlPath: "/projects",
  },
  {
    id: "open-book",
    title: "Open Book",
    name: "Open Book",
    description: "A participatory publishing experiment where communities help shape books one chapter at a time.",
    tagline: "A participatory publishing experiment where communities help shape books one chapter at a time.",
    category: "Publishing",
    collaborators: "Writers, readers, facilitators",
    visual: "book",
    project_type: "public",
    status: "published",
    urlPath: "/projects",
  },
  {
    id: "session-queen",
    title: "Session Queen",
    name: "Session Queen",
    description: "A context-preserving workspace for people who think, research, and build across many tools.",
    tagline: "A context-preserving workspace for people who think, research, and build across many tools.",
    category: "Technology",
    collaborators: "Testers and product thinkers",
    visual: "queen",
    project_type: "public",
    status: "published",
    urlPath: "/projects",
  },
];

function ProjectSkeletonCard() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#dfd5c5] bg-[#fffaf2] shadow-[0_12px_36px_rgba(62,49,31,0.07)]">
      {/* Visual box placeholder */}
      <div className="h-44 w-full bg-[#ebdccb] animate-pulse" />

      <div className="flex flex-1 flex-col p-5">
        {/* Title placeholder */}
        <div className="h-7 w-3/5 rounded-md bg-[#e3d3be] animate-pulse" />

        {/* Tagline placeholder */}
        <div className="mt-3 space-y-2">
          <div className="h-3.5 w-full rounded bg-[#ebd7c3] animate-pulse" />
          <div className="h-3.5 w-4/5 rounded bg-[#ebd7c3] animate-pulse" />
        </div>

        {/* Footer placeholder */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 border-t border-[#dfd5c5]/50 pt-3">
            <div className="h-3.5 w-24 rounded bg-[#ebd7c3] animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-[#ebd7c3] animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  if (project.photoUrl) {
    return (
      <div className="relative h-44 overflow-hidden bg-[#2a2924]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.photoUrl}
          alt={project.title || project.name || "Project photo"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    async function loadFeaturedProjects() {
      // Build candidate endpoints to try in order:
      const candidateEndpoints: string[] = [];

      if (process.env.NEXT_PUBLIC_APP_URL) {
        candidateEndpoints.push(`${process.env.NEXT_PUBLIC_APP_URL}/api/public/featured-projects`);
      }

      if (typeof window !== "undefined" && window.location.hostname === "localhost") {
        // If marketing is running on 3001, app is on 3000. If marketing is on 3000, app is on 3001.
        const currentPort = window.location.port;
        const targetAppPort = currentPort === "3001" ? "3000" : "3001";
        candidateEndpoints.push(`http://localhost:${targetAppPort}/api/public/featured-projects`);
        candidateEndpoints.push(`http://localhost:${currentPort === "3001" ? "3001" : "3000"}/api/public/featured-projects`);
      }

      // Always include production endpoint as fallback
      candidateEndpoints.push("https://app.openforproduct.com/api/public/featured-projects");

      for (const endpoint of candidateEndpoints) {
        try {
          const res = await fetch(endpoint, {
            headers: { Accept: "application/json" },
          });

          if (!res.ok) continue;
          const data = await res.json();

          if (isCurrent && data.success && Array.isArray(data.projects)) {
            // Privacy guard: strictly reject any non-public or non-published projects
            const safeProjects: FeaturedProject[] = data.projects.filter(
              (p: any) =>
                (!p.project_type || p.project_type === "public") &&
                p.status !== "draft" &&
                p.status !== "archived"
            );

            if (safeProjects.length > 0) {
              let combined: FeaturedProject[] = [...safeProjects];
              if (combined.length < 3) {
                const existingNames = new Set(
                  combined.map((p) => (p.name || p.title || "").toLowerCase())
                );
                for (const fb of FALLBACK_PROJECTS) {
                  if (!existingNames.has(fb.title.toLowerCase())) {
                    combined.push(fb);
                    existingNames.add(fb.title.toLowerCase());
                    if (combined.length >= 3) break;
                  }
                }
              }
              setProjects(combined);
              setIsLoading(false);
              return;
            }
          }
        } catch {
          // If this endpoint fails, try the next candidate
          continue;
        }
      }

      // If all endpoints failed, returned no projects, or had an error -> fill fallback content
      if (isCurrent) {
        setProjects(FALLBACK_PROJECTS);
        setIsLoading(false);
      }
    }

    loadFeaturedProjects();

    return () => {
      isCurrent = false;
    };
  }, []);

  const PAGE_SIZE = 3;
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentProjects = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCycle = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="flex flex-col gap-6" suppressHydrationWarning>
      {/* 3-Column Grid: Show skeletons while loading, then transition to content */}
      <div className="grid gap-6 md:grid-cols-3">
        {isLoading ? (
          <>
            <ProjectSkeletonCard />
            <ProjectSkeletonCard />
            <ProjectSkeletonCard />
          </>
        ) : (
          currentProjects.map((project) => {
            const projectTitle = project.title || project.name || "Untitled Project";
            const projectDescription = project.description || project.tagline || "";
            const categoryText = project.category || (project.tags && project.tags[0]?.display) || "Community";
            const collaboratorsText =
              project.collaborators ||
              (Array.isArray(project.contributionNeeds) && project.contributionNeeds.length > 0
                ? project.contributionNeeds[0]
                : `${project.memberCount || 1} collaborators`);

            const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
            const appPort = isLocal ? (window.location.port === "3001" ? "3000" : "3001") : "";
            const appBase = isLocal ? `http://localhost:${appPort}` : `https://app.openforproduct.com`;
            const appUrl = project.urlPath
              ? `${appBase}${project.urlPath}`
              : `${appBase}/projects`;

            return (
              <article
                key={project.id || projectTitle}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#dfd5c5] bg-[#fffaf2] shadow-[0_12px_36px_rgba(62,49,31,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Entire card links to app */}
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 focus:outline-none"
                  aria-label={`View project ${projectTitle}`}
                />

                <div className="relative">
                  <ProjectVisual project={project} />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl group-hover:text-[#b8512c] transition-colors">
                    {projectTitle}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5c584d] line-clamp-3">
                    {projectDescription}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="inline-flex items-center gap-1 text-[#4f5f49]">
                        <Users className="h-3.5 w-3.5" /> {collaboratorsText}
                      </span>
                      <span className="rounded-full bg-[#ebe1cb] px-3 py-1 text-[#6a5c3f]">
                        {categoryText}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Pagination & Cycle Controls (visible only after loading if more than 3 projects exist) */}
      {!isLoading && totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[#dfd5c5] pt-4 text-xs text-[#7a7658]">
          <span>
            Showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, projects.length)} of {projects.length} projects
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCycle}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfd5c5] bg-white/70 px-2.5 py-1 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition active:scale-95 cursor-pointer"
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
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#dfd5c5] bg-white/70 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition cursor-pointer"
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
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#dfd5c5] bg-white/70 text-[#5c584d] hover:bg-white hover:text-[#25251f] transition cursor-pointer"
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
