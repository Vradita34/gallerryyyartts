"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="py-12 mt-0 bg-gradient-to-r from-[#229799] to-[#00CCDD] dark:bg-slate-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
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
                Gallery <span className="text-[#bffffa]">Arts</span>
              </p>
            </div>
          </div>
          <div className="xl:flex xl:items-center xl:justify-start">
            <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
              © Copyright 2024 GalleryArts - Horizon teams
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <a
                  href="/Gallery"
                  title="Terms & Conditions"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Gallery{" "}
                </a>
              </li>
              <li>
                <a
                  href="/Profile"
                  title="Services"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Profile{" "}
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  title="Privacy Policy"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  About Me{" "}
                </a>
              </li>
            </ul>

            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <li>
                <a
                  href="https://github.com/HorizonAlliance"
                  title="Github Organizations"
                  className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.579v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.304.763-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.382 1.237-3.221-.124-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.301 1.23a11.495 11.495 0 013.005-.404c1.02.005 2.048.137 3.005.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.654.243 2.873.119 3.176.77.839 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.432.372.818 1.104.818 2.227v3.293c0 .321.192.695.8.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
