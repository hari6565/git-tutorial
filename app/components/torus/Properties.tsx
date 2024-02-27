"use client";

import { Button, Card } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import { HiChatAlt } from "react-icons/hi";
// import { HiClipboardCopy } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiClipboardCopy } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Progress } from "flowbite-react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { WiWindDeg } from "react-icons/wi";
function Component() {
  return (
    <div className=" bg-slate-300">
      {/* <div className='left-0'> */}
      <Card className="w-[350px] h-[623px] bg-slate-600">
        {/* <h5 className="text-xl font-bold tracking-tight text-gray-200 dark:text-white">
      Page Parameters <HiOutlineExclamationCircle style={{ marginLeft: '5px' }}/>
      </h5> */}

        <h1 className="flex items-center text-black ">
          Page Parameters <HiOutlineExclamationCircle className="ml-2 w-96" />
          <HiPlus className="mx-24 w-96" />
        </h1>
        <h2 className="flex items-center text-black">
          Route Settings <HiOutlineExclamationCircle className="ml-2" />
          <HiOutlineChevronRight className="mx-24" />
        </h2>
        <h3 className="flex items-center text-white font-bold">
          <HiOutlineNewspaper className="mr-2" />
          Scaffold
          <HiOutlineCash className="ml-4 mr-5" />
          <HiOutlineTrash className="ml-24" />
        </h3>
        <h4 className="text-white flex items-center ">
          HomePage <HiOutlinePencil className="ml-2" />
        </h4>
        <div className="flex items-center">
          <HiChatAlt className="mr-3 w-96 text-white" />
          <HiClipboardCopy className="mr-3 w-96 text-white" />
          <HiChevronRight className="mr-3 w-96 text-white" />
          <HiClipboardList className="mr-3 w-96 text-white" />
          <HiClipboardCopy />
        </div>
        <h5 className="flex items-center text-white">
          Visibility
          <HiOutlineExclamationCircle className="ml-2"></HiOutlineExclamationCircle>
          <HiChevronDown className="ml-24" />
        </h5>
        <h6 className="flex items-center text-white">
          Opacity
          <HiOutlineExclamationCircle className="ml-2" />
          <HiOutlineViewGridAdd />
        </h6>
        <div>
          <Progress progress={45} w-7 />
          {/* <input type='number' placeholder='1' className="ml-2 p-2 border border-gray-300" /> */}
        </div>
        <div>
          <h6 className="flex items-center font-bold text-white">
            Page(Scaffold)Properties
            <HiOutlineExclamationCircle className="ml-2" />
            <HiChevronDown className="ml-24" />
          </h6>
          <p className="flex items-center text-sm text-white">
            Background Color
            <HiOutlineMenuAlt1 className="ml-2" />
          </p>
          <div className="flex items-center">
            <HiChatBubbleOvalLeft className="text-white mr-2" />
            <input
              type="text"
              placeholder="Primary background"
              className="bg-gray-300 text-sm text-white rounded-lg font-bold w-48 p-2 border border-gray-300"
            />
          </div>
          <div>
            <p className="flex items-center text-sm text-white">
              SafeArea{" "}
              <HiOutlineExclamationCircle style={{ marginLeft: "5px" }} />
              <WiMoonAltWaxingCrescent2 className="ml-36" />
            </p>
            <p className="flex items-center txt-sm text-white">
              Hide Keyboard on Tap{" "}
              <HiOutlineExclamationCircle style={{ marginLeft: "5px" }} />
              <WiMoonAltWaxingCrescent2 className="ml-16" />
            </p>
            <p className="flex items-center text-sm text-white">
              Disable Androis BackButton
              <HiOutlineExclamationCircle style={{ marginLeft: "5px" }} />
            </p>
          </div>
          <div>
            <p className="flex  items-center my-2 text-white font-bold text-sm">
              NavBar Items Properties
              <HiOutlineExclamationCircle className="ml-2" />
              <HiChevronDown className="ml-24" />
            </p>
            <div></div>

            <p className="flex items-center text-sm text-white">
              Show on NavBar <WiWindDeg className="ml-44 " />
            </p>
            <p className="flex items-center text-sm text-white">
              Always Show Nav Bar on Page
              <HiOutlineExclamationCircle style={{ marginLeft: "5px" }} />
              <WiWindDeg className="ml-24" />
            </p>
          </div>
        </div>

        {/*        
      <Button>
       
      </Button> */}
      </Card>
    </div>
  );
}
export default Component;
