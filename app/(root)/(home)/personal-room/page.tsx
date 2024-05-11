"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { use } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-start gap-2 xl:flex-grow">
    <div className="flex flex-row">
      <p className="text-base font-medium text-sky-1 lg:text-lg xl:min-w-32 mr-2">
        {title} :
      </p>
      <p className="truncate text-sm max-sm:max-w-[320px] lg:text-lg">
        {description}
      </p>
    </div>
  </div>
);

const PersonalRoom = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const meetingId = user?.id;
  const meetinglink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const client = useStreamVideoClient();
  const { call } = useGetCallById(meetingId!);
  const router = useRouter();
  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall?.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
  };
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      <div className="flex flex-col gap-8 w-full xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetinglink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetinglink);
            toast({
              title: "Invitaion copied",
            });
          }}
        >
          Copy Invitaion
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
