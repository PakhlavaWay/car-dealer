import React from 'react'
import { NavLink } from 'react-router-dom'

const MyButton = ({ text, type, to, className }) => {
  return (
    <>
      {type === 'button' ? <button className={`min-w-fit mx-auto px-6 py-3 border ${className}`}>{text}</button> : <NavLink to={to} className={className}>{text}</NavLink>}
    </>
    
  )
}

export default MyButton