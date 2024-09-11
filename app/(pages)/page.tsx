import Content from "../(partials)/Content";
import Footer from "../(partials)/Footer";
import { HowItWorks } from "../(partials)/HowItWorks";
import JoinUs from "../(partials)/JoinGallery";
import { MarqueeDemo } from "../(partials)/MarqueeImage";
import { RetroGridDemo } from "../(partials)/RetroBgGrid";
import { TextRevealDemo } from "../(partials)/TextReveal";

const page = () => {
  return (
    <div className="dark:bg-black">
      <RetroGridDemo />
      <MarqueeDemo />
      <TextRevealDemo />
      <Content />
      <HowItWorks />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default page;
