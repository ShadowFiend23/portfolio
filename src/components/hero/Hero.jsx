import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className='container flex mx-auto h-screen items-center'>
        <div className=''>
          <h5 className='text-rose-300 pt-1'>Hi, My Name is</h5>
          <h1 className='text-white text-6xl font-bold pt-1'>Jumil Jade R. Rosales</h1>
          <h2 className='text-gray-200 text-4xl font-semibold pt-1 opacity-80'>I'm a Full Stack Web Developer</h2>
          <p className='text-white pt-1 w-3/5 text-justify'>I'm A full-stack developer specializing in building Web Applications (Mainly in PHP/Laravel). I'm currently trying to expand my knowledge on React for my front-end skills.</p>
        </div>
    </div>
  )
}

export default Hero