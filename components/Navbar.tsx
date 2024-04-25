"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import converseeLogo from "@/public/figma_wireframe/logo-metadata.png";
import MobileNav from "@/components/MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-2 ">
        <Image
          src={converseeLogo}
          width={50}
          height={50}
          alt="conversee_logo"
          className="max-sm:size-10"
        />
        <p className="text-[25px] font-semibold text-white max-sm:hidden">
          Conversee
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
