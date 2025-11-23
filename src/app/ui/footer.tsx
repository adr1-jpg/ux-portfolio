import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex justify-between items-center w-screen p-6 mt-8">
            <p className="text-sm text-gray-500">
                Made by Adriana Orantes 🐝
            </p>
            <div className="flex gap-6 items-center">
                <a 
                    href="https://github.com/adr1-jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="GitHub"
                >
                    <Image src="/github-blue.png" alt="GitHub" width={20} height={20} />
                    <span>GitHub</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/adriana-orantes/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer> 
    )
}