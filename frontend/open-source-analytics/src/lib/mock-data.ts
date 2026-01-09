export interface User {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  githubUsername: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  owner: string;
}

export const mockUser: User = {
  id: "1",
  name: "Jane Developer",
  bio: "Full-stack developer passionate about open source",
  avatarUrl: "https://github.com/github.png",
  githubUsername: "janedev",
};

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "react",
    description: "The library for web and native user interfaces",
    stars: 225000,
    language: "JavaScript",
    owner: "facebook",
  },
  {
    id: "2",
    name: "next.js",
    description: "The React Framework for the Web",
    stars: 120000,
    language: "TypeScript",
    owner: "vercel",
  },
  {
    id: "3",
    name: "tailwindcss",
    description: "A utility-first CSS framework for rapid UI development",
    stars: 78000,
    language: "CSS",
    owner: "tailwindlabs",
  },
  {
    id: "4",
    name: "vscode",
    description: "Visual Studio Code - Open Source IDE",
    stars: 160000,
    language: "TypeScript",
    owner: "microsoft",
  },
  {
    id: "5",
    name: "rust",
    description: "Empowering everyone to build reliable and efficient software",
    stars: 92000,
    language: "Rust",
    owner: "rust-lang",
  },
  {
    id: "6",
    name: "deno",
    description: "A modern runtime for JavaScript and TypeScript",
    stars: 93000,
    language: "Rust",
    owner: "denoland",
  },
];
