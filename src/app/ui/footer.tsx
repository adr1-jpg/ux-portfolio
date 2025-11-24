import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center p-4 md:p-6 mt-32 md:mt-40 pt-16 gap-4 md:gap-0 ">
            <p className="text-xs md:text-sm text-gray-500">
                Made by Adriana Orantes 🐝
            </p>
            <div className="flex gap-4 md:gap-6 items-center">
                <a 
                    href="https://github.com/adr1-jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="GitHub"
                >
                    <Image src="/github-blue.png" alt="GitHub" width={18} height={18} className="md:w-5 md:h-5" />
                    <span>GitHub</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/adriana-orantes/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} className="md:w-5 md:h-5" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer> 
    )
}