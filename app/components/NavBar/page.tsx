"use client";

import { Navbar, Tooltip, Dropdown } from "flowbite-react";
import React from "react";
import logo from "../../assests/logo.ico";
import Image from "next/image";
import { GoQuestion } from "react-icons/go";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMdTabletPortrait } from "react-icons/io";
import { IoIosDesktop } from "react-icons/io";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { GrBug } from "react-icons/gr";
import { FcOk } from "react-icons/fc";
import { MdPreview } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className=" ">
      <Navbar className="  h-12">
        <Navbar.Brand>
          <div className="flex justify-start">
            <Image
              src={logo}
              className=" -mt-1 h-10 w-10 ml-0"
              alt="Flowbite React Logo"
            />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white -mt-1">
            Torus
          </span>
        </Navbar.Brand>
        <div className="flex justify-center">
          <Navbar.Collapse className=" gap-0">
            <Tooltip content=" Help Menu" placement="bottom">
              <Navbar.Link href="#" active>
                <GoQuestion className=" w-7 h-7 -mt-2 " />
              </Navbar.Link>
            </Tooltip>
            <Tooltip content="Keyboard Shortcuts" placement="bottom">
              <Navbar.Link className="" href="#">
                <MdKeyboardCommandKey
                  className=" w-7 h-7 -mt-2  "
                  color="white"
                />
              </Navbar.Link>
            </Tooltip>
            <Tooltip content="Command Palette" placement="bottom">
              <Navbar.Link href="#">
                <IoMdSearch className=" w-7 h-7 -mt-2 " color="white" />
              </Navbar.Link>
            </Tooltip>
            <Navbar.Link className="" href="#">
              <IoPhonePortraitSharp className=" w-7 h-7 -mt-2 " />
            </Navbar.Link>
            <Navbar.Link href="#">
              <IoMdTabletPortrait className=" w-7 h-7 -mt-2 " />
            </Navbar.Link>
            <Navbar.Link href="#">
              <IoIosDesktop className=" w-7 h-7 -mt-2 " color="white" />
            </Navbar.Link>
            <Navbar.Link className="flex gap-1" href="#">
              Size (Px) 1440*900{" "}
              <HiOutlineExclamationCircle className=" w-5 h-5 -mt-0 " />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex justify-between gap-5">
          <div className=" my-2 ">
            <Dropdown
              label="v1"
              style={{ width: "5px", height: "5px" }}
              color="light"
            ></Dropdown>
          </div>
          <Navbar.Link className="flex gap-4 " href="#">
            <FcOk className=" w-5 h-5 -mt-5 " />
            <GrBug className=" w-5 h-5 -mt-5 " color="white" />
          </Navbar.Link>
          <Navbar.Link href="#">
            <MdPreview className=" w-7 h-7 -mt-5 " color="orange" />
          </Navbar.Link>
          <div className="  -mt-1">
            <Dropdown
              label={
                <AiFillThunderbolt className=" w-5 h-5 -mt-1 " color="white" />
              }
              style={{ width: "55px", height: "40px" }}
              color="blue"
            ></Dropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
