import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex fixed'>
      <div className='w-1/2 ml-10'>
        <img className='w-[100px]' src={ logo } alt='' />
      </div>
      <div className='w-1/2 flex float-right'>
        <nav className='navbar-links w-full justify-end items-center mr-10 flex'>
          <div className="navbar-link mx-10 hidden lg:block">
            <a className='' href='#'>Home</a>
          </div>
          <div className="navbar-link mx-10 hidden lg:block">
            <a className='' href='#'>About</a>
          </div>
          <div className="navbar-link mx-10 hidden lg:block">
            <a className='' href='#'>Projects</a>
          </div>
          <div className="navbar-link mx-10 hidden lg:block">
            <a className='' href='#'>Contact</a>
          </div>
          <div className='p-3 bg-white rounded block lg:hidden'>
            <div class="space-y-2 items-center">
              <span class="block w-8 h-0.5 bg-slate-900 animate-pulse"></span>
              <span class="block w-8 h-0.5 bg-slate-900 animate-pulse"></span>
              <span class="block w-8 h-0.5 bg-slate-900 animate-pulse"></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar