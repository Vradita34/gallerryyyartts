import TextReveal from "@/components/ui/text-reveal";

export async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border-none bg-white dark:bg-black">
      <TextReveal text="Get the inspiration you need with our curated collections and boost your creativity" />
    </div>
  );
}
