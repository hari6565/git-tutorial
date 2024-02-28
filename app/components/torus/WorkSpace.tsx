import React from "react";

const WorkSpace = ({ disSize }) => {
  return (
    <div className="flex justify-center items-center h-[80vh] pt-[50px]">
      {disSize == "disktop" ? (
        <div className="border-2 w-[600px] h-[500px] rounded-lg bg-slate-400 flex justify-center items-center">
          WorkSpace
        </div>
      ) : disSize == "tab" ? (
        <div className="border-2 w-[400px] h-[400px] rounded-lg bg-slate-400 flex justify-center items-center">
          WorkSpace
        </div>
      ) : (
        <div className="border-2 w-[300px] h-[500px] rounded-lg bg-slate-400 flex justify-center items-center">
          WorkSpace
        </div>
      )}
    </div>
  );
};

export default WorkSpace;
