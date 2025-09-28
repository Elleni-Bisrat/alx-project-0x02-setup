import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-200">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
