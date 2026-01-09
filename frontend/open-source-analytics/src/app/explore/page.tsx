import { ProjectCard } from "@/components/project-card";
import { mockProjects } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Explore Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
