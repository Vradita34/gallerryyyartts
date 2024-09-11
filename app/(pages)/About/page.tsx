"use client";

import Footer from "@/app/(partials)/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const AboutPage = (props: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="flex mx-auto w-full h-[100vh] px-8 bg-white dark:bg-black">
        <div className="relative sm:mx-0 lg:mx-10 sm:px-8 lg:px-15 w-full grid sm:grid-rows-1 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto w-full flex flex-col justify-center text-left sm:px-0 lg:px-10"
          >
            <motion.h1
              variants={item}
              className="text-6xl font-bold dark:text-white"
            >
              About US
            </motion.h1>
            <motion.h3
              variants={item}
              className="text-2xl font-bold dark:text-white"
            >
              What is US? US is what?
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="rounded-lg w-full bg-black h-[5px] mt-4 dark:bg-white"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
              className="mt-4 font-medium text-lg text-justify dark:text-white"
            >
              The U.S. is a country of 50 states covering a vast swath of North
              America, with Alaska in the northwest and Hawaii extending the
              nations presence into the Pacific Ocean. Major Atlantic Coast
              cities are New York, a global finance and culture center, and
              capital Washington, DC. Midwestern metropolis Chicago is known for
              influential architecture and on the west coast, Los Angeles
              Hollywood is famed for filmmaking.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
            className="flex justify-center items-center w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1725986038200-383d1925a822?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              width={500}
              height={500}
              className="rounded-lg shadow-black shadow-md sm:hidden lg:block"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5] dark:bg-gradient-to-t dark:from-[#48CFCB] dark:to-[#229799]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="font-manrope text-5xl text-center font-bold text-gray-900 dark:text-white"
            >
              Our Team{" "}
            </motion.h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-3 gap-8 w-full mx-auto md:max-w-3xl lg:max-w-full justify-items-center items-center place-items-center"
          >
            <motion.div
              initial={item.hidden}
              whileInView={item.show}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="block group md:col-span-2 lg:col-span-1 "
            >
              <div className="relative mb-6">
                <Image
                  src="/assets/img/damar.jpg"
                  alt="avatar"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  width={400}
                  height={400}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 dark:text-white group-hover:text-indigo-600">
                Damar J. Justin{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Designer
              </span>
            </motion.div>
            <motion.div
              initial={item.hidden}
              whileInView={item.show}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="group group md:col-span-2 lg:col-span-1"
            >
              <div className="relative mb-6">
                <Image
                  src="/assets/img/vradita.jpg"
                  alt="Jerom image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  width={400}
                  height={400}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 dark:text-white group-hover:text-indigo-600">
                Vradita C. Kusuma{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Leader
              </span>
            </motion.div>
            <motion.div
              initial={item.hidden}
              whileInView={item.show}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="block group md:col-span-2 lg:col-span-1 "
            >
              <div className="relative mb-6">
                <Image
                  src="/assets/img/naufal.jpg"
                  alt="avatar"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  width={400}
                  height={400}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 dark:text-white group-hover:text-indigo-600">
                Naufal A. F.{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Programmer
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={item.hidden}
            whileInView={item.show}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto"
          >
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 dark:text-white">
                Enjoy the world of arts with this website
              </h2>
            </div>
            <div className="relative w-full text-center  lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                We display any style of arts. Many artists can be found here,
                choose who you like! This is world of arts.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={item.hidden}
            whileInView={item.show}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
          >
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#229799]">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="#229799"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Various Arts
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                We Provide Various Arts For You To Enjoy the Finest Art.
              </p>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#229799]">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="#229799"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Rich of Styles
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                We have the most up-to-date styles of the any art for you.
                Discover what you like!
              </p>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#229799]">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#229799"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Fast Services{" "}
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                If there any bug or problem, you can contact us. We will handle
                it as fast as we can.
              </p>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#229799]">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#229799"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Trusted by Artists
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                This website is trusted by many artists. You can find them here
                or be the one of them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <motion.div
          initial={item.hidden}
          whileInView={item.show}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-[#48CFCB] to-[#229799] flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                Connect with us
              </h2>
              <p className="text-xl text-indigo-100">
                Contact us with any query or any idea.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-[#229799] font-semibold py-4 px-8 transition-all duration-500"
            >
              Get In Touch
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#229799"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
