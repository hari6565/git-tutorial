"use client";

import { Button, Accordion, ToggleSwitch } from "flowbite-react";
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
    <div className=" bg-slate-200 w-[350px] h-[88vh] overflow-x-auto">
      {/* <div className='left-0'> */}
      {/* <Card className="w-[350px] h-[623px] bg-slate-300"> */}
      {/* <h5 className="text-xl font-bold tracking-tight text-gray-200 dark:text-white">
      Page Parameters <HiOutlineExclamationCircle style={{ marginLeft: '5px' }}/>
      </h5> */}

      <Button className="flex justify-between text-gray-600 bg-slate-200 w-[350px]">
        <div className=" flex justify-between gap-2">
          <h4>Page Parameters </h4>
          <HiOutlineExclamationCircle />
        </div>
        <div className=" ml-40">
          <HiPlus color="black" className="w-4 h-4" />
        </div>
      </Button>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="flex items-center text-gray-600">
            Route Settings
            {/* <HiOutlineChevronRight className="mx-24" /> */}
            <Accordion.Content>
              <input type="text" placeholder="homepage"></input>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
      </Accordion>
      <h3 className="flex items-center text-gray-600 font-bold ml-4">
        <HiOutlineNewspaper className="mr-2" />
        Scaffold
        <HiOutlineCash className="ml-4 mr-5" />
        <HiOutlineTrash className="ml-24" />
      </h3>
      <h4 className="text-gray-600 flex items-center my-3 ml-4 ">
        HomePage <HiOutlinePencil className="ml-2" />
      </h4>
      <div className="flex items-center my-4">
        <HiChatAlt className="mr-3 w-96 text-gray-600" />
        <HiClipboardCopy className="mr-3 w-96 text-gray-600" />
        <HiChevronRight className="mr-3 w-96 text-gray-600" />
        <HiClipboardList className="mr-3 w-96 text-gray-600" />
        <HiClipboardCopy />
      </div>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="flex items-center font-bold text-gray-600 ">
            Visibility
          </Accordion.Title>
          {/* <HiOutlineExclamationCircle className="ml-2"></HiOutlineExclamationCircle> */}
          {/* <HiChevronDown className="ml-24" /> */}
          <Accordion.Content>
            <h6 className="flex items-center text-gray-600">
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
        <Accordion.Panel>
          <Accordion.Title className="flex items-center font-bold text-gray-600 ">
            Page(Scaffold)Properties
          </Accordion.Title>
          {/* <HiOutlineExclamationCircle className="ml-2" /> */}

          <Accordion.Content>
            <p className="flex items-center text-sm text-gray-600">
              Background Color
              <HiOutlineMenuAlt1 className="ml-2" />
            </p>
            <div className="flex items-center">
              <HiChatBubbleOvalLeft className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Primary background"
                className="bg-gray-300 text-sm text-gray-600 rounded-lg font-bold w-48 p-2 border border-gray-300"
              />
            </div>

            <div>
              <p className="flex justify-between text-sm text-gray-600">
                SafeArea
                <ToggleSwitch checked={switch2} onChange={setSwitch2} />
              </p>
              <p className="flex justify-between txt-sm text-gray-600 my-3">
                Hide Keyboard on Tap
                <ToggleSwitch checked={switch2} onChange={setSwitch2} />
              </p>
              <p className="flex justify-between text-sm text-gray-600 my-3">
                Disable Androis BackButton
                <ToggleSwitch checked={switch1} onChange={setSwitch1} />
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="flex  items-center my-2 text-gray-600 font-bold text-sm">
            NavBar Items Properties
          </Accordion.Title>
          {/* <HiOutlineExclamationCircle className="ml-2" />
              <HiChevronDown className="ml-24" /> */}
          <Accordion.Content>
            <p className="flex justify-between text-sm text-gray-600">
              Show on NavBar
              <ToggleSwitch checked={switch1} onChange={setSwitch1} />
            </p>
            <p className="flex justify-between text-sm text-gray-600 my-3">
              Always Show Nav Bar on Page
              <ToggleSwitch checked={switch1} onChange={setSwitch1} />
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
export default Component;
