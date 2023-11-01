import React from 'react'
import Box from '../components/Box'
function DashBoard() {
  return (
    <div className="px-16 py-10 bg-[#F6F6FE] w-full">
        <h1 className='text-[#4154F1] text-2xl'>Dashboard</h1>
        <p>Home/Dashboard</p>
        <div className='flex justify-between p-5 w-full'>
          <Box
          Status='Present'
          Day='Today'
          PresentNo={30}
          Increase={12}
           />
          <Box
          Status='Absent'
          Day='Today'
          PresentNo={10}
          Increase={40}
           />
          <Box
          Status='Attendance'
          Day='This month'

           />
        </div>
        <div className=' bg-white rounded-lg w-[80%] h-[50vh] p-4 mt-5'> 
        <h1 className='text-[#4154F1] text-lg'>Reports<span className='text-[#899BBD] text-[15px]'>/Today</span></h1>
        </div>
    </div>
  )
}

export default DashBoard