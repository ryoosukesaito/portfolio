"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

const navigation = [
  { content: "Home", href: "/", current: true },
  { content: "Project", href: "/project", current: false },
  { content: "Contact", href: "/contact", current: false },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function menuHandler() {
    setMenu(!menu);
  }
  gsap.registerPlugin(TextPlugin);

  const handleHover = () => {
    gsap.to("#portfolioTxt", {
      display: "block",
      duration: 1,
      delay: 0.7,
      ease: "none",
      text: "Portfolio",
    });
  };

  const handleMouseLeave = () => {
    gsap.to("#portfolioTxt", {
      display: "none",
      text: "",
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a
          href="/"
          className="flex flex-row text-xl group"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          {`Ryosuke.`}
          <div className=" w-[125] h-[50] text-xl group-hover:text-[#FFCA6E] ease-in duration-300">
            log
          </div>
          {`(`}
          <div
            id="portfolioTxt"
            className="hidden w-[125] h-[50] text-xl text-[#A29F85] "
          ></div>

          {`);`}
        </a>
        <div>
          <ul className="hidden md:flex">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center mx-5 text-lg uppercase hover:border-b"
              >
                <Link href={item.href} className="" legacyBehavior>
                  {item.content}
                </Link>
              </li>
            ))}
            <a href="/assets/resume0304.pdf" target="_blank">
              <button className="uppercase px-2 py-1 rounded-lg bg-[#FFCA6E] border-2 border-[#ffca6e] text-white hover:bg-white hover:text-[#FFCA6E]">
                Resume
              </button>
            </a>
          </ul>

          <div className="md:hidden">
            <button onClick={menuHandler}>
              <Bars3Icon className="w-7 h-7 mr-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          menu ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            menu
              ? "fixed left-0 top-0 h-[50%] w-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-0 top-[-100%]"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>Menu</div>
            <button
              onClick={menuHandler}
              className="rounded-full mr-2 hover:shadow-lg "
            >
              <XMarkIcon className="w-5 h-5 m-2" />
            </button>
          </div>
          <div>
            <ul className="py-4 flex flex-col">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="justify-center flex mx-6 py-4  text-sm uppercase rounded hover:bg-gray-300 "
                  onClick={() => setMenu(!menu)}
                >
                  <Link href={item.href} legacyBehavior>
                    {item.content}
                  </Link>
                </li>
              ))}
              <a
                href="/assets/resume-ryosuke_saito.pdf"
                className="mx-6 my-2 "
                target="_blank"
              >
                <button className="py-2 w-full uppercase rounded-lg bg-[#FFCA6E] border-2 border-[#ffca6e] text-white hover:bg-white hover:text-[#FFCA6E]">
                  Resume
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
