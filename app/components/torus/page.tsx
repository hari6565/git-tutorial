import React from "react";
import SideBar from "./sideBar";
import FootBar from "./footer";
import TopNavBar from "./TopNavBar";
const page = () => {
  return (
    <div>
      <TopNavBar />
      <SideBar />
      <FootBar />
    </div>
  );
};

export default page;
