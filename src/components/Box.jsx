import React from "react";

const Box = ({ PresentNo, Status, pers, Day,Increase , width }) => {
  return (
    <div className="">
      <div className={`bg-white rounded-2xl p-5 ${width}`}>
        <p className=" text-[#4154F1]">
          {Status}
          <span className=" text-[#899BBD]">/{Day}</span>
        </p>
        <div className="flex items-center gap-5">
          <p className="bg-[#F6F6FE] rounded-full w-fit p-8"></p>
          <div>
          <p className="text-[#4154F1] text-3xl">{PresentNo}</p>
          <p className=" text-[#012970] font-bold">{Increase}%<span className=" text-[#6C757D] font-light">increase</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
