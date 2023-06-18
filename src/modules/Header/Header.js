import React from 'react'
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-10 z-10 w-full'>
        <div className='myWrapper h-[10vh] flex text-white justify-between items-center'>
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