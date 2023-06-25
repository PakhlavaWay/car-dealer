import React, { useState } from 'react'
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    if(window.scrollY >= 40) {
      setVisible(true);
      console.log('done')
    }
    else {
      setVisible(false);
      console.log("else")
    }
  }
  window.addEventListener('scroll', changeVisibility);
  return (
    <header className={`transition-all ${visible ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 z-10 w-full bg-gradient-to-b from-[rgba(48,_48,_48,_0.3)] to-[rgba(48,_48,_48,_0.7)] backdrop-filter backdrop-blur-[0.5px]`}>
        <div className='myWrapper h-[12vh] flex text-white justify-between items-center'>
            <div className='basis-1/4'>
                <img src={logo} alt='logo' className='h-[60px] w-[60px]'/>
            </div>
            
            <nav className='flex basis-2/4 justify-between'>
                <NavLink to={'/'}>Search Cars</NavLink>
                <NavLink to={'/'}>Find a Dealership</NavLink>
                <NavLink to={'/'}>Sell your Car</NavLink>
                <NavLink to={'/'}>Contacts</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header