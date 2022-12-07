import React from 'react'
import './hero.css';
import profile from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section className='flex flex-wrap font-serif md:h-screen md:items-center md:w-screen' id='home'>
        <div className='pt-10 px-6 order-2 md:m-26 lg:order-1 lg:w-3/5'>
          <h5 className='text-rose-300 pt-1'>Hi, My Name is</h5>
          <h1 className='text-white font-bold pt-1 text-3xl lg:text-6xl '>Jumil Jade R. Rosales</h1>
          <h2 className='text-gray-100 font-semibold pt-1 opacity-80 text-xl lg:text-4xl '>I'm a Full Stack Web Developer</h2>
          <p className='text-white margin-auto pt-1 text-justify lg:w-3/5'>I'm A full-stack developer specializing in building Web Applications (Mainly in PHP/Laravel). I'm currently trying to expand my knowledge on React for my front-end skills.</p>
        </div>
        <div className="pt-28 mx-auto order-1 lg:-order-2 lg:w-1/3">
          <img src={ profile } alt="Pic" />
        </div>
    </section>
  )
}

export default Hero