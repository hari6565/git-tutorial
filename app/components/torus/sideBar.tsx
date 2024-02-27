"use client";
import { ListGroup, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { FcStart } from "react-icons/fc";
import { CgComponents } from "react-icons/cg";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import TorusImg from "../../assests/torus.png";
import Image from "next/image";
import { LuListTree } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbLayersLinked } from "react-icons/tb";
import { FaTableList } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { TbFolderCog } from "react-icons/tb";
import { TbApiApp } from "react-icons/tb";
import { GrMultimedia } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaElementor } from "react-icons/lia";

const Icons = [
  {
    id: 0,
    icon: LiaElementor,
    tooltip: "Elements",
  },
  {
    id: 1,
    icon: LuListTree,
    tooltip: "tree",
  },
  {
    id: 2,
    icon: FaRegNewspaper,
    tooltip: "page selector",
  },
  {
    id: 3,
    icon: TbLayersLinked,
    tooltip: "storyboard",
  },
  {
    id: 4,
    icon: FaTableList,
    tooltip: "firestore",
  },
  {
    id: 5,
    icon: GrDatabase,
    tooltip: "datatypes",
  },
  {
    id: 6,
    icon: TbFolderCog,
    tooltip: "app values",
  },
  {
    id: 7,
    icon: TbApiApp,
    tooltip: "api calls",
  },
  {
    id: 8,
    icon: GrMultimedia,
    tooltip: "media",
  },
  {
    id: 9,
    icon: IoSettingsOutline,
    tooltip: "settings",
  },
];

export default function Component({ state, setState }) {
  return (
    <div className="h-[88vh] flex flex-col bg-slate-500 dark:bg-gray-800  w-[60px]">
      <ListGroup className="bg-slate-500 dark:bg-gray-800 flex flex-col gap-4 rounded-none border-none mt-5 items-center w-[60px] justify-between h-[80%]">
        {Icons.map((item) => (
          // <div className="flex">
          <Tooltip
            content={item.tooltip}
            style="light"
            arrow={false}
            placement="right"
          >
            <ListGroup.Item
              className={
                "flex flex-col px-0 dark:text-white w-[50px] bg-slate-400 py-0 rounded-lg"
              }
              style={{ flexDirection: "column" }}
              onClick={() => setState(item.tooltip)}
            >
              <div>{React.createElement(item.icon)}</div>
            </ListGroup.Item>
          </Tooltip>
          // </div>
        ))}
      </ListGroup>
    </div>
  );
}
