import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12" style={{ minHeight: 'calc(100vh - 7rem)' }}>
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl">Nice to meet you</h1>
          <p className="text-sm md:text-base leading-relaxed">
            I'm a Salvadoran American passionate about being playful, curious,
            and bringing people together. Growing up, I had no clear picture of
            the future I was working toward. I just knew it would be something
            that would inspire and challenge me, while also bringing a sense of
            stability, fulfillment and joy. I first discovered computer science
            in high school through a summer program at MIT. It was tough—I had
            never experienced such academic rigor. But by proactively seeking
            support, I persevered.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/nyc-me.jpeg"
            alt="Description of image"
            width={500}
            height={300}
            priority
            className="rounded-md w-auto h-auto max-w-[280px] md:max-w-[400px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-0">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/me-cs.jpg"
            alt="Description of another image"
            width={500}
            height={300}
            priority
            className="rounded-md w-auto h-auto max-w-[280px] md:max-w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left order-1 md:order-2">
          <h1 className="text-3xl md:text-5xl">I can, and I will</h1>
          <p className="text-sm md:text-base leading-relaxed">
            For undergrad, I attended Columbia University's School of
            Engineering. I majored in Computer Science with a focus on
            applications. As a first-generation college student, I struggled
            navigating higher education. With the support of friends, family,
            and my Columbia community, I gained the confidence to embrace
            difficult challenges and push forward.
          </p>
        </div>
      </div>
    </main>
  );
}
