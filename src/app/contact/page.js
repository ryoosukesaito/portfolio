"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

import CONSTANT_DATA from "../constants/constants";
import { BiPaperPlane } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Contact() {
  const [state, handleSubmit] = useForm("xwkjjbgz");

  return (
    <div className="my-10 lg:px-10">
      <div className="flex flex-col justify-center mx-5 relative z-30">
        <div className="grid grid-row-1 gap-5 mb-10">
          {/* Setting Grid at above line */}
          <div className="max-w-lg mb-10 relative flex  justify-center items-center">
            <div className="text-[40px] md:pl-10 md:text-[60px] lg:text-[70px] -mb-5 relative z-20">
              Contact
            </div>

            <div className="rounded-full bg-[#FFCA6E] blur h-20 w-20 min-[769px]:h-36 min-[769px]:w-36 absolute min-[769px]:-top-4 -top-2"></div>
          </div>

          {/* subtitle */}
          <div className="grid grid-rows-1 lg:grid-cols-2 lg:grid-flow-col gap-6">
            <div className="flex justify-center items-center flex-col ">
              <h3 className="text-[30px] md:pl-10 md:text-[40px] lg:text-[50px] text-text-color1">
                Contact Form
              </h3>
              <p className="max-w-sm px-10 md:leading-loose">
                If you ever want to grab a coffee/bubble tea (virtually) or just
                want a quick chat - you can find me on social media or you can
                send me a message here!
              </p>
              <div className="flex flex-row items-center justify-start md:justify-center mt-7 text-[#5F6367] hover:text-black">
                {CONSTANT_DATA.CONTACTS.map((item, idx) => (
                  <Link
                    href={item.link}
                    className="text-[40px] mx-3 text-[#5F6367] hover:text-black"
                    key={idx}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="justify-center items-center bg-gray-100  w-full h-auto rounded-xl shadow-lg shadow-gray-400 py-5">
              <div className="p-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label className="text-sm py-2">
                      Name<span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      id="name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col lg:col-span-1">
                      <label className="text-sm py-2">
                        Email <span className=" text-red-500">*</span>
                      </label>
                      <input
                        className="border-2 rounded-lg p-2 flex border-gray-300"
                        id="email"
                        name="email"
                        type="email"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="flex flex-col lg:grid-cols-1">
                      <label className="text-sm py-2">
                        Phone Number<span className=" text-red-500">*</span>
                      </label>
                      <input
                        className="border-2 rounded-lg p-2 flex border-gray-300"
                        id="phone"
                        name="phone"
                        type="phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm py-2">
                      Subject<span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      id="subject"
                      name="subject"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm py-2">
                      Message<span className=" text-red-500">*</span>
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      id="message"
                      name="message"
                      rows="7"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    className="flex flex-row w-full items-center justify-center mt-5 rounded px-8 py-2  bg-[#FFCA6E] font-poppins text-gray-600 hover:bg-[#fffbdc] hover:text-[#FFCA6E] disabled:bg-gray-300 disabled:text-gray-400"
                    type="submit"
                    disabled={state.succeeded}
                  >
                    <BiPaperPlane />
                    Submit
                  </button>

                  {state.succeeded ? (
                    <div className="font-poppins flex flex-row items-center">
                      <BsFillCheckCircleFill className="text-green-600 mr-2" />
                      Successfully Submitted!
                    </div>
                  ) : (
                    <></>
                  )}
                </form>
              </div>
            </div>
          </div>
          {/* except title */}
        </div>
      </div>

      {/* Circle design and Text on background */}
      <div className="absolute border border-[#A29F85]/20 rounded-full h-[40rem] w-[40rem] min-[912px]:h-[80rem] min-[912px]:w-[80rem] bg-transparent top-48  min-[912px]:-top-[18rem] -left-[380px] overflow-hidden z-10">
        <div className="uppercase absolute font-oswald text-[300px] min-[912px]:text-[500px] bottom-4 left-[24.5rem] text-[#A29F85]/10">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Contact;
