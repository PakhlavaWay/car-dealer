import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../modules/Header/Header'
import Footer from '../../modules/Footer/Footer'

const RootLayout = () => {
  return (
    <div className='relative'>
        {/* <Header /> */}
        <Outlet/>
        <Footer />
    </div>
  )
}

export default RootLayout