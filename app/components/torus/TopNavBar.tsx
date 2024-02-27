"use client";

import { Avatar, Button, Navbar, Dropdown } from "flowbite-react";
import Picture from "../../assests/logo.ico";
import Image from "next/image";

function TopNavBar() {
  return (
    <Navbar fluid rounded className="bg-slate-200">
      <Navbar.Brand>
        {/* <img src={Picture} alt="" className="mr-3 h-6 sm:h-9" /> */}
        <Image className="h-[35px] w-[35px] mt-1" alt="" src={Picture}></Image>
        <h5 className="font-bold">Torus</h5>

        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>  */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://github.com/msp397.png"
              rounded
            />
          }
        >
          <Dropdown.Header>My Account</Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>LogOut</Dropdown.Item>
        </Dropdown>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="flex justify-between ml-96">
        <Button className="bg-purple-700 text-white font-bold w-30 p-1 h-10 rounded">
          Select Application:
        </Button>

        <Button className="bg-purple-700  text-white font-bold w-30 rounded h-10 ">
          Toruscontrol
        </Button>
        <h2 className="my-3 font-bold">Calender</h2>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TopNavBar;
