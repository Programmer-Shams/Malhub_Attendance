import React from "react";
import { MalHubLogo } from "../assets/Images";

const Home = () => {
  return (
    <div>
      <header className=" w-full bg-white items-center">
        <img src={MalHubLogo} alt="" width={100} />
      </header>
      <div className=" w-full bg-[#F6F6FE] h-[90vh] mt-2 flex">
        <div className="w-[50%] ml-[7rem]">
          <h1 className=" text-3xl pt-[20rem] text-[#012970]">
            Malhub Student <br />
            <span className=" text-5xl text-black">Attendance Sheet</span>
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            provident dolorem voluptate recusandae reprehenderit distinctio
            facilis! Nulla itaque eius optio dignissimos, <br /> sapiente natus impedit
            exercitationem consectetur atque, corporis architecto. Velit!
          </p>
        </div>
        <div className=" pt-[8rem]">
          <form action="" className=" bg-white p-10 w-[30rem]">
            <div className="flex gap-5">
              <div className="flex gap-4 bg-[#F0F4FB] border-2 border-[#5F6EF1] rounded-xl p-2">
                <input type="radio" name="name" id="" />
                <p>Teacher</p>
              </div>
              <div className="flex gap-4 bg-[#F0F4FB] border-2 border-[#5F6EF1] rounded-xl p-2">
                <input type="radio" name="name" id="" />
                <p>Teacher</p>
              </div>
            </div>
            <div className="flex  flex-col mt-5 gap-3">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className=" border border-[#CED4DA] p-2 rounded-xl"
              />
              <label htmlFor="">Password</label>
              <input
                type="text"
                className=" border border-[#CED4DA] p-2 rounded-xl"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>
            <button className="text-white p-1 bg-[#4154F1] rounded-xl w-fit px-5 mt-2">
              Sign In
            </button>
            <p className=" text-[#6C757D] mt-4">Forget Password</p>
            <p className=" text-[#212529] mt-4">
              Don't have an account?{" "}
              <span className=" text-[#0DCAF0]">Register here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
