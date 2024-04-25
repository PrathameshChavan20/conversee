import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  alt: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  alt,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-1 mt-7 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-lg cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="glassmorphism flex-center size-10 rounded-[10px]">
        <Image src={img} height={20} width={20} alt={alt} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
