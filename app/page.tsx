import Image from "next/image";
import styles from "./hero.module.css";
import heading from "@/public/heading.png";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`${styles.hero} h-[100vh] p-6`}>
        <div>
          <Image src={heading} alt="heading" />
        </div>
        <ul className="flex justify-between my-9 flex-col md:flex-row gap-y-2 md:gap-0">
          <Link href={"/nav/registration"}>
            <li className="text-[#FFE8B2] text-md">Registration</li>
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
      <div className="bg-[#26252D] p-6">
        <h2 className="text-4xl my-6">Euphoria</h2>
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="md:w-[50%]">
            <p className="text-lg my-5 opacity-90">
              Welcome to EUPHORIA 2024, where we celebrate the spirit of
              resurgence and renewal! After a four-year hiatus, our
              inter-college fest returns with a theme inspired by the legendary
              phoenix.{" "}
            </p>
            <p className="text-lg my-5 opacity-90">
              Just like this mythical bird rises from its own ashes, our theme
              symbolizes resilience, transformation, and the eternal flame of
              creativity. Join us as we ignite the embers of imagination and
              embark on a journey of rebirth, innovation, and endless
              possibilities.{" "}
            </p>
            <p className="text-lg my-5 opacity-90">
              Let&apos;s soar high together at EUPHORIA, where the flame of
              inspiration burns eternal.
            </p>
          </div>
          <div>
            <Image className="w-[300px]" src={logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className={`${styles.hero} p-4 md:p-7`}>
        <p className="text-4xl my-7">Event Schedule</p>
        <div className="bg-[#ffe8b2] rounded-md w-full h-[400px] my-6"></div>
        <p className="text-4xl my-7 text-[#FFE8B2]">SPONSORS</p>
        <div className="bg-[#ffe8b2] rounded-md w-full h-[400px] my-6"></div>
      </div>

      <div className="bg-[#26252D] p-4 md:p-7">
        <h2 className="text-4xl">Contact</h2>
        <div className="bg-[#19181b] p-3 my-6 rounded-xl">
          <Image src={logo} alt="logo" className="size-24 md:size-56" />
        </div>
      </div>
    </>
  );
}
