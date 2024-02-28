import React from "react";

const WorkSpace = ({ disSize }) => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      {disSize == "disktop" ? (
        <div className="border-2 w-[300px]">WorkSpace</div>
      ) : null}
    </div>
  );
};

export default WorkSpace;
