import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
const SideBar = () => {
  const SideBar = [
    { Title: "Attendance Sheet" },
    { Title: "Dashboard", Icon: <TbReportAnalytics /> },
    { Title: "Report", Icon: <PiStudentBold /> },
    { Title: "Student", Icon: <RxDashboard /> },
    { Title: "Logout", Icon: <FiLogOut /> },
  ];
  return (
    <div className="bg-white flex flex-col gap-3 w-[15%] h-[90vh] p-5">
      <div className="">
        <h1 className="text-[#899BBD]">Track</h1>
        <Link to="/attendance">
          <div className="flex items-center gap-2 text-[#012970]">
            <LuFileSpreadsheet />
            <p>Attendance</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[#899BBD]">ANALYZE</h1>
        <Link to="/">
          <div className="flex items-center gap-2 text-[#012970]">
            <RxDashboard />
            <p>Dashboard</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 text-[#012970]">
          <TbReportAnalytics />
          <p>Report</p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <h1 className="text-[#899BBD]">Manage</h1>
        <div className="flex items-center gap-2 text-[#012970]">
          <PiStudentBold />
          <p>Student</p>
        </div>
        <div className="flex items-center gap-2 text-[#012970]">
          <FiLogOut />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
