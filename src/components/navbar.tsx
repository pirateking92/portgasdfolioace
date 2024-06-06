import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[0] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src="/straw-hat-logo_bw.webp"
          alt="strawhat"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <h1 className="text-white font-semibold">Look at me! ^_^</h1>
    </div>
  );
};

export default Navbar;
