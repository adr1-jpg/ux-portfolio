"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div
        className="grid grid-cols-2 gap-4 justify-items-center items-center"
        style={{ minHeight: "calc(100vh - 10rem)" }}
      >
        <div>
          <h1 className="mb-4">Hello, I'm Adriana!</h1>
          <p className="mb-6 text-xl">
            I am a <b style={{ color: 'var(--accent-warm-red)' }}>Design Engineer</b> working on the Azure Portal team at Microsoft.
          </p>
        </div>
        <div>
          <Image
            src="/headshot.png"
            alt="Profile Picture of the author"
            width={300}
            height={300}
            priority
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="mb-6">Check out my work ✨</h2>
        <div className="grid grid-cols-2 gap-8">
          <a
            href="https://github.com/adr1-jpg/fluentui-contrib/tree/6307a97b0424c3e5c069a5bf6d2dfc0b2f5d1fca/packages/azure-theme"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group block">
            <div className="relative w-full h-56 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <Image
                src="/azure-theme.png"
                alt="Azure Theme Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Azure-Theme</h3>
              <p className="text-gray-600 leading-relaxed">
                A custom theme package for Fluent UI, aligning components with
                Azure Portal's brand colors and design language.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                In 2022, Microsoft launched{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://fluent2.microsoft.design/", "_blank");
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium decoration-2 underline-offset-2 cursor-pointer"
                >
                  Fluent v9
                </span>
                , the latest version of their design system. Azure-Theme applies Azure's brand colors
                to Fluent components.
              </p>
              <div className="flex gap-4 pt-2 items-center">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.npmjs.com/package/@fluentui/azure-themes?activeTab=readme", "_blank");
                  }}
                  className="hover:opacity-70 transition-opacity flex items-center justify-center cursor-pointer"
                  aria-label="View on NPM"
                >
                  <Image
                    src="/npm.svg"
                    alt="NPM"
                    width={24}
                    height={24}
                  />
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/adr1-jpg/fluentui-contrib/tree/6307a97b0424c3e5c069a5bf6d2dfc0b2f5d1fca/packages/azure-theme", "_blank");
                  }}
                  className="hover:opacity-70 transition-opacity flex items-center justify-center cursor-pointer"
                  aria-label="View on GitHub"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://azure.microsoft.com/en-us/get-started/azure-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group block">
            <div className="relative w-full h-56 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
              <Image
                src="/msft-azure-logo.png"
                alt="Azure Portal Homepage Prototype"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 p-10"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Azure Portal Prototyping</h3>
              <p className="text-gray-600 leading-relaxed">
                Create high-fidelity, pixel-perfect interactive prototypes for Azure Portal features and redesigns.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Work includes prototyping the CLI experience, exploring new layout patterns, and validating design concepts for various portal features to support user research and stakeholder alignment.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
