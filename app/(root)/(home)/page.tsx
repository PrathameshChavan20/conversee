"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Page = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = (new Intl.DateTimeFormat('en-US',{dateStyle:'full'})).format(now);
  return (
    <section className="flex size-full flex-col gap10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-cover bg-hero">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11 ">
          <h2 className="glassmorphism max-w-[270px] py-2 rounded-lg text-center text-base ">
            Upcoming meeting at : 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold lg:text-5xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
};

export default Page;
