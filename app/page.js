"use client";

import React from 'react'
import Navbar from './nav'
import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';
import Link from 'next/link'

import Image from 'next/image'

const page = () => {
  useEffect(() => {
    AOS.init();
    console.log('init');
  }, []);

  return (
    <>
      <Head>
        <title>Mercutio Geant</title>
      </Head>
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
            <p className='home-info-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quibusdam omnis, consequuntur tempora fuga temporibus sed dolorem dicta accusamus possimus sunt, eaque laudantium delectus expedita enim! Possimus dicta tempora tenetur nesciunt odio officia, hic tempore saepe ut similique non consequuntur praesentium sequi fugit eaque. Cupiditate aliquam quae tempora molestias. Labore molestias sint officia unde veritatis.</p>
          </div>
        </article>
      </section>
      <div className='home-btn-container'>
        <Link href="/projects"><button className='home-projects-btn'>Projects</button></Link>
        <Link href="#about-section"><button className='home-about-btn'>About Me</button></Link>
        <button className='home-github-btn'>Github</button>
      </div>
      <article className='colorful-border about-info' data-aos="fade-left" id='about-section'>
        <div class='text-center'>
          <p className='home-info-heading'>About Me</p>
          <p className='home-info-paragraph'>Hello world</p>
        </div>
      </article>
      <article className='colorful-border about-info'>
        <div class='text-center'>
          <p className='home-info-heading'>Education</p>
          <p className='home-info-paragraph'>Hello world</p>
        </div>
      </article>
      <article className='colorful-border about-info'>
        <div class='text-center'>
          <p className='home-info-heading'>Skills</p>
          <p className='home-info-paragraph'>Hello world</p>
        </div>
      </article>
      <article className='colorful-border about-info'>
        <div class='text-center'>
          <p className='home-info-heading'>Community Service</p>
          <p className='home-info-paragraph'>Hello world</p>
        </div>
      </article>
    </>
  )
}

export default page