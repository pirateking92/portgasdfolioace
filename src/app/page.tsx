import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-gradient-to-tr from-zinc-200 to-zinc-300 bg-cover bg-center">
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-slate-800 font-bold">Matt Doyle</h1>
          <p className="text-transparent bg-clip-text text-slate-700 text-[50px]">
            Software Developer
          </p>
          <p className="flex-col md:flex-row text-[22px] text-balance text-slate-700 font-semibold">
            Hey! I'm Matt Doyle, a Full Stack Developer from London
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/portfolio"
              className=" rounded-md group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Portfolio
            </Link>
            <Link
              href="/cv"
              className="rounded-md group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              CV
            </Link>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/portfolio"
          className="rounded-md group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Portfolio
        </Link>
        <Link
          href="/cv"
          className="rounded-md group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          CV
        </Link>
        <Link
          href="/contact"
          className="rounded-md group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          Contact
        </Link>
      </div>
    </main>
  );
}
