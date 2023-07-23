import React from 'react';
import {MdOutlineDarkMode} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {FiSettings} from 'react-icons/fi';
import {BiSolidUser} from 'react-icons/bi';

const AdminTopbar = () => {
  return (
    <div className='flex w-full justify-end'>
        <MdOutlineDarkMode/>
        <IoMdNotificationsOutline/>
        <FiSettings/>
        <BiSolidUser/>
    </div>
  )
}

export default AdminTopbar