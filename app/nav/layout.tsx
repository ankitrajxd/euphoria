import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

// interface
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="flex justify-between items-center p-3">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="size-16" />
        </Link>

        <div>
          <ul className="flex gap-10 mr-4">
            <Link href={"/nav/registration"}>
              <li className="bg-[#FF9C3F] text-black rounded-lg px-2 text-md">
                Registration
              </li>
            </Link>
            <Link href={"/nav/events"}>
              <li className="text-[#FFE8B2] text-md">Events</li>
            </Link>
            <Link href={"/nav/accomodation"}>
              <li className="text-[#FFE8B2] text-md">Accommodation</li>
            </Link>
            <Link href={"/nav/gallery"}>
              <li className="text-[#FFE8B2] text-md">Gallery</li>
            </Link>
            <Link href={"/nav/contact"}>
              <li className="text-[#FFE8B2] text-md">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* rendering children here */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default layout;
