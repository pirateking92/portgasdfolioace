import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images5.alphacoders.com/132/1325030.jpeg)",
        }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-extrabold">Matt Doyle</h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-800 text-[50px]">
            Software Developer
          </p>
          <p className="flex-col md:flex-row hidden md:block text-balance text-white font-semibold">
            Welcome! Please find stuff yadadada
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/projects"
              className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Projects
            </Link>
            <Link
              href="/cv"
              className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              CV
            </Link>
            <Link
              href="/github"
              className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              GitHub
            </Link>
            <Link
              href="/linkedin"
              className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/projects"
          className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Projects
        </Link>
        <Link
          href="/cv"
          className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          CV
        </Link>
        <Link
          href="/github"
          className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          GitHub
        </Link>
        <Link
          href="/linkedin"
          className="rounded-full group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          LinkedIn
        </Link>
      </div>
    </main>
  );
}
