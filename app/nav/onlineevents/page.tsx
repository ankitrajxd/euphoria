import React from "react";
import onlineEvent from "@/public/onlineEvent.jpg";
import Image from "next/image";

const onlineEventpage = () => {
  return (
    <div className="flex gap-9">
      <div className="w-[40%] mx-[4rem]">
        <h2 className=" font-bold my-6">Online Events</h2>

        <div className="my-3 flex flex-col gap-7">
          <p className="text-5xl">Dance</p>
          <p className="text-5xl">Online Gaming</p>
          <p className="text-5xl">Talent Show</p>
          <p className="text-5xl">Digital Art</p>
          <p className="text-5xl">Quiz</p>
          <p className="text-5xl">Hackathon</p>
        </div>
      </div>
      <div className="w-[630px] rounded-xl overflow-hidden">
        <Image src={onlineEvent} className="object-cover" alt="img" />
      </div>
    </div>
  );
};

export default onlineEventpage;
