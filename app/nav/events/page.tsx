import React from "react";
import onlineEvent from "@/public/onlineEvent.jpg";
import Image from "next/image";

const eventsPage = () => {
  return (
    <div className="flex gap-9">
      <div className="w-[630px] rounded-xl overflow-hidden">
        <Image src={onlineEvent} className="object-cover" alt="img" />
      </div>

      <div className="w-[40%] mx-[4rem]">
        <h2 className=" font-bold my-6">Events</h2>

        <div className="my-3 flex flex-col gap-7">
          <p className="text-5xl">Cultural</p>
          <p className="text-5xl">Sports</p>
          <p className="text-5xl">Literary</p>
          <p className="text-5xl">Art</p>
          <p className="text-5xl">Dance</p>
          <p className="text-5xl">Informal</p>
        </div>
      </div>
    </div>
  );
};

export default eventsPage;
