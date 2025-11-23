import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-row w-screen justify-between items-center p-4 ">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={35} height={35} />
      </Link>
      <nav className="flex flex-row gap-4">
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
