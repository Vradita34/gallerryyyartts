"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { GalleryCard } from "./GalleryCard";
import { BlurInDemo } from "./TextBlur";
import { PlaceholdersAndVanishInput } from "./PlaceholdersAndVanishInput";

const placeholders = ["The Monalisa", "Protrait Abstract", "Mural Palette"];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

export function SparklesPreview() {
  return (
    <div className="relative w-full h-[100-rem] bg-transparent dark:bg-black overflow-hidden rounded-md">
      <div className="relative z-2 h-full overflow-y-auto mt-12">
        <BlurInDemo />
        <div className="max-w-7xl mx-auto gap-4 relative p-5 sm:p-0 sm:pt-10 sm:pb-10">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <GalleryCard />
      </div>
    </div>
  );
}
