import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter,FaLinkedin, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Modal from './Modal';



function Navbar ()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setisModalOpen] = useState(false)



    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    //NavItems
    const navItems = [
        {Path: "/" , link: "Home"},
        {Path: "/services" , link: "Services"},
        {Path: "/about" , link: "About"},
        {Path: "/blogs" , link: "Blogs"},
        {Path: "/contact" , link: "Contact"},
        
    ]

    //modal detail
    const openModel =() =>{
        setisModalOpen(true)
    }

    const closeModel =() =>{
        setisModalOpen(false)
    }
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0 '>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white '>Blog<span className='text-orange-500'>BG</span></a>
        {/* navItems for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({Path,link}) => <li className='text-white' key={Path}>
                    <NavLink className={({isActive, isPending})=>
                    isActive ? "active" : isPending ? "pending" : ""}
                     to={Path}>{link}</NavLink>
                </li>)
            }
        </ul>
        {/* menu icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-500'><FaFacebookF /></a>
            <a href="/" className='hover:text-orange-500'><FaLinkedin /></a>
            <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
            <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
             transition-all duration-200 ease-in'>Log in </button>

        </div>

{/* modal component */}
<Modal isOpen={isModalOpen} onClose={closeModel}/>

        {/* mobile menu btn , disply mb screen */}
        <div className='md:hidden'>
         <button onClick={toggleMenu} className='cursor-pointer'>
            {
                isMenuOpen ? <FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5 '/>
            }
            
            </button>
        </div>
        </nav>
      {/* menu items only for mobile */}
      <div>
          {/* navItems for lg devices */}
          <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed  top-0 left-0 w-full transition-all ease-out duration-150"
             : "hidden"}`}>
            {
                navItems.map(({Path,link}) => <li className='text-black' key={Path}>
                    <NavLink className={({isActive, isPending})=>
                    isActive ? "active" : isPending ? "pending" : ""}
                      onClick={toggleMenu} to={Path}>{link}</NavLink>
                </li>)
            }
        </ul>
      </div>
    </header>
  )
}

export default Navbar
