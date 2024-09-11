"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `An art space accessible anytime, anywhere.`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
