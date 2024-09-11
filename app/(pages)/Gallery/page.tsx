import { FloatingDockDemo } from "@/app/(partials)/FloatingDock";
import { SparklesPreview } from "@/app/(partials)/HeroPartikel";
import Footer from "@/app/(partials)/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="h-screen  dark:bg-black">
        <SparklesPreview />
        <Footer />
      </div>
    </>
  );
};

export default page;
