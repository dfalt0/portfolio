export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "AkinSec | Cybersecurity Automation",
    description:
      "CEO & Founder of cybersecurity SaaS startup built to automate all aspects of cybersecurity for businesses.",
    longDescription:
      "Full-stack cybersecurity SaaS platform. Handles compliance workflows, risk assessments, and client dashboards with ReactFlow for process design, n8n for automation, and PostgreSQL/Prisma on the backend. Deployed on Vercel with AWS and Hostinger for infrastructure.",
    technologies: ["React.js", "Vite", "Tailwind", "ReactFlow", "shadcn/ui", "Framer Motion/GSAP", "n8n", "Radix UI", "PostgreSQL", "Prisma", "Vercel", "AWS", "Hostinger"],
    image: "/AkinSec_sc.png",
    link: "https://akinsec.com",
    github: "https://github.com/dfalt0/akinsec",
  },
  {
    title: "AI Fine Tuning | malware-dataset1-test1",
    description:
      "A work in progress AI fine tuning project with UnslothAI, fine tuning a model to detect malware.",
    longDescription:
      "Ongoing ML project using Unsloth for efficient fine-tuning of open-source models to classify malware. Runs in Google Colab with NVidia CUDA. Dataset and training pipeline in the repo.",
    technologies: ["Google Collab", "NVidia CUDA", "unsloth.ai", "Open-Source Models", "Python", "PyTorch"],
    image: "/ai-sc.png",
    link: "#",
    github: "https://github.com/dfalt0/malware-dataset1-test1",
  },
  {
    title: "Website Agency",
    description:
      "Landing and showcase site for a website agency, built and deployed on Vercel.",
    longDescription:
      "Marketing and landing site for a website agency. Built with Next.js and Tailwind, deployed on Vercel.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "🌐",
    link: "https://website-agency-kd72arffe-dfalt0s-projects.vercel.app/",
    github: "#",
  },
];
