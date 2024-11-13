import React, { useState } from 'react';
import PHOTOS from '../../assets/images';
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";



function Header() {

  const [nav, setNav] = useState(false);
  const toggleNav = ()=>{
    setNav(!nav);
  }
  
  return (
    <header className='flex items-center border large:justify-around w-100vw h-80px bg-vogueWhite small:justify-between small:px-3 large:px-0'>
      <img src={PHOTOS.LOGO} alt="logo" className='large:w-100px large:h-60 small:w-50px small:h-40'/>

      {nav ?

        <IoClose className='font-bold cursor-pointer large:hidden text-30px'
        onClick={toggleNav}
        /> :
        
      <HiBars3BottomRight className='font-bold cursor-pointer large:hidden text-30px'
      onClick={toggleNav}
      />}

      

      <nav className={`items-center justify-center list-none large:flex large:h-auto large:w-50 text-15px small:absolute small:top-0 small:left-0 bg-vogueWhite small:z-40 small:h-100vh small:border large:border-0 large:static small:pl-2 large:pl-0 small:hidden`}>
        
        <u className='flex justify-center h-auto gap-2 large:items-center w-100 large:flex-row small:flex-col small:items-start'>
          <li><a href="https://pageinnovations.com.ng/" target='_blank' className='no-underline'>Home page</a></li>
          <li><a href="https://pageinnovations.com.ng/why-choose-us/" target='_blank'>Why choose us</a></li>
          <li><a href="https://pageinnovations.com.ng/contact/" target='_blank'>Contact</a></li>
          <li><a href="https://pageinnovations.com.ng/academy/" target='_blank'>Academy</a></li>
          <li><a href="https://pageinnovations.com.ng/blog/" target='_blank'>Blog</a></li>
        </u>
      </nav>

        {nav &&
      <nav className={`items-center justify-center list-none large:hidden large:h-auto large:w-50 text-15px small:absolute small:top-0 small:left-0 bg-vogueWhite small:z-40 small:h-100vh small:border large:border-0 large:static small:pl-2 large:pl-0 small:w-70vw small:flex`}>
        
        <u className='flex justify-center h-auto gap-2 large:items-center w-100 large:flex-row small:flex-col small:items-start'>
          <li><a href="https://pageinnovations.com.ng/" target='_blank' className='no-underline'>Home page</a></li>
          <li><a href="https://pageinnovations.com.ng/why-choose-us/" target='_blank'>Why choose us</a></li>
          <li><a href="https://pageinnovations.com.ng/contact/" target='_blank'>Contact</a></li>
          <li><a href="https://pageinnovations.com.ng/academy/" target='_blank'>Academy</a></li>
          <li><a href="https://pageinnovations.com.ng/blog/" target='_blank'>Blog</a></li>
        </u>
      </nav>}
      
    </header>
  )
}

export default Header;
