"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string;
  onVisibleChange?: (visible: boolean) => void;
};

export function LazyMount({
  children,
  className,
  rootMargin = "200px",
  minHeight = "1px",
  onVisibleChange,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setInView(visible);
        onVisibleChange?.(visible);
        if (visible) setMounted(true);
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, onVisibleChange]);

  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {mounted ? children : null}
      {!mounted && inView === false && (
        <div aria-hidden className="w-full" style={{ minHeight }} />
      )}
    </div>
  );
}

export function useInView(ref: React.RefObject<HTMLElement | null>, rootMargin = "200px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
