import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowItWorks() {
  const data = [
    {
      title: "Get Started",
      content: (
        <div>
          <p className="text-[#48CFCB] dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Register And Login To Gallery Arts
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/homepageImage/clickhere.png"
              alt="ClickHere"
              width={500}
              height={600}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              layout="responsive"
            />
            <Image
              src="/assets/homepageImage/login.png"
              alt="Login"
              width={500}
              height={600}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              layout="responsive"
            />
            <Image
              src="/assets/homepageImage/registere.png"
              alt="Registered"
              width={500}
              height={600}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              layout="responsive"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Explore",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Search Desaign arts or Upload your first work here and see all the
            existing works.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/homepageImage/gallerypage.png"
              alt="Gallery Page"
              width={500}
              height={600}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              layout="responsive"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Artist Profile",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xlfont-normal mb-4">
            see more about the owner of the design work
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/homepageImage/profilePage.png"
              alt="Profile Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
