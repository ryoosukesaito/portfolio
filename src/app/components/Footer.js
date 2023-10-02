import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="my-7 flex flex-row justify-between max-w-md">
        <p className="flex flex-row justify-center items-center mx-5">
          <AiOutlineCopyrightCircle />
          2023 Ryosuke Saito
        </p>
      </div>
    </div>
  );
}

export default Footer;
