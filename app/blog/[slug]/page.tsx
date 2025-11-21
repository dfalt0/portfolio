import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

// Blog posts data - in a real app, this would come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}> = {
  "building-scalable-web-applications": {
    title: "Building Scalable Web Applications",
    description: "Exploring best practices for building scalable web applications with modern frameworks and architectures.",
    date: "2024-01-15",
    tags: ["Web Development", "Architecture", "Best Practices"],
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
      <p>Modern frameworks like Next.js, React, and Node.js provide excellent tools for building scalable applications. They offer:</p>
      <ul>
        <li>Server-side rendering for better performance</li>
        <li>Built-in optimization features</li>
        <li>Strong community support and best practices</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable web applications requires careful planning and consideration of architecture, technology choices, and future growth. By following best practices and leveraging modern frameworks, you can create applications that grow with your business.</p>
    `,
  },
  "react-performance-optimization": {
    title: "Understanding React Performance Optimization",
    description: "Deep dive into React performance optimization techniques and how to identify and fix common bottlenecks.",
    date: "2024-01-10",
    tags: ["React", "Performance", "Optimization"],
    content: `
      <h2>Introduction</h2>
      <p>React is a powerful library for building user interfaces, but without proper optimization, applications can suffer from performance issues. Understanding how to optimize React applications is essential for creating smooth, responsive user experiences.</p>
      
      <h2>Common Performance Issues</h2>
      <p>Some common performance bottlenecks in React applications include:</p>
      <ul>
        <li><strong>Unnecessary Re-renders:</strong> Components re-rendering when their props or state haven't actually changed.</li>
        <li><strong>Large Component Trees:</strong> Rendering too many components at once can slow down the application.</li>
        <li><strong>Inefficient State Management:</strong> Poor state structure leading to unnecessary updates.</li>
        <li><strong>Missing Memoization:</strong> Not using React.memo, useMemo, or useCallback when appropriate.</li>
      </ul>
      
      <h2>Optimization Techniques</h2>
      <p>Here are some key techniques to optimize React performance:</p>
      <ul>
        <li><strong>React.memo:</strong> Prevent re-renders of functional components when props haven't changed.</li>
        <li><strong>useMemo:</strong> Memoize expensive calculations.</li>
        <li><strong>useCallback:</strong> Memoize callback functions to prevent unnecessary re-renders.</li>
        <li><strong>Code Splitting:</strong> Use React.lazy and Suspense to split your code into smaller chunks.</li>
        <li><strong>Virtualization:</strong> Use libraries like react-window for long lists.</li>
      </ul>
      
      <h2>Profiling Tools</h2>
      <p>React DevTools Profiler is an excellent tool for identifying performance issues. It helps you:</p>
      <ul>
        <li>Identify which components are re-rendering</li>
        <li>See how long renders take</li>
        <li>Find components that are causing performance bottlenecks</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React performance optimization is an ongoing process. By understanding common issues and using the right tools and techniques, you can create fast, responsive React applications that provide excellent user experiences.</p>
    `,
  },
  "future-of-full-stack-development": {
    title: "The Future of Full-Stack Development",
    description: "A look at emerging trends and technologies shaping the future of full-stack development.",
    date: "2024-01-05",
    tags: ["Full-Stack", "Trends", "Technology"],
    content: `
      <h2>Introduction</h2>
      <p>The landscape of full-stack development is constantly evolving. New technologies, frameworks, and methodologies are emerging that are reshaping how we build applications. Let's explore some of the key trends shaping the future.</p>
      
      <h2>Emerging Technologies</h2>
      <p>Several technologies are gaining traction in the full-stack development space:</p>
      <ul>
        <li><strong>Serverless Architecture:</strong> Functions-as-a-Service (FaaS) platforms are making it easier to build and deploy applications without managing servers.</li>
        <li><strong>Edge Computing:</strong> Running code closer to users for reduced latency and better performance.</li>
        <li><strong>AI Integration:</strong> AI and machine learning are being integrated into applications at an unprecedented rate.</li>
        <li><strong>WebAssembly:</strong> Enabling high-performance applications in the browser.</li>
      </ul>
      
      <h2>Framework Evolution</h2>
      <p>Modern frameworks are evolving to meet new challenges:</p>
      <ul>
        <li><strong>Next.js 14+:</strong> Server components, improved routing, and better performance.</li>
        <li><strong>Remix:</strong> Focus on web fundamentals and progressive enhancement.</li>
        <li><strong>SvelteKit:</strong> Compile-time optimizations for smaller bundle sizes.</li>
        <li><strong>Astro:</strong> Islands architecture for optimal performance.</li>
      </ul>
      
      <h2>Development Practices</h2>
      <p>New development practices are emerging:</p>
      <ul>
        <li><strong>Type Safety:</strong> TypeScript adoption continues to grow, with more projects defaulting to type-safe code.</li>
        <li><strong>Component-Driven Development:</strong> Building applications from reusable, tested components.</li>
        <li><strong>API-First Design:</strong> Designing APIs before building frontends.</li>
        <li><strong>Micro-Frontends:</strong> Breaking down frontend applications into smaller, independent pieces.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of full-stack development is exciting and full of possibilities. By staying current with emerging technologies and best practices, developers can build better, more efficient, and more maintainable applications. The key is to be adaptable and continuously learn.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Mark Akinshev`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-8"
            >
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
            
            <p className="text-xl text-muted-foreground mb-8">{post.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div 
              className="blog-content space-y-6 text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

