import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-2 items-center gap-12" style={{ minHeight: 'calc(100vh - 7rem)' }}>
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl">Nice to meet you</h1>
          <p className="text-base">
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
        <Image
          src="/nyc-me.jpeg"
          alt="Description of image"
          width={500}
          height={300}
          priority
          className="rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-12">
        <Image
          src="/me-cs.jpg"
          alt="Description of another image"
          width={500}
          height={300}
          priority
          className="rounded-md"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl">I can, and I will</h1>
          <p className="text-base">
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
