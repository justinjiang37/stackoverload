"use client";

import { useState } from "react";
import { Star, GitCommit, ChevronDown, Clock, Activity, Users, Tag, GitPullRequest } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Project, AlivenessMetrics } from "@/lib/mock-data";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "today";
  } else if (diffDays === 1) {
    return "yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}

function getRecencyColor(days: number): string {
  if (days <= 7) return "text-green-600 dark:text-green-400";
  if (days <= 30) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
}

function getBusFactorColor(percent: number): string {
  if (percent >= 80) return "text-red-600 dark:text-red-400"; // High risk - one person does most work
  if (percent >= 50) return "text-yellow-600 dark:text-yellow-400";
  return "text-green-600 dark:text-green-400"; // Healthy distribution
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [aliveness, setAliveness] = useState<AlivenessMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!expanded && !aliveness && !loading) {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/projects/${project.owner}/${project.name}/aliveness`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setAliveness(data);
      } catch (err) {
        setError("Failed to load metrics");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    setExpanded(!expanded);
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 ${expanded ? "ring-2 ring-blue-500/20" : ""}`}
    >
      {/* Main Row - Clickable */}
      <div
        onClick={handleToggle}
        className="flex items-center gap-4 p-4 cursor-pointer"
      >
        {/* Language */}
        <div className="w-24 shrink-0">
          <Badge variant="default" className="w-full justify-center">
            {project.language}
          </Badge>
        </div>

        {/* Repo name */}
        <div className="w-40 shrink-0">
          <span className="font-semibold text-blue-900 dark:text-blue-300 truncate block">
            {project.name}
          </span>
        </div>

        {/* Description */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-600 dark:text-gray-400 text-sm truncate leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1.5 text-sm shrink-0 w-20 justify-end font-medium">
          <Star className="size-4 text-orange-500 fill-orange-500" />
          <span className="text-gray-700 dark:text-gray-300 font-mono">{formatStars(project.stars)}</span>
        </div>

        {/* Owner with avatar */}
        <div className="flex items-center gap-2 shrink-0 w-36">
          <Image
            src={project.ownerAvatarUrl}
            alt={`${project.owner}'s avatar`}
            width={28}
            height={28}
            className="rounded-full ring-2 ring-gray-100 dark:ring-gray-700"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {project.owner}
          </span>
        </div>

        {/* Last commit */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 shrink-0 w-32 justify-end">
          <GitCommit className="size-4" />
          <span className="font-mono text-xs">{formatDate(project.lastCommitDate)}</span>
        </div>

        {/* Expand indicator */}
        <div className="shrink-0 w-8 flex justify-center">
          <ChevronDown
            className={`size-5 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Expanded Aliveness Section */}
      <div
        className={`grid border-t border-gray-200 dark:border-gray-700 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6">
          {/* Section Header */}
          <div className="flex items-center gap-2 mb-4">
            <Activity className="size-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
              Aliveness
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            )}
          </div>

          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
          )}

          {error && (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
              {error}
            </div>
          )}

          {aliveness && !loading && (
            <div className="space-y-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Commit Recency */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">
                    <Clock className="size-3.5" />
                    Commit Recency
                  </div>
                  <div className={`font-mono text-2xl font-bold ${getRecencyColor(aliveness.daysSinceLastCommit)}`}>
                    {aliveness.daysSinceLastCommit}d
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    since last commit
                  </div>
                </div>

                {/* Commit Velocity */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">
                    <Activity className="size-3.5" />
                    Commit Velocity
                  </div>
                  <div className="font-mono text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {aliveness.commitVelocity.month}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    commits/month
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {aliveness.commitVelocity.week}/wk · {aliveness.commitVelocity.quarter}/90d
                  </div>
                </div>

                {/* Bus Factor */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">
                    <Users className="size-3.5" />
                    Bus Factor
                  </div>
                  <div className={`font-mono text-2xl font-bold ${getBusFactorColor(aliveness.busFactor.top1Percent)}`}>
                    {aliveness.busFactor.top1Percent}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    top contributor
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    top 3: {aliveness.busFactor.top3Percent}%
                  </div>
                </div>

                {/* Release Cadence */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">
                    <Tag className="size-3.5" />
                    Release Cadence
                  </div>
                  <div className="font-mono text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {aliveness.releaseCadence !== null ? `${aliveness.releaseCadence}d` : "—"}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {aliveness.releaseCadence !== null ? "avg between releases" : "no releases"}
                  </div>
                </div>
              </div>

              {/* Issue Churn */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium mb-3">
                  <GitPullRequest className="size-3.5" />
                  Issue Churn
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last 30 days</div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 dark:text-green-400 font-mono text-lg">
                        +{aliveness.issueChurn.opened30}
                      </span>
                      <span className="text-gray-400">/</span>
                      <span className="text-red-600 dark:text-red-400 font-mono text-lg">
                        -{aliveness.issueChurn.closed30}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        opened / closed
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last 90 days</div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 dark:text-green-400 font-mono text-lg">
                        +{aliveness.issueChurn.opened90}
                      </span>
                      <span className="text-gray-400">/</span>
                      <span className="text-red-600 dark:text-red-400 font-mono text-lg">
                        -{aliveness.issueChurn.closed90}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        opened / closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
