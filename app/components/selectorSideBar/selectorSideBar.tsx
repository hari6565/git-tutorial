"use client";
import React, { useState } from "react";
import { Accordion, TextInput } from "flowbite-react";

import { CiText } from "react-icons/ci";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { MdOutlineTableRows } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RxButton } from "react-icons/rx";
import { FaRegCreditCard } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutTab } from "react-icons/tfi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdOutlinePageview } from "react-icons/md";
import { SiCloudflarepages } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { TbBrandPagekit } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
const Elements = [
  {
    id: 1,
    title: "Commonly used Elements",
    arr: [
      CiText,
      BsLayoutThreeColumns,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      FaImage,
      RxButton,
    ],
  },
  {
    id: 2,
    title: "Layout Elements",
    arr: [
      MdOutlineTableRows,
      CiText,
      FaRegCreditCard,
      BsLayoutThreeColumns,
      RiStackLine,
      MdOutlineTableRows,
      TfiLayoutGrid3,
      TfiLayoutColumn3Alt,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
      RxButton,
      MdCheckBoxOutlineBlank,
      TfiLayoutTab,
      TfiLayoutLineSolid,
    ],
  },
  {
    id: 3,
    title: "BasedElements",
    arr: [
      CiText,
      FaRegCreditCard,
      BsLayoutThreeColumns,
      RiStackLine,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
      RxButton,
    ],
  },
  {
    id: 4,
    title: "PageElements",
    arr: [
      RxButton,
      FaImage,
      MdOutlinePageview,
      CiText,
      BsLayoutThreeColumns,
      MdOutlineTableRows,
      MdOutlineContactPage,
      MdOutlineRestorePage,
      FaRegCreditCard,
      SiPowerpages,
      RiStackLine,
      TbBrandPagekit,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      SiCloudflarepages,
      FaListUl,
    ],
  },
];
const SelectorSideBar = ({ state, setState }) => {
  const [select, setSelect] = useState("");
  return (
    <div className="h-[88vh] w-[20vw] bg-gray-800 border-2  rounded-none">
      {state == "Elements" ? (
        <Accordion className="w-[41vh] border-none rounded-none pt-1 ">
          {Elements.map((item, id) => {
            return (
              <Accordion.Panel
                className="border-none rounded-none hover:text-gray-900"
                key={id}
              >
                <Accordion.Title
                  className={`border-none rounded-none  hover:text-gray-900${
                    select == item.title ? "text-black" : "text-white"
                  }`}
                >
                  {item.title}
                </Accordion.Title>
                <Accordion.Content>
                  <div className="grid grid-cols-3 gap-4 text-white">
                    {item.arr.map((Icon, id) => {
                      return (
                        <div key={id} className="">
                          {React.createElement(Icon, { size: 30 })}
                        </div>
                      );
                    })}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      ) : (
        <div className="flex flex-col gap-3">
          <TextInput
            id="text"
            type="text"
            placeholder={`Search for ${state}`}
            required
          />
          <Accordion className="w-[41vh] border-none rounded-none pt-1 ">
            <Accordion.Panel className="border-none rounded-none">
              <Accordion.Title className="border-none rounded-none">
                Elements
              </Accordion.Title>
              <Accordion.Content className=" bg-white">
                <div className="grid grid-cols-3 gap-4 text-black">
                  {state + "elements"}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default SelectorSideBar;
