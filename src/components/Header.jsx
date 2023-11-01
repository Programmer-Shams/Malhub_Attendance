import React from 'react'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { PiNotificationBold } from 'react-icons/pi'
import { MalHubLogo, User } from '../assets/Images'
const Header = () => {
  return (
    <header>
        <div className='flex bg-white w-full justify-between'>
            <img src={MalHubLogo} alt="" width={100} />
            <div className='flex gap-5 items-center'>
                <div className='flex gap-3'>
                <MdOutlineNotificationsActive className=' text-2xl' />
                <PiNotificationBold className=' text-2xl' />
                </div>
                <div className='flex gap-2'>
                    <img src={User} alt="" width={30} className='rounded-full'/>
                    <p>Malhub</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header