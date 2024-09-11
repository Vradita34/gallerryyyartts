"use client";

import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { HyperTextDemo } from "./Hypertext";
import { TextGenerateEffectDemo } from "./TextGenerate";
import LightButton from "./LightButton";
import DarkModeToggle from "./buttondarkmode";

export const Example = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={200}
      rotationRange={25}
      images={[
        "https://via.placeholder.com/150/0000FF/808080?text=Image+1",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2",
        "https://via.placeholder.com/150/00FF00/000000?text=Image+3",
        "https://via.placeholder.com/150/FFFF00/0000FF?text=Image+4",
        "https://via.placeholder.com/150/FF00FF/00FFFF?text=Image+5",
        "https://via.placeholder.com/150/00FFFF/FF00FF?text=Image+6",
        "https://via.placeholder.com/150/FF8000/FFFFFF?text=Image+7",
        "https://via.placeholder.com/150/008080/FF0000?text=Image+8",
        "https://via.placeholder.com/150/800080/FFFF00?text=Image+9",
        "https://via.placeholder.com/150/808080/00FF00?text=Image+10",
        "https://via.placeholder.com/150/FFFFFF/000000?text=Image+11",
        "https://via.placeholder.com/150/000000/FFFFFF?text=Image+12",
        "https://via.placeholder.com/150/0000FF/FF0000?text=Image+13",
        "https://via.placeholder.com/150/00FF00/0000FF?text=Image+14",
        "https://via.placeholder.com/150/FF0000/00FF00?text=Image+15",
        "https://via.placeholder.com/150/FFFF00/FF00FF?text=Image+16",
      ]}
    >
      <DarkModeToggle />
      <section className=" container relative flex h-screen w-full items-center justify-center px-4 z-10">
        <div className="text-center">
          <HyperTextDemo />
          <TextGenerateEffectDemo />
          <LightButton />
        </div>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = Math.floor(Math.random() * images.length);
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = (imageRenderCount.current + 1).toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 0.5],
        transform: [
          `translate(-50%, -25%) scale(0.5) rotate(${rotation}deg)`,
          `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [0.5, 0],
      },
      { ease: "linear", duration: 1.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0 z-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
