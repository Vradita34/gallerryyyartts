"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FlipText from "@/components/ui/text-flip";
import DarkModeToggle from "../(partials)/buttondarkmode";

const SidebarForNavbarAsli = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // UseEffect to get active link based on window.location
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
      console.log(window.location.pathname);
    }
  }, []); // Runs only once when the component is mounted

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/Gallery", label: "Gallery" },
    { href: "/Profile", label: "Profile" },
    { href: "/About", label: "About" },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      <motion.div
        key={isScrolled ? "scrolled" : "notScrolled"}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className={cn(
          "transition-all ease-linear py-2 bg-black/30 backdrop-blur",
          isScrolled
            ? "w-full lg:flex lg:max-w-fit fixed lg:top-5 lg:inset-x-0 lg:mx-auto border-none border-transparent dark:border-white/[0.2] lg:rounded-full backdrop-blur bg-black/50 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] lg:pr-2 lg:pl-8 lg:py-2 lg:items-center lg:justify-center lg:space-x-4"
            : "py-2 mb-2 border-none z-10 w-full fixed"
        )}
      >
        <div className="mx-auto max-w-9xl  lg:px-3">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between items-center  flex-row w-full space-x-10">
              {/* Logo on the left */}
              <div className="flex items-center justify-center">
            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center mr-3 ml-4 space-x-3">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z"
                  fill="#48CFCB"
                ></path>
                <path
                  d="M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z"
                  fill="#48CFCB"
                ></path>
              </svg>
            </div>
            <div className="mr-3 ml-4">
              <p className="text-2xl md:text-4xl font-extrabold text-white">
                Gallery <span className="text-[#1cd1c2]">Arts</span>
              </p>
            </div>
          </div>

              {/* Links in the center */}
              <ul className="hidden lg:flex items-center justify-between margin-auto space-x-10">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.div
                      whileHover={{ scale: 1.5, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setActiveLink(link.href)}
                      >
                        <FlipText
                          word={link.label}
                          className={`space-x-0 font-bold tracking-[-0.1em]  ${activeLink === link.href ? "text-[#55fff1]" : "text-white"}`}
                        />
                      </a>
                    </motion.div>
                  </li>
                ))}
              </ul>


              {/* Buttons in the right corner */}
              <div className="hidden lg:flex items-center space-x-4 ml-3">
                <button className="bg-indigo-50 text-[#48CFCB] rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-[#48CFCB] text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-[#6439FF]">
                  Sign up
                </button>
                <DarkModeToggle />
              </div>

              {/* Mobile Button to Toggle Sidebar */}
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 mr-4 text-sm text-gray-500 dark:bg-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-expanded={isSidebarOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              {/* Overlay when sidebar is open */}
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 z-30  lg:hidden"
                  onClick={toggleSidebar}
                ></div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      {/* Sidebar for Mobile */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bg-white dark:bg-black top-14 left-0 z-50 mt-2 h-full w-64  shadow-lg lg:hidden"
      >
        <div className="p-4 py-16">
          {/* Sidebar Links */}
          <nav>
            <ul className="mt-6 space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <motion.div
                    whileHover={{ scale: 1.5, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                    >
                      <FlipText
                        word={link.label}
                        className={`text-2xl font-normal sm:font-bold text-left tracking-[-0.1em]  ${activeLink === link.href ? "text-[#55fff1]" : "text-white"}`}
                      />
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons inside Sidebar */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
              Login
            </button>
            <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-[#6439FF]">
              Sign up
            </button>
          </div>
          <div className="absolute bottom-16 left-2 z-40 bg-black p-1 rounded-full">
            <DarkModeToggle />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarForNavbarAsli;