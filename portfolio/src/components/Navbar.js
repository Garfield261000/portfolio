import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/Logo'

const NavLink = ({ to, title, className = '' }) => {
  return (
    <Link
      to={to}
      className={`${className = 'text-[#fcfcfc] relative group'}`}>
      {title}
      <span className='bg-[#ffffff] h-[1px] w-0 absolute inline-block left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full flex justify-around px-2 py-4 items-center border-b border-[#0d8cc8] bg-[#000000]'>
      <Logo />
      <nav className='flex gap-12'>
        <NavLink to='/' title='Home'></NavLink>
        <NavLink to='/about' title='About'></NavLink>
        <NavLink to='/projects' title='Projects'></NavLink>
        <NavLink to='/contact' title='Contact'></NavLink>
      </nav>
    </header>
  )
}

export default Navbar