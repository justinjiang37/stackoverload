import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/mock-data";

interface ProjectCardProps {
  project: Project;
}

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm">{project.owner}</p>
            <CardTitle className="text-lg">{project.name}</CardTitle>
          </div>
          <Badge variant="secondary">{project.language}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>
        <div className="flex items-center gap-1 text-sm">
          <Star className="size-4" />
          <span>{formatStars(project.stars)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
