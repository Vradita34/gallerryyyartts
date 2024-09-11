"use client";

import React from "react";

export default function Content() {
    return (
        <section className="py-10 bg-gradient-to-t from-[#48CFCB] to-[#229799] sm:py-16 lg:py-24 dark:bg-slate-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-[#6439FF] to-[#7CF5FF]">
                        <p className="text-xs font-semibold tracking-widest text-white uppercase">Share your desaign</p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Welcome to our gallery, where art and creativity meet!</h2>
                    <p className="mt-4 text-base leading-relaxed text-white ">We showcase visual masterpieces that inspire and captivate.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                    <div className="transition-all duration-200 rounded-lg dark:bg-black from-[#48CFCB] to-[#229799] hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                            <h3 className="mt-8 text-lg font-semibold text-white dark:text-white">User-Friendly Navigation</h3>
                            <p className="mt-4 text-base text-white  dark:text-gray-300">Easily explore and discover artworks with our intuitive navigation system.</p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 rounded-lg dark:bg-black from-[#48CFCB] to-[#229799] hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>

                            <h3 className="mt-8 text-lg font-semibold text-white dark:text-white">Artist Profiles</h3>
                            <p className="mt-4 text-base text-white  dark:text-gray-300">Get to know the artists behind the works with detailed profiles and insights into their creative processes.</p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 rounded-lg dark:bg-black from-[#48CFCB] to-[#229799] hover:shadow-xl">
                        <div className="py-10 px-9">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                            <h3 className="mt-8 text-lg font-semibold text-white dark:text-white">Responsive Design</h3>
                            <p className="mt-4 text-base text-white  dark:text-gray-300">Experience our gallery on any device, with a design optimized for desktops, tablets, and mobile phones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}