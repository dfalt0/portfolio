export type BlogPost = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  content: string;
};

export type WorkEntry = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications",
    description:
      "Exploring best practices for building scalable web applications with modern frameworks and architectures.",
    date: "2024-01-15",
    tags: ["Web Development", "Architecture", "Best Practices"],
    slug: "building-scalable-web-applications",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable web applications is crucial in today's fast-paced digital world. As your user base grows, your application needs to handle increased load without compromising performance or user experience.</p>
      <h2>Key Principles</h2>
      <p>When building scalable applications, consider the following principles:</p>
      <ul>
        <li><strong>Horizontal Scaling:</strong> Design your application to scale horizontally by adding more servers rather than just upgrading hardware.</li>
        <li><strong>Stateless Architecture:</strong> Keep your application servers stateless to allow easy scaling and load balancing.</li>
        <li><strong>Database Optimization:</strong> Use proper indexing, caching strategies, and consider read replicas for better performance.</li>
        <li><strong>Microservices:</strong> Break down your application into smaller, independent services that can scale independently.</li>
      </ul>
      <h2>Modern Frameworks</h2>
      <p>Modern frameworks like Next.js, React, and Node.js provide excellent tools for building scalable applications.</p>
      <h2>Conclusion</h2>
      <p>Building scalable web applications requires careful planning and consideration of architecture, technology choices, and future growth.</p>
    `,
  },
  {
    title: "Understanding React Performance Optimization",
    description:
      "Deep dive into React performance optimization techniques and how to identify and fix common bottlenecks.",
    date: "2024-01-10",
    tags: ["React", "Performance", "Optimization"],
    slug: "react-performance-optimization",
    content: `
      <h2>Introduction</h2>
      <p>React is a powerful library for building user interfaces, but without proper optimization, applications can suffer from performance issues.</p>
      <h2>Common Performance Issues</h2>
      <ul>
        <li><strong>Unnecessary Re-renders:</strong> Components re-rendering when their props or state haven't actually changed.</li>
        <li><strong>Large Component Trees:</strong> Rendering too many components at once can slow down the application.</li>
        <li><strong>Missing Memoization:</strong> Not using React.memo, useMemo, or useCallback when appropriate.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>React performance optimization is an ongoing process.</p>
    `,
  },
  {
    title: "The Future of Full-Stack Development",
    description:
      "A look at emerging trends and technologies shaping the future of full-stack development.",
    date: "2024-01-05",
    tags: ["Full-Stack", "Trends", "Technology"],
    slug: "future-of-full-stack-development",
    content: `
      <h2>Introduction</h2>
      <p>The landscape of full-stack development is constantly evolving.</p>
      <h2>Emerging Technologies</h2>
      <ul>
        <li><strong>Serverless Architecture:</strong> Functions-as-a-Service platforms.</li>
        <li><strong>Edge Computing:</strong> Running code closer to users.</li>
        <li><strong>AI Integration:</strong> AI and ML integrated into applications.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>The future of full-stack development is exciting and full of possibilities.</p>
    `,
  },
];

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
);

export const workHistorySummary =
  "About 7 years across IT support, software engineering, web development, and cybersecurity. Currently building AkinSec, an Agentic Security Harness, alongside security consulting work.";

export const workSectionSummary =
  "I build practical software across the stack—owning difficult work, collaborating with diverse teams, and delivering reliable systems without overcomplicating them. Full-stack, cloud, security, automation, and AI. From IT support to production, I see how technology works from end users to infrastructure.";

export const workHistory: WorkEntry[] = [
  {
    company: "AkinSec, LLC",
    position: "Founder, Software Engineer",
    location: "Remote",
    startDate: "Aug 2025",
    endDate: "Present",
    description:
      "Building an AI-powered cybersecurity platform end to end — full-stack development, infrastructure, and backend architecture. Shipping AI-assisted detection, alerting, response features, and a sandbox for safely integrating security tools with AI chat systems.",
    responsibilities: [
      "Develop AI-assisted security detection, alerting, and response features",
      "Implement a sandbox for integrating security tools with AI chat systems",
      "Handle full-stack development, infrastructure setup, and backend architecture",
    ],
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Svelte",
      "React",
      "Railway",
      "Wazuh",
      "Docker",
      "Python",
    ],
    type: "Startup",
  },
  {
    company: "White Spider Electronics, LLC",
    position: "Security Consultant",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Build full-stack web applications with React, Next.js, and Vercel for internal and client use. Perform security assessments, compliance documentation, and Wazuh SIEM deployments with custom detection rules and automation workflows.",
    responsibilities: [
      "Create automation workflows for security monitoring, alerting, and reporting",
      "Prepare compliance documentation for NIST 800-53, SOC 2, and HIPAA",
      "Deploy and tune Wazuh SIEM platforms with custom detection rules",
    ],
    technologies: [
      "React",
      "Next.js",
      "Vercel",
      "Wazuh",
      "SQL",
      "NIST 800-53",
      "SOC 2",
      "HIPAA",
    ],
    type: "Contract",
  },
  {
    company: "HackerOne",
    position: "Cybersecurity Researcher",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    description:
      "Tested web applications for OWASP Top 10 vulnerabilities, CVEs, zero-days, and unpatched issues through freelance bug bounty research. Reported injection, XSS, and insecure code findings using Burp Suite and Metasploit.",
    responsibilities: [
      "Research OWASP Top 10, CVE, and zero-day vulnerabilities in web apps",
      "Report findings including injection, XSS, and insecure code",
      "Study AI model fine-tuning and data analysis from a security perspective",
    ],
    technologies: ["Burp Suite", "Metasploit", "OWASP", "Python", "AI/LLM"],
    type: "Freelance",
  },
  {
    company: "Infinite Internet Systems, Inc.",
    position: "Senior Systems Engineer",
    location: "Nebraska, USA",
    startDate: "Jan 2022",
    endDate: "Jun 2023",
    description:
      "Supported cloud and on-prem infrastructure for 50+ clients and 2,500+ endpoints as the main escalation point for complex issues. Designed secure networks, managed VMware and Hyper-V environments, and automated deployments with Terraform and Docker.",
    responsibilities: [
      "Design secure networks with Fortinet, Ubiquiti, VLANs, VPNs, and zero-trust",
      "Manage VMware ESXi and Hyper-V migrations, provisioning, and disaster recovery",
      "Monitor SIEM/SOAR platforms and assist with incident response and remediation",
    ],
    technologies: [
      "Fortinet",
      "VMware",
      "Hyper-V",
      "Terraform",
      "Docker",
      "Microsoft 365",
      "SIEM/SOAR",
    ],
    type: "Full-time",
  },
  {
    company: "Midwest Roadside Safety Facility",
    position: "Fullstack Software Engineer",
    location: "Nebraska, USA",
    startDate: "May 2019",
    endDate: "May 2021",
    description:
      "Refactored a legacy PHP application into Laravel with a modern JavaScript frontend, cutting MySQL query latency by more than 50%. Migrated to Azure, set up GitHub Actions CI/CD, and fixed SQL injection, XSS, and authentication flaws in production.",
    responsibilities: [
      "Optimize MySQL queries, indexes, and schema design",
      "Migrate application to Azure App Service and Azure SQL Database",
      "Set up CI/CD pipelines with GitHub Actions",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "MySQL",
      "Azure",
      "GitHub Actions",
      "AWS",
    ],
    type: "Full-time",
  },
  {
    company: "Midwest Roadside Safety Facility",
    position: "Undergraduate Research Assistant",
    location: "Nebraska, USA",
    startDate: "Aug 2018",
    endDate: "May 2019",
    description:
      "Built a real-time vehicle tracking system for autonomous vehicle research and live crash testing. Developed Python telemetry pipelines and JavaScript mapping tools on GCP using ArcGIS, Google Maps API, and OpenStreetMap.",
    responsibilities: [
      "Configure u-blox GPS modules and develop Python telemetry logging tools",
      "Build cloud-based telemetry processing workflows on Google Cloud Platform",
      "Collaborate on autonomous vehicle and connected transportation research",
    ],
    technologies: [
      "Python",
      "JavaScript",
      "ArcGIS",
      "Google Maps API",
      "GCP",
      "GPS/GNSS",
    ],
    type: "Part-time",
  },
  {
    company: "UNL Police Department",
    position: "Systems Administrator",
    location: "Nebraska, USA",
    startDate: "Mar 2017",
    endDate: "Aug 2018",
    description:
      "Managed IT systems for police dispatch and emergency operations, including user accounts, patches, and updates. Supported Microsoft 365 and integrated cloud services with on-premises Active Directory.",
    responsibilities: [
      "Manage user accounts, patches, and system updates for dispatch operations",
      "Support Microsoft 365 and Active Directory integration",
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "Microsoft 365",
      "PowerShell",
    ],
    type: "Part-time",
  },
];

export type Hobby = {
  icon: string;
  title: string;
  description: string;
};

export const hobbies: Hobby[] = [
  {
    icon: "gaming",
    title: "Gaming",
    description:
      "Competitive FPS, RTS, and RPGs.",
  },
  {
    icon: "music",
    title: "Music & Singing",
    description:
      "Ten-plus years on guitar, bass, sax, and piano.",
  },
  {
    icon: "building",
    title: "Building Things",
    description: "I'd like to think of myself as an idea guy.",
  },
  {
    icon: "cars",
    title: "Repairing Cars",
    description:
      "I repair the cars I drive, I've never bought from a dealer in my life.",
  },
  {
    icon: "electronics",
    title: "Repairing Electronics",
    description: "I fix stuff and then use it or sell it online.",
  },
  {
    icon: "anime",
    title: "Anime & Manga",
    description:
      "I watch anime all the time each season, and have seen most if not all the classics. Read manga sometimes.",
  },
  {
    icon: "languages",
    title: "Languages",
    description:
      "I'm US born, but am Slavic and am fluent in Russian.",
  },
  {
    icon: "video-editing",
    title: "Video Editing",
    description:
      "I dabble with freelance video editing and content creation.",
  },
  {
    icon: "photography",
    title: "Photography",
    description:
      "Not-serious photographer; I use my iPhone and my brother's Fujifilm camera.",
  },
];

export const GITHUB_USERNAME = "dfalt0";
export const OBSIDIAN_BLOG_URL = "https://dfalt0.github.io";
export const AKINSEC_URL = "https://akinsec.com";
