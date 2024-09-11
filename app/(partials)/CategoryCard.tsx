import Image from "next/image";

export type Category = {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
};

export const Categories: Category[] = [
  {
    id: 1,
    category: "Abstract",
    thumbnail: "/assets/img/Background texture abstract art - ksushlapush.jpg",
    title: "Abstract",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "AI",
    thumbnail: "/assets/img/AI generated girl rain child - Jhollu7.jpg",
    title: "AI",
  },
  {
    id: 2,
    category: "Animal",
    thumbnail:
      "/assets/img/Bird abstract drawing background - BiancaVanDijk.jpg",
    title: "Animal",
  },
  {
    id: 2,
    category: "Person",
    thumbnail:
      "/assets/img/woman model dress fashion style - Shimabdinzade.jpg",
    title: "Person",
  },
  {
    id: 2,
    category: "Panorama",
    thumbnail: "/assets/img/Landscape sun sunset mountain - Regencygirl123.jpg",
    title: "Panorama",
  },
  {
    id: 2,
    category: "Moon",
    thumbnail: "/assets/img/Moon stars night dream landscape - Kinkate.jpg",
    title: "Moon",
  },
];

// Menggunakan Image di komponen Anda
const CategoryCard = ({ category }: { category: Category }) => (
  <div>
    <Image
      src={category.thumbnail}
      alt={category.title}
      width={300} // Atur lebar sesuai kebutuhan
      height={200} // Atur tinggi sesuai kebutuhan
    />
    <h2>{category.title}</h2>
  </div>
);
