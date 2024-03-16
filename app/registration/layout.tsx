import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

// interface
const layout = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-3">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="size-16" />
        </Link>

        <div>
          <ul className="flex gap-10 mr-4">
            <li className="bg-[#FF9C3F] text-black rounded-lg px-2">
              Registration
            </li>
            <li>Online Events</li>
            <li>Events</li>
            <li>Accommodation</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default layout;
