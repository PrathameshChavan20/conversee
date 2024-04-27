"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("useCall must be used within StreamCall Component");
  }
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    }
    call?.camera.enable();
    call?.microphone.enable();
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-xl font-semibold">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex flex-col items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => {
              setIsMicCamToggledOn(e.target.checked);
            }}
          />
          <span className="mr-5">Join with mic and Camera off</span> 
          <DeviceSettings/>
        </label>
        <Button
          className="rounded-lg bg-green-600 hover:bg-green-700 px-4 py-2.5"
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
        >
          Join meeting
        </Button>
      </div>     
    </div>
  );
};

export default MeetingSetup;
