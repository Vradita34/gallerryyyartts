import React from "react";
import { FloatingDock } from "../../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconHome,
  IconPictureInPictureFilled,
  IconPhoto,
  IconInfoCircle,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6 text-black dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Gallery",
      icon: <IconPhoto className="h-6 w-6 text-black dark:text-neutral-300" />,
      href: "/Gallery",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-6 w-6 text-black dark:text-neutral-300" />
      ),
      href: "/About",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-6 w-6 text-black dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-6 w-6 text-black dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-10 flex items-center justify-center w-full z-40">
      <FloatingDock items={links} />
    </div>
  );
}
