"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "@/components/Button";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const router = useRouter();

  const handleLogout = {
    //Handle logout later
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="hidden md:flex gap-x-2 items-center">
        <button
          className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          onClick={() => router.back()}
        >
          <RxCaretLeft size={35} className="text-white" />
        </button>
        <button
          className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          onClick={() => router.forward}
        >
          <RxCaretRight size={35} className="text-white" />
        </button>
      </div>
      <div className="flex md:hidden gap-x-2 items-center">
        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
          <HiHome className="text-black" size={20}/>
        </button>
        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
          <BiSearch className="text-black" size={20}/>
        </button>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <>
          <div>
            <Button />
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
