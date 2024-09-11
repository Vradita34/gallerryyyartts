"use client";

import RetroGrid from "@/components/ui/RetroBg";
import { HyperTextDemo } from "./Hypertext";
import { TextGenerateEffectDemo } from "./TextGenerate";
import ButtonGetStarted from "./ButtonGetStarted";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[90vh] md:h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background border-none">
      <HyperTextDemo />
      <TextGenerateEffectDemo />
      <ButtonGetStarted />
      <RetroGrid />
    </div>
  );
}
