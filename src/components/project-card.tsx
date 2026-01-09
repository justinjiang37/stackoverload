import { Star, GitCommit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/mock-data";
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

export function ProjectCard({ project }: ProjectCardProps) {
  const CardWrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-0.5 cursor-pointer"
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
    </CardWrapper>
  );
}
