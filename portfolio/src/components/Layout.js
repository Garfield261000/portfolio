import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        <div className='content'>
            {children}
        </div>
        <footer className='footer'>
            Copyright 2023
        </footer>
    </div>
  )
}

export default Layout