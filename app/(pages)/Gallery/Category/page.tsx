// Use client directive to ensure client-side rendering
"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, cards } from "@/app/(partials)/Card";
import { CategoryName } from "@/app/(partials)/TextBlur";
import Image from "next/image";
import BlurFade from "@/app/(partials)/BlurFade";
import { AnimatePresence, motion } from "framer-motion";

// Separate the CategoryPage component into a client-side only component
const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  // Filter cards based on category
  const filteredCards = cards.filter((card) => card.category === category);

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
      <CategoryName category={category} />

      {filteredCards.length > 0 ? (
        <div className="columns-1 sm:columns-3">
          {filteredCards.map((card, idx) => (
            <BlurFade key={card.id} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain cursor-pointer"
                src={card.thumbnail}
                alt={card.title}
                onClick={() => handleCardClick(card)}
              />
            </BlurFade>
          ))}
        </div>
      ) : (
        // Display "Not Found" if no cards match the category
        <BlurFade delay={0.25 * 0.05} inView>
          <div className="flex justify-center items-center h-64">
            <h2 className="text-xl font-bold text-black">Not Found</h2>
          </div>
        </BlurFade>
      )}

      <AnimatePresence>
        {selectedCard && (
          <Modal selected={selectedCard} handleClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
};

// Modal component for displaying card details
const Modal = ({
  selected,
  handleClose,
}: {
  selected: Card;
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
        {/* Image inside the modal */}
        <div className="relative w-full h-auto" style={{ aspectRatio: "16/9" }}>
          <Image
            src={selected.thumbnail}
            alt={selected.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          {/* Text content overlay */}
          <div className="absolute w-full inset-0 flex items-end justify-start">
            <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-sm">{selected.content}</p>
            </div>
          </div>
        </div>

        {/* Close button */}
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

// Wrap the CategoryPage with Suspense to handle CSR gracefully
export default function CategoryPageWrapper() {
  return (
    <Suspense fallback={<div>Loading Category Page...</div>}>
      <CategoryPage />
    </Suspense>
  );
}
