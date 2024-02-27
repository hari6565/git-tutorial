"use client";
import React, { useState } from "react";
import SideBar from "./sideBar";
import FootBar from "./footer";
import TopNavBar from "./TopNavBar";
import SelectorSideBar from "../selectorSideBar/selectorSideBar";
import Properties from "../torus/properties";
const page = () => {
  const [state, setState] = useState("");
  return (
    <div className="h-full">
      <div className="h-[10%]">
        <TopNavBar />
      </div>
      <div className="flex justify-between">
        <div className="h-[80%] flex ">
          <SideBar state={state} setState={setState} />
          <SelectorSideBar state={state} setState={setState} />
        </div>
        <div className="">
          <Properties />
        </div>
      </div>
      <div className="h-[10%]">
        <FootBar />
      </div>
    </div>
  );
};

export default page;
