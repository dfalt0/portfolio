"use client";

import { LottieIcon } from "@/components/shared/lottie-icon";

type HobbyLottieIconProps = {
  icon: string;
};

export function HobbyLottieIcon({ icon }: HobbyLottieIconProps) {
  return (
    <LottieIcon
      icon={icon}
      folder="hobbies"
      className="mb-4 flex h-10 w-10 items-center justify-center"
      lottieClassName="h-10 w-10"
    />
  );
}
