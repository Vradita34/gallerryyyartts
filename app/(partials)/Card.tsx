"use client";
export type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
  category: string;
};

export const cards: Card[] = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Tiger notes paper moon stars
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by MollyRoselee
        </p>
      </div>
    ),
    className: "md:col-span-2",
    category: "Fantasy",

    // thumbnail:
    thumbnail: "/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg",
    title: "Tiger notes paper moon stars",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Nature art landscape mountain
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Wafidnside
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Moon",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Nature art landscape mountain",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Woman face grunge drawing line art
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by BiancaVandijk
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Person",
    thumbnail:
      "/assets/img/Woman face grunge drawing line art - BiancaVandijk.jpg",
    title: "Woman face grunge drawing line art",
  },
  {
    id: 4,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          AI generated girl rain child
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Jhollu7
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "AI",
    thumbnail: "/assets/img/AI generated girl rain child - Jhollu7.jpg",
    title: "AI generated girl rain child",
  },
  {
    id: 5,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Amber nature water architecture
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by designtrickacademy
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail:
      "/assets/img/Amber nature water architecture -designtrickacademy.jpg",
    title: "Amber nature water architecture",
  },
  {
    id: 6,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Background bohemian painting boho
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by BiancaVanDijk
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail:
      "/assets/img/Background bohemian painting boho - BiancaVanDijk.jpg",
    title: "Background bohemian painting boho",
  },
  {
    id: 7,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Background texture abstract art
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by ksushlapush
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Background texture abstract art - ksushlapush.jpg",
    title: "Background texture abstract art",
  },
  {
    id: 8,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Bird abstract drawing background
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by BiancaVanDijk
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Animal",
    thumbnail:
      "/assets/img/Bird abstract drawing background - BiancaVanDijk.jpg",
    title: "Bird abstract drawing background",
  },
  {
    id: 10,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Flowers plants leaves floral
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Regencygirl123
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Flowers plants leaves floral - Regencygirl123.jpg",
    title: "Flowers plants leaves floral",
  },
  {
    id: 11,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Generated woman child the painting
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by RosesStreet
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "AI",
    thumbnail:
      "/assets/img/Generated woman child the painting - Roses Street.jpg",
    title: "Generated woman child the painting",
  },
  {
    id: 12,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Boho arts sunset mountains sunrise
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Regencygirl123
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Panorama",
    thumbnail:
      "/assets/img/Boho arts sunset mountains sunrise - Regencygirl123.jpg",
    title: "Boho arts sunset mountains sunrise",
  },
  {
    id: 13,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Landscape sun sunset mountain
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Regencygirl123
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Panorama",
    thumbnail: "/assets/img/Landscape sun sunset mountain - Regencygirl123.jpg",
    title: "Landscape sun sunset mountain",
  },
  {
    id: 14,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Marble stone abstract pattern
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Yourialka
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Marble stone abstract pattern- Yourialka.jpg",
    title: "Marble stone abstract pattern",
  },
  {
    id: 15,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Moon sailor night shine sky see
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by betidraws
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Moon",
    thumbnail: "/assets/img/Moon sailor night shine sky see - betidraws.jpg",
    title: "Moon sailor night shine sky see",
  },
  {
    id: 16,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Moon stars night dream landscape
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by betidraws
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Moon",
    thumbnail: "/assets/img/Moon stars night dream landscape - Kinkate.jpg",
    title: "Moon stars night dream landscape",
  },
  {
    id: 17,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Sunrice sunset desert wall art
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by TianaZZ
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Panorama",
    thumbnail: "/assets/img/Sunrice sunset desert wall art - TianaZZ.jpg",
    title: "Sunrice sunset desert wall art",
  },
  {
    id: 18,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Wolf moon tree silhouettes howl
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Pezibear
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Moon",
    thumbnail: "/assets/img/Wolf moon tree silhouettes howl - Pezibear.jpg",
    title: "Wolf moon tree silhouettes howl",
  },
  {
    id: 19,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Woman beauty portrait face
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by blauthbianca
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Person",
    thumbnail: "/assets/img/Woman beauty portrait face - blauthbianca.png",
    title: "Woman beauty portrait face",
  },
  {
    id: 20,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Background abstract wallpaper
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Annomaria
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Background abstract wallpaper - Annomaria.jpg",
    title: "Background abstract wallpaper",
  },
  {
    id: 21,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Boho art minimalism nature
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by TianaZZ
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Boho art minimalism nature - TianaZZ.jpg",
    title: "Boho art minimalism nature",
  },
];
