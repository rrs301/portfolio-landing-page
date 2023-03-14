import React, { useState } from 'react'
import { HiMenuAlt1,HiOutlineX } from "react-icons/hi";
function Header() {
    const [toggle,setToggle]=useState(false)
    const menuList=[
        {
            id:1,
            name:'Home'
        },
        {
            id:2,
            name:'About'
        },
        {
            id:3,
            name:'Skills'
        },
        {
            id:4,
            name:'Portfolio'
        },
    ]
  return (
    <div className='flex p-5 items-center justify-between md:justify-start lg:justify-start'>
        <img src={require('./../Assets/Images/logo.png')}
        className="w-[140px]"/>
        <ul className=' ml-5 hidden md:flex lg:flex'>
          {menuList.map((item)=>(
              <li className='hover:bg-blue-600
              px-3 py-1 pb-2 rounded-full mr-2
              hover:text-white cursor-pointer
             '>{item.name}</li>
          ))}
        </ul>
        <div className='md:hidden lg:hidden'>
          {!toggle?  <HiMenuAlt1 className='cursor-pointer text-[20px]' 
          onClick={()=>setToggle(!toggle)  } />
          :<HiOutlineX className='cursor-pointer text-[20px]' onClick={()=>setToggle(!toggle)  }/>}
         {toggle? <ul className='flex absolute bg-slate-200 p-2 rounded-md
          items-center ml-[-80px] 
          flex-col md:hidden lg:hidden gap-2'>
        {menuList.map((item)=>(
              <li className='hover:bg-blue-600
              px-3 pb-1 rounded-full mr-2
              hover:text-white cursor-pointer
             '>{item.name}</li>
          ))}
        </ul>:null}
       </div>
       
        
    </div>
  )
}

export default Header