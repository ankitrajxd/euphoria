import React from "react";
import registrationImg from "@/public/registrationPage.jpg";
import Image from "next/image";

const RegistrationPage = () => {
  return (
    <div className="flex gap-9">
      <div className="w-[630px] rounded-xl overflow-hidden">
        <Image src={registrationImg} className="object-cover" alt="img" />
      </div>

      <div className="w-[40%] mx-[4rem]">
        <h2 className="text-4xl font-bold my-6">Registration</h2>

        <div className="my-3 flex gap-3">
          <p>1.</p>
          <p>
            Basic registration is compulsory to attend the fest. No participant
            will be allowed to enter the campus without doing so, and each
            attendee needs to register individually.
          </p>
        </div>
        <div className="my-3 flex gap-3">
          <p>2. </p>
          <p>
            In addition to basic registration, attendees must register for the
            respective events they wish to participate in.
          </p>
        </div>
        <div className="my-3 flex gap-3">
          <p>3. </p>
          <p>Night pass is required to attend star nights.</p>
        </div>
        <div className="my-3 flex gap-3">
          <p>4.</p>
          <p>
            The attendees must carry their delegate cards at all times and
            should be able to produce them whenever asked.
          </p>
        </div>
        <div className="my-3 flex gap-3">
          <p>5. </p>
          <p>
            The attendees must bring their Aadhaar Card and College ID to the
            fest for registration.
          </p>
        </div>
        <div className="my-3 flex gap-3">
          <p> 6.</p>
          <p>
            The amount once deposited for any registration is NON-REFUNDABLE and
            shall only be returned if the event is cancelled by organizers.​
          </p>
        </div>

        <button className="p-5 bg-[#FF9C3F] text-black rounded-full text-2xl px-7 py-3 my-5">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
