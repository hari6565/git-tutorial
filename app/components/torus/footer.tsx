"use client";

import React from "react";
import { Footer } from "flowbite-react";
const FootBar = () => {
  return (
    <Footer className="fixed-bottom bg-gray-800 p-1 rounded-t-sm" container>
      <Footer.Copyright
        className=" text-white w-full text-center"
        href="#"
        by="Torus Innovations Pvt Ltd. All rights reserved."
        year={2024}
      />
    </Footer>
  );
};

export default FootBar;
