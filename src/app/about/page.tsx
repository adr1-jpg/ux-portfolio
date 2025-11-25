import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col px-4 md:px-0 gap-16 md:gap-24">
      {/* Nice to meet you section */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
        style={{ minHeight: "50vh" }}
      >
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl">Nice to meet you</h1>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              I'm Adriana, a Design Engineer at Microsoft Azure. I build AI tools,
              design systems, and interactive prototypes.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/nyc-me.jpeg"
            alt="Adriana standing and looking back with Times Square in the background"
            width={400}
            height={500}
            priority
            className="rounded-lg object-cover w-full h-auto max-w-[320px] md:max-w-[450px] shadow-md"
          />
        </div>
      </section>
      {/* What I do section */}
      <section className="flex flex-col gap-8 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Design Tools + Systems</h3>
            <p className="text-sm md:text-base leading-relaxed">
              At Microsoft, I build tools that elevate the experience of both
              designers and engineers. Currently, I'm working on AI-driven
              design-to-code workflows that reduce the time from prototype to
              production, using LLMs and prompt engineering.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Accessibility + Inclusivity
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              I engineer accessibility into production and prototyping code,
              ensuring products work with assistive technologies before they
              ship. This means validating compatibility with screen readers,
              400% magnification, keyboard-only navigation, voice control, and
              high contrast modes.
            </p>
            <p>
              I also lead accessibility efforts across 20+ engineering teams,
              ensuring products work with assistive technologies.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold"></h3>
            <p className="text-sm md:text-base leading-relaxed"></p>
          </div>
        </div>
      </section>
      {/* How I got here section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/me-cs.jpg"
            alt="Adriana holding her graduation gown with Computer Science written in the background"
            width={400}
            height={600}
            priority
            className="rounded-lg object-cover w-full h-auto max-w-[320px] md:max-w-[450px] shadow-md"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left order-1 md:order-2">
          <h2 className="text-2xl md:text-4xl">How I got here</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              I'm a Salvadoran American passionate about being playful, curious,
              and bringing people together. Growing up, I had no clear picture
              of the future I was working toward. I just knew it would be
              something that would inspire and challenge me, while also bringing
              a sense of stability, fulfillment and joy.
            </p>
            <p>
              I first discovered computer science in high school through{" "}
              <a
                href="https://mites.mit.edu/discover-mites/mites-semester/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                MIT's MOSTEC program
              </a>
              . It was tough! I had never experienced such academic rigor. But
              by proactively seeking support, I persevered.
            </p>
            <p>
              For undergrad, I attended{" "}
              <a
                href="https://www.engineering.columbia.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                Columbia University's School of Engineering
              </a>
              , majoring in Computer Science with a focus on applications. As a
              first-generation college student, I struggled navigating higher
              education. With the support of friends, family, and my Columbia
              community, I gained the confidence to embrace difficult challenges
              and push forward.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond work section */}
      <section className="flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl">Beyond work</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Outside of work, I'm building an app to help people find clothing made
          from natural fibers instead of synthetic plastics. I'm also passionate
          about helping first-gen students navigate their CS journeys.
        </p>
      </section>

      {/* Let's connect section */}
      <section className="flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl">Let's connect</h2>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <a
            href="mailto:orantesadri1@gmail.com"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors text-sm md:text-base"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/adriana-orantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors text-sm md:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adr1-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
          <a
            href="https://docs.google.com/document/d/1YEoeWHF4jqr3WS938hHSKB3Rxo8hq9-t74FeBPZSOSw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors text-sm md:text-base"
          >
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}
