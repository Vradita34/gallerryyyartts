"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section className="relative pt-40 pb-24 z-0">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1674902194247-946ba4c986f5?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full absolute top-0 left-0 z-0 h-60 transition-transform duration-200"
          alt="cover-image"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <motion.img
              src="https://pagedone.io/asset/uploads/1705471668.png"
              className="border-4 border-solid border-white rounded-full transition-transform duration-200"
              alt="cover-image"
            />
          </div>
          <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 dark:text-white">
                Jhon Doeeee
              </h3>
              <p className="font-normal text-base leading-7 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                porro!
              </p>
            </div>
            <button className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-[#48CFCB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="stroke-gray-700 transition-all duration-500 group-hover:stroke-[#F5F5F5]"
                  d="M14.1667 11.6666V13.3333C14.1667 14.9046 14.1667 15.6903 13.6785 16.1785C13.1904 16.6666 12.4047 16.6666 10.8333 16.6666H7.50001C5.92866 16.6666 5.14299 16.6666 4.65483 16.1785C4.16668 15.6903 4.16668 14.9047 4.16668 13.3333V11.6666M16.6667 9.16663V13.3333M11.0157 10.434L12.5064 9.44014C14.388 8.18578 15.3287 7.55861 15.3287 6.66663C15.3287 5.77466 14.388 5.14749 12.5064 3.89313L11.0157 2.8993C10.1194 2.3018 9.67131 2.00305 9.16668 2.00305C8.66205 2.00305 8.21393 2.3018 7.31768 2.8993L5.82693 3.89313C3.9454 5.14749 3.00464 5.77466 3.00464 6.66663C3.00464 7.55861 3.9454 8.18578 5.82693 9.44014L7.31768 10.434C8.21393 11.0315 8.66205 11.3302 9.16668 11.3302C9.67131 11.3302 10.1194 11.0315 11.0157 10.434Z"
                  stroke="#F5F5F5"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-[#F5F5F5]">
                Graphic Designer
              </span>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
            <div className="flex items-center gap-4">
              <button className="py-3.5 px-5 rounded-full bg-[#48CFCB] text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#229799]">
                Edit Profile
              </button>
              <button className="py-3.5 px-5 rounded-full bg-[#F5F5F5] text-[#229799] font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#a0fcf9]">
                Settings
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 ">
              <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">
                Skills
              </p>
              <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
                <li className="py-3.5 px-7 rounded-full bg-[#48cfcb] font-semibold text-base leading-7 text-[#F5F5F5]">
                  Adobe
                </li>
                <li className="py-3.5 px-7 rounded-full bg-[#48cfcb] font-semibold text-base leading-7 text-[#F5F5F5]">
                  Figma
                </li>
                <li className="py-3.5 px-7 rounded-full bg-[#48cfcb] font-semibold text-base leading-7 text-[#F5F5F5]">
                  Corel draw
                </li>
                <li className="py-3.5 px-7 rounded-full bg-[#48cfcb] font-semibold text-base leading-7 text-[#F5F5F5]">
                  Ibis paint
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black dark:text-white mb-8 max-xl:text-center">
            My Arts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <Image
                className="rounded-2xl object-cover"
                src="/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg"
                alt="Jacket image"
                width={500}
                height={500}
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-[#48CFCB]">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-[#424242]">
                    Tiger notes paper moon stars
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Animal</p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <Image
                className="rounded-2xl object-cover"
                src="/assets/img/Woman face grunge drawing line art - BiancaVandijk.jpg"
                alt="Women Face Line Art"
                width={500}
                height={500}
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-[#48CFCB]">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-[#424242] ">
                    Women Face Line Art
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Line Art</p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <Image
                className="rounded-2xl object-cover"
                src="/assets/img/sea-view-JohnDoe .jpg"
                alt="Sea View"
                width={500}
                height={500}
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-[#48CFCB]">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-[#424242] ">
                    Sea View
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Nature</p>
              </div>
            </a>

            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <Image
                className="rounded-2xl object-cover"
                src="/assets/img/ai-generated-jhonDoe.jpg"
                alt="Fox"
                width={500}
                height={500}
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-[#48CFCB]">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-[#424242] ">
                    Fox
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Animal</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
