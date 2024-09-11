"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlurFade from "@/app/(partials)/BlurFade";
import { VelocityScroll } from "@/app/(partials)/Velocity";
import { Card, cards } from "@/app/(partials)/Card";
import { Category, Categories } from "@/app/(partials)/CategoryCard";
import { useRouter } from "next/navigation";

// import { useRouter } from "next/router";

export const CategoryCard = ({ categories }: { categories: Category[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleCategoryClick = (category: Category) => {
    router.push(`/Gallery/Category?category=${category.category}`);
  };

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="w-full h-full sm:h-80 grid grid-cols-2 md:grid-cols-5 max-w-7xl mx-auto gap-4 relative p-5 sm:p-0 sm:pt-10 sm:pb-10">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCategoryClick(category)} // Tambahkan event onClick
            className={cn(
              "relative overflow-hidden rounded-lg transition-all duration-300 ease-out cursor-pointer",
              hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
            layoutId={`category-${category.id}`}
          >
            <ImageComponent category={category} />
            <motion.div className="absolute inset-0 bg-transparent flex items-end py-8 px-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
              <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </BlurFade>
  );
};

const ImageComponent = ({ category }: { category: Category }) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <Image
        src={category.thumbnail}
        alt={category.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      {/* Overlay hitam dengan transparansi */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Teks di atas gambar */}
      <p className="relative z-10 text-1xl sm:text-2xl font-bold text-center text-white p-4">
        {category.title}
      </p>
    </div>
  );
};

export const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <section
      id="photos"
      className="w-full h-full grid grid-cols-1 max-w-7xl mx-auto relative p-5 sm:p-0 sm:pt-10 sm:pb-10"
    >
      <div className="columns-1 sm:columns-3">
        {cards.map((card, idx) => (
          <BlurFade key={card.thumbnail} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain cursor-pointer"
              src={card.thumbnail}
              alt={card.title}
              onClick={() => handleCardClick(card)}
            />
          </BlurFade>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <Modal selected={selectedCard} handleClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
};

const Modal = ({
  selected,
  handleClose,
}: {
  selected: Category;
  handleClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={handleClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Gambar di bagian bawah */}
        <div className="relative w-full h-auto" style={{ aspectRatio: "16/9" }}>
          <Image
            src={selected.thumbnail}
            alt={selected.title}
            layout="fill"
            objectFit="cover" // Agar gambar tidak terdistorsi
            className="rounded-t-lg"
          />
          {/* Konten teks di atas gambar */}
          <div className="absolute w-full inset-0 flex items-end justify-start">
            <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
            </div>
          </div>
        </div>

        {/* Tombol close di pojok kanan atas */}
        <button
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2"
          onClick={handleClose}
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

export function GalleryCard() {
  return (
    <div className="h-full w-full">
      <div className="h-auto">
        <CategoryCard categories={Categories} />
      </div>
      <BlurFade delay={0.25 * 0.05} inView>
        <VelocityScroll
          text="GALLERY"
          default_velocity={2}
          className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem]"
        />
      </BlurFade>
      <Cards />
    </div>
  );
}
