import React from 'react';
import {AiOutlineMenu, AiOutlinePlus} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {LiaClipboardListSolid} from 'react-icons/lia';
import {CiPizza} from 'react-icons/ci';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div>
        <div className='flex items-center'>
            <p>ADMIN</p>
            <AiOutlineMenu/>
        </div>
        <div>
            <img src='https://advance-dash.netlify.app/assets/user.png' alt='profile'/>
            <p>Admin Name</p>
        </div>
        <div>
            <Link to="userlist" className='flex items-center'>
                <FiUsers/>
                <p>Users List</p>
            </Link>
            <Link to="orderlist" className='flex items-center'>
                <LiaClipboardListSolid/>
                <p>Orders List</p>
            </Link>
            <Link to="pizzalist" className='flex items-center'>
                <CiPizza/>
                <p>Pizzas List</p>
            </Link>  
            <div className='flex items-center'>
                <AiOutlinePlus/>
                <p>Add New Pizzas</p>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar