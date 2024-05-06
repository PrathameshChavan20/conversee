import React from "react";
import notFound from "@/public/svg/notFound.svg";
import Link from "next/link";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-white justify-center bg-white">
      <Image src={notFound} width={350} height={350} alt="not-found"/>
      <p className="font-semibold mb-4 text-lg">There&apos;s nothing here...</p>
      <Link href="/" className="flex gap-2">
        <Image
          width={20}
          height={20}
          src="https://img.icons8.com/3d-fluency/94/left.png"
         alt="left"
        />
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
