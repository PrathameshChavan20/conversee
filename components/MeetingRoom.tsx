"use client";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type CallLayoutType = "grid" | "speacker-left" | "speacker-right";
const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("speacker-left");
  const [showparticipants, setShowparticipants] = useState(false);
  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speacker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-fill items-center max-w-[1000px]">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showparticipants,
          })}
        >
          <CallParticipantsList
            onClose={() => {
              setShowparticipants(false);
            }}
          />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 ">
        <CallControls />
      </div>
    </section>
  );
};

export default MeetingRoom;
