"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useInView } from "@/components/shared/lazy-mount";

type LottieIconProps = {
  icon: string;
  folder: "hobbies" | "projects" | "articles";
  className?: string;
  lottieClassName?: string;
  placeholderClassName?: string;
};

export function LottieIcon({
  icon,
  folder,
  className = "flex items-center justify-center",
  lottieClassName = "h-10 w-10",
  placeholderClassName = "rounded-lg bg-muted",
}: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const inView = useInView(containerRef);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    if (!inView || animationData) return;

    let cancelled = false;
    fetch(`/icons/${folder}/${icon}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [inView, icon, folder, animationData]);

  useEffect(() => {
    if (!animationData) return;
    if (inView) lottieRef.current?.play();
    else lottieRef.current?.pause();
  }, [inView, animationData]);

  const sizeClass = lottieClassName;

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop
          autoplay={false}
          className={sizeClass}
        />
      ) : (
        <div className={`${sizeClass} ${placeholderClassName}`} />
      )}
    </div>
  );
}
