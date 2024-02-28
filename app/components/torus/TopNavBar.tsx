// "use client";

// import { Avatar, Button, Navbar, Dropdown } from "flowbite-react";
// import Picture from "../../assests/logo.ico";
// import Image from "next/image";

// function TopNavBar() {
//   return (
//     <Navbar fluid rounded className="bg-slate-200">
//       <Navbar.Brand>
//         {/* <img src={Picture} alt="" className="mr-3 h-6 sm:h-9" /> */}
//         <Image className="h-[35px] w-[35px] mt-1" alt="" src={Picture}></Image>
//         <h5 className="font-bold">Torus</h5>

//         {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>  */}
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar
//               alt="User settings"
//               img="https://github.com/msp397.png"
//               rounded
//             />
//           }
//         >
//           <Dropdown.Header>My Account</Dropdown.Header>
//           <Dropdown.Item>Profile</Dropdown.Item>
//           <Dropdown.Item>LogOut</Dropdown.Item>
//         </Dropdown>

//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse className="flex justify-between ml-96">
//         <Button className="bg-purple-700 text-white font-bold w-30 p-1 h-10 rounded">
//           Select Application:
//         </Button>

//         <Button className="bg-purple-700  text-white font-bold w-30 rounded h-10 ">
//           Toruscontrol
//         </Button>
//         <h2 className="my-3 font-bold">Calender</h2>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
// export default TopNavBar;
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
    <div className=" bg-gray-800 ">
      <Navbar className=" bg-gray-800 h-12">
        <Navbar.Brand>
          <div className="flex justify-start">
            <Image
              src={logo}
              className=" -mt-1 h-10 w-10 ml-0"
              alt="Flowbite React Logo"
            />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white -mt-1">
            Torus
          </span>
        </Navbar.Brand>
        <div className="flex items-center">
          <Navbar.Collapse className=" gap-0">
            <Tooltip content=" Help Menu" placement="bottom">
              <Navbar.Link href="#" active>
                <GoQuestion className=" w-7 h-7 -mt-2 " color="white" />
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
              <IoPhonePortraitSharp className=" w-7 h-7 -mt-2 " color="gray" />
            </Navbar.Link>
            <Navbar.Link href="#">
              <IoMdTabletPortrait className=" w-7 h-7 -mt-2 " color="gray" />
            </Navbar.Link>
            <Navbar.Link href="#">
              <IoIosDesktop className=" w-7 h-7 -mt-2 " color="white" />
            </Navbar.Link>
            <Navbar.Link className="flex gap-1 text-white" href="#">
              Size (Px) 1440*900{" "}
              <HiOutlineExclamationCircle className=" w-5 h-5 -mt-0 " />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex justify-between gap-5">
          <div className=" my-3 text-white ">
            <Dropdown
              label="v1"
              style={{ width: "6px", height: "6px" }}
              color="black"
            ></Dropdown>
          </div>
          <Navbar.Link className="flex gap-4 " href="#">
            <FcOk className=" w-5 h-5 -mt-5 " />
            <GrBug className=" w-5 h-5 -mt-5 " color="white" />
          </Navbar.Link>
          <Navbar.Link href="#">
            <MdPreview className=" w-8 h-8 -mt-6 " color="orange" />
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
