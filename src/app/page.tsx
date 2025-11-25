"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-4 md:px-0">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-items-center items-center"
        style={{ minHeight: "calc(100vh - 10rem)" }}
      >
        <div className="text-center md:text-left max-w-md md:max-w-none">
          <h1 className="mb-4 text-4xl md:text-5xl">Hello, I'm Adriana!</h1>
          <p className="mb-6 text-lg md:text-xl">
            I am a{" "}
            <b style={{ color: "var(--accent-warm-red)" }}>Design Engineer</b>{" "}
            working on the Azure Portal team at Microsoft.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Image
            src="/headshot.png"
            alt="Profile Picture of Adriana"
            width={300}
            height={330}
            priority
            className="rounded-md w-[250px] h-auto md:w-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-8 md:mt-0">
        <h2 className="mb-6 text-center md:text-left">Check out my work ✨</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-12">
          <div className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative w-full h-56 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <Image
                src="/azure-theme.png"
                alt="Azure Theme Project"
                fill
                loading="eager"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Azure-Theme
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A custom npm package that applies Azure Portal's brand system to
                Fluent UI, used by teams across Azure Portal to accelerate
                development and ensure visual consistency.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                A custom npm package I co-created that applies Azure Portal's
                brand system to Microsoft's design system,{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://fluent2.microsoft.design/", "_blank");
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium decoration-2 underline-offset-2 cursor-pointer"
                >
                  Fluent v9
                </span>
                . Used by 10+ teams across Azure Portal to maintain visual
                consistency and accelerate development.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">Built with: TypeScript, React, Fluent UI v9</p>
              <div className="flex gap-3 pt-2 items-center">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.npmjs.com/package/@fluentui-contrib/azure-theme?activeTab=readme",
                      "_blank"
                    );
                  }}
                  className="px-3 py-1.5 text-xs border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors cursor-pointer font-medium"
                >
                  View on NPM
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://github.com/adr1-jpg/fluentui-contrib/tree/6307a97b0424c3e5c069a5bf6d2dfc0b2f5d1fca/packages/azure-theme",
                      "_blank"
                    );
                  }}
                  className="px-3 py-1.5 text-xs border border-gray-300 rounded-md hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors cursor-pointer font-medium"
                >
                  View on GitHub
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative w-full h-56 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
              <Image
                src="/msft-azure-logo.png"
                alt="Azure Portal Homepage Prototype"
                fill
                loading="eager"
                className="object-cover group-hover:scale-105 transition-transform duration-300 p-10"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Azure Portal Design Engineering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engineer interactive React prototypes for Azure Portal features,
                collaborating with researchers to validate designs and inform
                product direction for millions of users.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Work includes prototyping the CLI experience, exploring new
                layout patterns, and validating design concepts before
                engineering investment.
              </p>
               <p className="text-sm text-gray-500 leading-relaxed">Built with: TypeScript, React, Next.js, HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
