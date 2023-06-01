import * as React from 'react'
import { Link } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className='relative'>
      <nav className='border-b-4 bg-[#000000] border-[#2f9dd1] flex justify-center'>
        <ul className='flex gap-20 justify-center  p-3 w-1/2 '>
          <li><Link to="/" className='text-white hover:text-[#2e38cb]'>Home</Link></li>
          <li><Link to="/about"  className='text-white hover:text-[#2e38cb]'>About</Link></li>
          <li><Link to="/experience"  className='text-white hover:text-[#2e38cb]'>Experience</Link></li>
          <li><Link to="/contact"  className='text-white hover:text-[#2e38cb]'>Contact</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout