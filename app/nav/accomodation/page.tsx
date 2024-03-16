import React from "react";
import Image from "next/image";
import accomodationimg from "@/public/accomodationimg.jpg";

const accomodationPage = () => {
  return (
    <div className="flex gap-9">
      <div className="w-[40%] mx-[4rem]">
        <h2 className=" my-6 text-6xl">Accomodation</h2>

        <div className="my-3 flex flex-col gap-7">
          <p className="">
            Accommodation will be provided both online and offline with limited
            slots.
          </p>
          <p className="">
            For Online booking, the phone numbers of coordinators will be
            provided here. After booking, you will be provided with a soft copy
            of the receipt which you are supposed to produce when asked at the
            accommodation desk in the hostel itself. After verifying your
            documents (Delegate card, College ID and Aadhar card) you will be
            given a hard copy of the receipt. This receipt is required for
            refunding the security deposit while leaving
          </p>
          <p className="">
            ​Offline accommodation will be provided at the registration desk
            near the entry gate upon your arrival at the fest (only if the slots
            are available). As limited slots are available, accommodation will
            be provided on a first come first serve basis. Therefore, we
            recommend you book your accommodation well in advance.
          </p>
        </div>
      </div>
      <div className="w-[630px] rounded-xl overflow-hidden">
        <Image src={accomodationimg} className="object-cover" alt="img" />
      </div>
    </div>
  );
};

export default accomodationPage;
