import React from 'react';
import './about.css';

import css from '../../assets/svg/css.svg';
import html from '../../assets/svg/html.svg';
import jslogo from '../../assets/svg/jslogo.svg';
import laravel from '../../assets/svg/laravel.svg';
import mssql from '../../assets/svg/mssql.svg';
import mysql from '../../assets/svg/mysql.svg';
import php from '../../assets/svg/php.svg';
import react from '../../assets/svg/react.svg';

const About = () => {
  return (
    <section className='container flex flex-wrap lg:flex mx-auto' id='about'>
      <div className='flex order-2 w-screen px-5 my-10'>
        <div className="w-full">
          <h1 className=' text-2xl'>Softwares</h1>
          <div className="flex flex-wrap mt-1">
            <div className="w-16  bg-white p-1 m-1">
              <img src={ html } alt="html" className=''/>
            </div>
            <div className="w-16  bg-white p-1 m-1">
              <img src={ css } alt="css" />
            </div>
            <div className="w-16  bg-white p-1 m-1">
              <img src={ jslogo } alt="jslogo" />
            </div>
            <div className="w-16  bg-white p-1 m-1">
              <img src={ php } alt="php" />
            </div>
            <div className="w-16  bg-white p-1 m-1">
              <img src={ mssql } alt="mssql" />
            </div>
            <div className="w-16  bg-white p-1 m-1">
              <img src={ mysql } alt="mysql" />
            </div>
            <div className="w-26  bg-white p-1 m-1">
              <img src={ laravel } alt="laravel" />
            </div>
            <div className="w-26  bg-white p-1 m-1">
              <img src={ react } alt="react" />
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen order-1 mt-28'>
        <h1 className=' text-center text-6xl'>Who Is Jumil?</h1>
        <div className='text-justify px-5 mx-auto'>
          <p className=' text-2l pt-4 mx-auto'>Jumil Jade R. Rosales is a full-stack developer (mainly backend) from Leyte, Philippines.</p>
          <p className=' text-2l pt-4 mx-auto'>Developing web applications for small stores, company and student projects. If I have spare time, I usually use it to code or play pc games (Dota 2 / Valorant). I also love to read manhwa/manhua.</p>
        </div>
      </div>
    </section>
  )
}

export default About