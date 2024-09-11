"use client";

import BlurIn from "@/components/ui/text-blur";

export const BlurInDemo = () => {
  return (
    <BlurIn
      word="Explore the GalleryArts"
      className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-blue dark:text-white p-5 sm:p-0 sm:pt-10 sm:pb-10"
    />
  );
};

interface CategoryNameProps {
  category: string;
}

export const CategoryName = ({ category }: CategoryNameProps) => {
  return (
    <BlurIn
      word={`${category}`}
      className="md:text-7xl mb-10 text-3xl lg:text-6xl font-bold text-center text-blue dark:text-white p-5 sm:p-0 sm:pt-10 sm:pb-10"
    />
  );
};
