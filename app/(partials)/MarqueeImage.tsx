"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { useState } from "react";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://plus.unsplash.com/premium_vector-1706364126090-ceab36c06aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBhaW50fGVufDB8fDB8fHww",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://plus.unsplash.com/premium_vector-1711987232536-9e16b70baf4d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = [...reviews].reverse(); 

// ReviewCard Component
const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-64 h-64 cursor-pointer overflow-hidden rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Display only the image initially */}
            <img
                className={cn(
                    "w-full h-full object-cover rounded-xl transition-transform duration-300",
                    isHovered ? "scale-110 blur-sm" : "scale-100"
                )}
                alt={name}
                src={img}
            />

            {/* Overlay content on hover */}
            {isHovered && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 p-4 text-center text-white transition-opacity duration-300">
                    <img className="mb-2 rounded-full" width="48" height="48" alt="" src={img} />
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-sm opacity-80">{username}</p>
                    <blockquote className="mt-2 text-xs">{body}</blockquote>
                </div>
            )}
        </div>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[120vh] md:h-[150vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-background">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, idx) => (
                    <ReviewCard key={idx} {...review} />
                ))}
            </Marquee>

            {/* Second row of Marquee, different start, reverse scroll */}
            <Marquee reverse pauseOnHover className="[--duration:25s]">
                {secondRow.map((review, idx) => (
                    <ReviewCard key={idx} {...review} />
                ))}
            </Marquee>

            {/* Third row, reverse items, and unique timing */}
            <Marquee pauseOnHover className="[--duration:18s]">
                {thirdRow.map((review, idx) => (
                    <ReviewCard key={idx} {...review} />
                ))}
            </Marquee>

            {/* Gradient overlay for a fade effect on edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
