import React from "react";
import Attendance from "./Attendance";
import { useState } from "react";
import Button from "../components/Button";

const Info = [
  { studentName: "shams", studentID: "0566419", status: "" },
  { studentName: "musty", studentID: "050419", status: "" },
  { studentName: "shams", studentID: "0565419", status: "" },
];

const Sheet = () => {
    const [clickedStudents, setClickedStudents] = useState(
        Array(Info.length).fill(false)
      );
      const [studentStatus, setStudentStatus] = useState([...Info]);
    
      const handleButtonClick = (index) => {
        const updatedClickedStudents = [...clickedStudents];
        updatedClickedStudents[index] = !updatedClickedStudents[index];
        setClickedStudents(updatedClickedStudents);
    
        // Update the status based on the button click
        const updatedStudentStatus = [...studentStatus];
        updatedStudentStatus[index].status = updatedClickedStudents[index] ? "present" : "Absent";
        setStudentStatus(updatedStudentStatus);
      };
  return (
    <div className="w-full">
      <Attendance />
      <div className="px-16 py-10 bg-[#F6F6FE] w-full">
        <h1 className="text-2xl font-bold mb-4">Attendance Sheet</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2"> # </th>
                <th className="border px-4 py-2"> Student Name </th>
                <th className="border px-4 py-2"> Student ID </th>
                <th className="border px-4 py-2"> Status </th>
              </tr>
            </thead>
            <tbody>
              {Info.map((item, index) => (
                <tr key={item.studentID} className=" items-center text-center">
                  <div className="flex items-center text-center justify-center border px-4 py-2 ">
                  <button
                      className={`rounded-full w-6 h-6 border-2 border-gray-500 ${
                        clickedStudents[index] ? "bg-blue-400" : ""
                      }`}
                      onClick={() => handleButtonClick(index)}
                    >
                      {clickedStudents[index] ? "✔" : ""}
                    </button>
                    <td className=" px-4 py-2"> {index + 1} </td>
                  </div>
                  <td className="border px-4 py-2"> {item.studentName} </td>
                  <td className="border px-4 py-2"> {item.studentID} </td>
                  <td className="border px-4 py-2"> {studentStatus[index].status} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button
        style='w-[7rem] mt-4'
      content='Submit'
       />
      </div>
    </div>
  );
};

export default Sheet;
