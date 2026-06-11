export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  iconType?: "github";
  lottieIcon?: string;
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "AkinSec | AI Security Platform",
    description:
      "In-development cloud SOC platform aiming to provide SIEM capabilities through a cloud-based platform managed via AI chat.",
    longDescription:
      "Building an AI-powered cybersecurity platform with MongoDB, PostgreSQL, Svelte, React, Railway, Wazuh, Docker, and RAG API. Focused on easy access to detection, alerting, and response through AI-assisted workflows.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Svelte",
      "React",
      "Railway",
      "Wazuh",
      "Docker",
      "RAG API",
    ],
    image: "/akinsec-logo.png",
    link: "https://akinsec.com",
    github: "https://github.com/dfalt0/akinsec",
  },
  {
    title: "AI / LLM Research | malware-dataset1-test1",
    description:
      "Fine-tuning DeepSeek, Qwen, and Kimi models with PyTorch and QLoRA while testing adversarial inputs and LLM security behavior.",
    longDescription:
      "Ongoing ML research building an MCP-based security knowledge database. Experiments with model fine-tuning for malware detection and adversarial input analysis.",
    technologies: ["PyTorch", "QLoRA", "DeepSeek", "Qwen", "Kimi", "Python", "MCP"],
    image: "/ai-sc.png",
    iconType: "github",
    link: "#",
    github: "https://github.com/dfalt0/malware-dataset1-test1",
  },
  {
    title: "Adversarial AI Detection Project",
    description:
      "Experimenting with methods to detect malicious inputs in AI systems and harden LLM-facing applications.",
    longDescription:
      "Research project exploring detection techniques for adversarial and malicious prompts in AI pipelines.",
    technologies: ["Python", "LLM Security", "AI Safety"],
    image: "🛡️",
    lottieIcon: "adversarial-ai",
    link: "#",
    github: "https://github.com/dfalt0/Adversarial-AI-Detection-Project",
  },
  {
    title: "Portfolio | dfalt0.com",
    description:
      "Personal portfolio and blog built with React, Next.js, TypeScript, Tailwind, and Vercel deployment.",
    longDescription:
      "This site — a React/Next.js portfolio with theme switching, project showcase, and dev blog.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "🌐",
    lottieIcon: "portfolio",
    link: "https://dfalt0.com",
    github: "https://github.com/dfalt0",
  },
];
