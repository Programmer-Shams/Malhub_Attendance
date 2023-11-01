import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Attendance from "./Sections/Attendance";
import Sheet from "./Sections/Sheet";
import DashBoard from "./Sections/DashBoard";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from "react-router";
import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path="attendance" element={<Sheet />}></Route>
        {/* <Route path="report" element={<Report />}></Route> */}
        {/* <Route path="student" element={<Student />}></Route> */}
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={route} />
    </div>

    // <div className='m-5'>
    //   <Header />
    //   <div className='flex'>
    //   <SideBar />
    //   {/* <Attendance /> */}
    //   <Sheet />
    //   {/* <DashBoard /> */}
    //   </div>
    // </div>
  );
};

export default App;
