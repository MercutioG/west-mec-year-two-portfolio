import React from 'react'
import Navbar from './nav'

import Image from 'next/image'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='big-home-img'>
        <div>
          <p>Welcome to my Portfolio</p>
        </div>
      </div>
      <section class='flex' className='home-section'>
        <Image
          className='home-img'
          src='https://res.cloudinary.com/dbifof9on/image/upload/v1681780766/cld-sample-4.jpg'
          alt='Image of Mercutio'
          width={500}
          height={200}
        />
        <article className='colorful-border home-info'>
          <div class='text-center'>
            <p className='home-info-heading'>Mercutio Geant</p>
            <p className='home-info-paragraph'>Hello world</p>
          </div>
        </article>
      </section>
      <div className='home-btn-container'>
        <button className='home-projects-btn'>Projects</button>
        <button className='home-about-btn'>About Me</button>
        <button className='home-github-btn'>Github</button>
      </div>
    </>
  )
}

export default page