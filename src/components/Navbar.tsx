"use client";
import { close, menu } from "../assets";
import { navLinks } from "@/constats";
import Image from "next/image";
import { useState } from "react";
import style from "@/app/styles";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-6 items-center">
      {/*DESKITOP*/}
      <div className="w-full flex justify-between items-center">
        {/*LOGO*/}
        <div>
          <h1 className={`${style.heading}text-primary italic`}>
            Go<span className="text-blue-400">tra</span>vel
          </h1>
        </div>

        {/*DESKITOP NAVEGATION*/}
        <div className="hidden items-center md:flex">
          <ul className="flex mr-5">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-paragraph font-normal cursor-pointer text-lg text-primary hover:text-blue-400 ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-5"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <Button />
        </div>
      </div>

      {/*MOBILE*/}
      <div className="flex justify-end items-center cursor-pointer md:hidden">
        {/*HUMBURGUER MENU*/}
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/*MOBILE NAVEGATION*/}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-20 right-0 mx-2 my-2 min-w-[100px] flex flex-col shadow-xl rounded-2xl`}
        >
          <ul className="flex flex-col justify-end items-center flex-1 my-4 mx-4">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-paragraph font-normal cursor-pointer text-lg text-primary hover:text-blue-400 ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-5"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
