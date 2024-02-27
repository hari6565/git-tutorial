import React from "react";
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
      CiText,
      BsLayoutThreeColumns,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
      RxButton,
      MdCheckBoxOutlineBlank,
      FaImage,
      RxButton,
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
      RxButton,
      CiText,
      BsLayoutThreeColumns,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      CiText,
      FaRegCreditCard,
      BsLayoutThreeColumns,
      RiStackLine,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
    ],
  },
];
const SelectorSideBar = ({ state, setState }) => {
  return (
    <div className="h-[85vh] w-[20vw] bg-slate-400 border-none rounded-none">
      {state == "Elements" ? (
        <Accordion className="w-[42vh] border-none rounded-none pl-1 pt-1 ">
          {Elements.map((item) => {
            return (
              <Accordion.Panel className="border-none rounded-none">
                <Accordion.Title className="border-none rounded-none">
                  {item.title}
                </Accordion.Title>
                <Accordion.Content>
                  <div className="grid grid-cols-3 gap-4">
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
          <Accordion className="w-[42vh] border-none rounded-none pl-1 pt-1 ">
            <Accordion.Panel className="border-none rounded-none">
              <Accordion.Title className="border-none rounded-none">
                Elements
              </Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-3 gap-4">
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
