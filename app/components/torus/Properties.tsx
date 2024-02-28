"use client";

import { Button, Accordion, ToggleSwitch, TextInput } from "flowbite-react";
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
import { useState } from "react";
function Component() {
  const [switch2, setSwitch2] = useState(true);
  const [switch1, setSwitch1] = useState(false);
  return (
    <div className=" border-[2px]">
      <div className=" bg-gray-800 w-[350px] h-[87vh] overflow-x-auto ">
        {/* <div className='left-0'> */}
        {/* <Card className="w-[350px] h-[623px] bg-slate-300"> */}
        {/* <h5 className="text-xl font-bold tracking-tight text-gray-200 dark:text-white">
      Page Parameters <HiOutlineExclamationCircle style={{ marginLeft: '5px' }}/>
      </h5> */}

        <Button className="flex justify-between text-white bg-gray-800 w-[350px]">
          <div className=" flex justify-between gap-2">
            <h4>Page Parameters </h4>
            <HiOutlineExclamationCircle color="white" />
          </div>
          <div className=" ml-40">
            <HiPlus color="white" className="w-4 h-4" />
          </div>
        </Button>
        <Accordion className="border-none rounded-none">
          <Accordion.Panel className="border-none rounded-none">
            <Accordion.Title className="flex items-center border-none rounded-none text-slate-500 hover:text-gray-900 ">
              Route Settings
              {/* <HiOutlineChevronRight className="mx-24" /> */}
            </Accordion.Title>
            <Accordion.Content className=" bg-slate-400">
              <TextInput type="text" placeholder="homepage"></TextInput>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <h3 className="flex items-center text-white font-bold ml-4">
          <HiOutlineNewspaper className="mr-2" />
          Scaffold
          <HiOutlineCash className="ml-4 mr-5" />
          <HiOutlineTrash className="ml-24" />
        </h3>
        <h4 className="text-white flex items-center my-3 ml-4 ">
          HomePage <HiOutlinePencil className="ml-2" />
        </h4>
        <div className="flex items-center my-4">
          <HiChatAlt className="mr-3 w-96 text-white" />
          <HiClipboardCopy className="mr-3 w-96 text-white" />
          <HiChevronRight className="mr-3 w-96 text-white" />
          <HiClipboardList className="mr-3 w-96 text-white" />
          <HiClipboardCopy />
        </div>
        <Accordion className="border-none rounded-none">
          <Accordion.Panel>
            <Accordion.Title className="flex items-center font-bold text-slate-500  hover:text-gray-900 ">
              Visibility
            </Accordion.Title>
            {/* <HiOutlineExclamationCircle className="ml-2"></HiOutlineExclamationCircle> */}
            {/* <HiChevronDown className="ml-24" /> */}
            <Accordion.Content className=" bg-slate-400">
              <h6 className="flex items-center text-white">
                Opacity
                <HiOutlineExclamationCircle className="ml-2" />
                <HiOutlineViewGridAdd />
              </h6>
              <div>
                <Progress progress={45} w-7 />
                {/* <input type='number' placeholder='1' className="ml-2 p-2 border border-gray-300" /> */}
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="border-none rounded-none">
            <Accordion.Title className="flex items-center font-bold text-slate-500 border-none rounded-none  hover:text-gray-900">
              Page(Scaffold)Properties
            </Accordion.Title>
            {/* <HiOutlineExclamationCircle className="ml-2" /> */}

            <Accordion.Content className=" bg-slate-400">
              <div className="flex w-[350px]">
                <div className="flex items-center text-sm text-white">
                  Background Color
                </div>
                <div className="flex items-center text-sm text-white">
                  <HiOutlineMenuAlt1 className="ml-2" />
                </div>
              </div>
              <div className="flex items-center">
                <HiChatBubbleOvalLeft className="text-white mr-2" />
                <input
                  type="text"
                  placeholder="Primary background"
                  className="bg-gray-300 text-sm text-white rounded-lg font-bold w-48 p-2 border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-white">
                  SafeArea
                  <ToggleSwitch checked={switch2} onChange={setSwitch2} />
                </div>
                <div className="flex justify-between text-white">
                  Hide Keyboard on Tap
                  <ToggleSwitch checked={switch2} onChange={setSwitch2} />
                </div>
                <div className="flex justify-between text-white">
                  Disable Androis BackButton
                  <ToggleSwitch checked={switch1} onChange={setSwitch1} />
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="border-none rounded-none">
            <Accordion.Title className="flex  items-center my-2 text-slate-500 font-bold text-sm border-none rounded-none hover:text-gray-900">
              NavBar Items Properties
            </Accordion.Title>
            {/* <HiOutlineExclamationCircle className="ml-2" />
              <HiChevronDown className="ml-24" /> */}
            <Accordion.Content className=" bg-slate-400">
              <p className="flex justify-between text-sm text-white">
                Show on NavBar
                <ToggleSwitch checked={switch1} onChange={setSwitch1} />
              </p>
              <p className="flex justify-between text-sm text-white my-3">
                Always Show Nav Bar on Page
                <ToggleSwitch checked={switch1} onChange={setSwitch1} />
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
export default Component;
