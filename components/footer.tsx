export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mark's Portfolio. O'RLY? Productions. What rights reserved?
          </p>
          <p className="text-sm text-muted-foreground">
            Next.js + Tailwind + shadcn/ui + ReactBits
          </p>
        </div>
      </div>
    </footer>
  );
}

