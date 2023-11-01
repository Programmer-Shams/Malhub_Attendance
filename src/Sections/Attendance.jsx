import React from 'react'
import Datetime from 'react-datetime'
import Button from '../components/Button'
const Attendance = () => {
    const Data = [
        {
            subject:[
                'Frontend Development',
                'Backend Development',
                'UI/UX Design',
                'Mobile App Development',
                'Data Analysis'
            ]
        },
        {
            Cohorts:[
                'Cohort 1',
                'Cohort 2',
                'Cohort 3',
                'Cohort 4',
                'Cohort 5'
            ]
        }
    ]
  return (
    <div className='px-16 py-10 bg-[#F6F6FE] w-full'>
       <div>
        <h1 className=' text-[#4154F1]'>Attendance</h1>
        <p className=' text-gray-400'>Teack <span className=' text-black'>/Attendance</span></p>
       </div>
       <div className='flex gap-5 items-center'>
        <div className=' border-[1px] border-black p-2 rounded-2xl'>
            <p>Subject</p>
            <select name="" id="">
                    {Data[0].subject.map((item, index) =>(
                        <option value="" key={index}>
                            {item}
                        </option>
                    ))}
            </select>
        </div>
        <div className='border-[1px] border-black p-2 rounded-2xl px-5'>
            <p>Section</p>
            <select name="" id="">
                {Data[1].Cohorts.map((cohort, index) =>(
                    <option value="" key={index}>
                        {cohort}
                    </option>
                ))}
            </select>
        </div>
        <div className='border-[1px] border-black p-2 rounded-2xl px-5'>
            <p>Date</p>
            <select name="" id="">
                <option value="">
                    2023/03/15
                </option>
            </select>
        </div>
        <Button
        content='Generate Sheet'
         />
       </div>
    </div>
  )
}

export default Attendance