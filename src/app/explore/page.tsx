"use client";

import { useEffect, useState, useCallback } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/lib/mock-data";

export default function ExplorePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProjects = useCallback(async (search: string) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      const res = await fetch(`/api/projects?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setProjects(data.projects);
    } catch (err) {
      setError("Failed to load projects");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced search (also handles initial fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProjects(searchQuery);
    }, searchQuery ? 300 : 0);
    return () => clearTimeout(timer);
  }, [searchQuery, fetchProjects]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950 dark:text-blue-100 mb-2">
            Explore Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover open source projects to contribute to
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search projects by name, language, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/10 dark:focus:ring-blue-400/10"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-error-light dark:bg-red-900/30 border-l-4 border-error text-error-dark dark:text-red-300">
            {error}
          </div>
        )}

        {/* Column Headers */}
        <div className="hidden lg:flex items-center gap-4 px-4 py-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          <div className="w-24">Language</div>
          <div className="w-40">Repository</div>
          <div className="flex-1">Description</div>
          <div className="w-20 text-right">Stars</div>
          <div className="w-36">Owner</div>
          <div className="w-32 text-right">Last Commit</div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-3">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-16 rounded-xl" />
              ))
            : projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Search className="size-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
