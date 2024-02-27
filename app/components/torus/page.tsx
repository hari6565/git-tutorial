"use client";
import React, { useState } from "react";
import SideBar from "./sideBar";
import FootBar from "./footer";
import TopNavBar from "./TopNavBar";
import SelectorSideBar from "../selectorSideBar/selectorSideBar";
const page = () => {
  const [state, setState] = useState("");
  return (
    <div className="h-sreen">
      <div className="h-[10%]">
        <TopNavBar />
      </div>
      <div className="h-[80%] flex ">
        <SideBar state={state} setState={setState} />
        <SelectorSideBar state={state} setState={setState} />
      </div>
      <div className="h-[10%]">
        <FootBar />
      </div>
    </div>
  );
};

export default page;
