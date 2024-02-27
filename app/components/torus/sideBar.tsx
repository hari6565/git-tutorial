"use client";
import { Tabs } from "flowbite-react";
import React, { useState } from "react";
import { FcStart } from "react-icons/fc";
import { CgComponents } from "react-icons/cg";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import TorusImg from "../../assests/torus.png";
import Image from "next/image";

const Icons = [
  {
    id: 1,
    icon: CgComponents,
    title: "DF",
    data: [
      {
        id: 21,
        label: "Data Collection",
        description: "Collect relevant data",
      },
      { id: 22, label: "Data Analysis", description: "Analyze gathered data" },
      {
        id: 23,
        label: "Data Visualization",
        description: "Create visualizations",
      },
      { id: 24, label: "Data Storage", description: "Manage data storage" },
    ],
  },
  {
    id: 2,
    icon: FcStart,
    title: "PF",
    data: [
      // {
      //   id: 21,
      //   label: "Process Collection",
      //   description: "Collect relevant data",
      // },
      // {
      //   id: 22,
      //   label: "Process Analysis",
      //   description: "Analyze gathered data",
      // },
      // {
      //   id: 23,
      //   label: "Process Visualization",
      //   description: "Create visualizations",
      // },
      // { id: 24, label: "Process Storage", description: "Manage data storage" },
    ],
  },
  {
    id: 3,
    icon: IoDocumentsOutline,
    title: "UF",
    data: [
      {
        id: 31,
        label: "Process Definition",
        description: "Define project processes",
      },
      {
        id: 32,
        label: "Workflow Optimization",
        description: "Optimize workflow",
      },
      {
        id: 33,
        label: "Process Documentation",
        description: "Document project processes",
      },
      {
        id: 34,
        label: "Continuous Improvement",
        description: "Implement continuous improvement",
      },
    ],
  },
  {
    id: 4,
    icon: TorusImg,
    title: "TRN",
    data: [
      {
        id: 41,
        label: "Document Management",
        description: "Manage project documents",
      },
      {
        id: 42,
        label: "Document Review",
        description: "Review important documents",
      },
      {
        id: 43,
        label: "Version Control",
        description: "Control document versions",
      },
      {
        id: 44,
        label: "Document Archive",
        description: "Archive outdated documents",
      },
    ],
  },
  {
    id: 5,
    icon: GrDocumentConfig,
    title: "System",
    data: [
      {
        id: 51,
        label: "System Configuration",
        description: "Configure project system",
      },
      {
        id: 52,
        label: "Integration",
        description: "Integrate system components",
      },
      {
        id: 53,
        label: "System Monitoring",
        description: "Monitor system performance",
      },
      {
        id: 54,
        label: "System Maintenance",
        description: "Perform system maintenance",
      },
    ],
  },
];

export default function Component() {
  const [state, setState] = useState("");
  return (
    <div className="h-[88vh] w-[70px] bg-gray-200 flex flex-col justify-evenly ">
      <Tabs
        aria-label="Default tabs"
        style="default"
        className="flex flex-col w-[70px] gap-8"
        onClick={(e: any) => setState(e?.target?.innerText)}
      >
        {Icons.map((ele: any) => {
          return (
            <Tabs.Item
              key={ele.id}
              title={
                <div className={`flex flex-col items-center w-[35px]`}>
                  {ele.icon == TorusImg ? (
                    <Image src={TorusImg} alt="Torus" width={20} height={20} />
                  ) : (
                    React.createElement(ele.icon, { size: 20 })
                  )}
                  <div className="text-[10px]">{ele.title}</div>
                </div>
              }
            >
              <div className="absolute left-[150px] top-0 flex flex-col justify-evenly">
                <span className="font-medium text-gray-800 dark:text-white">
                  {/* next component here */}
                </span>
              </div>
            </Tabs.Item>
          );
        })}
      </Tabs>
    </div>
  );
}
