'use client'
import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { usePathname } from 'next/navigation'
import './header.css'
import Link from 'next/link'
const Header = () => {
  const pathname = usePathname()

  console.log(pathname)
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
      <div className="navbar fixed padding-global" style={{color: '#fffce1', backgroundColor: '#1b2528' ,borderBottom: '1px solid #fffce1', zIndex: '1000'}}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ScrollLink
              to='About'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`${
                pathname === '/#About' ? 'text-y' : 'text-white'
              } font-bold mr-6 cur`}
            >
              About Us
            </ScrollLink>
            
            </li>
            <li>
            <ScrollLink
              to='Services'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`${
                pathname === '/#Services' ? 'text-[#fbbf24]' : 'text-white'
              } font-bold mr-6 cur`}
            >
              Services
            </ScrollLink>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end flex-end">
          <a className="btn">Log in</a>
        </div>
      </div>
  )
}

export default Header