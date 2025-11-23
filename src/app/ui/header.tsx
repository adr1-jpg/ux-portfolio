import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4 md:p-6">
      <Link href="/" className="flex-shrink-0">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={60} 
          height={60} 
          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" 
        />
      </Link>
      <nav className="flex flex-row gap-4 md:gap-6 text-sm md:text-base">
        <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
      </nav>
    </header>
  );
}
