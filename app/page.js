"use client";

import React from 'react'
import Navbar from './nav'
import Footer from './footer'
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
      <section className='home-section'>
        <Image
          className='home-img'
          src='https://res.cloudinary.com/dbifof9on/image/upload/v1681780766/cld-sample-4.jpg'
          alt='Image of Mercutio'
          width={500}
          height={200}
        />
        <article className='colorful-border home-info'>
          <div className='text-center'>
            <p className='home-info-heading'>Mercutio Geant</p>
          </div>
        </article>
      </section>
      <div className='home-btn-container'>
        <Link href="/projects"><button className='home-projects-btn'>Projects</button></Link>
        <Link href="#about-section"><button className='home-about-btn'>About Me</button></Link>
        <button className='home-github-btn'>Github</button>
      </div>
      <article className='colorful-border about-info' id='about-section'>
        <div class='text-left'>
          <div className='basis-3/4 home-info-content'>
            <div>
              <p className='home-info-heading'>About Me</p>
              <p className='home-info-paragraph'>
                I have always been facinated with coding<br/><br/>
                Six week internship with WBLA from January to Febuary 2024 to work with a client to make a customizable portfolio<br/><br/>
                I am a very creative designer with a lot of passion for the work that I do.
              </p>
            </div>
            
            <Image
              className='basis-1/4'
              src="https://res.cloudinary.com/dbifof9on/image/upload/v1681780766/cld-sample-4.jpg"
              alt='Experience Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </article>
      <article className='colorful-border about-info' data-aos="fade-left">
        <div class='text-left'>
          <div className='basis-3/4 home-info-content'>
            <div>
              <p className='home-info-heading'>Education</p>
              <p className='home-info-paragraph'>
                Graduating from High School in May 2024<br/><br/>
                Attended West-Mec NEC coding program for two years<br/><br/>
                Received my HTML and CSS certificates
              </p>
            </div>
            
            <Image
              className='basis-1/4'
              src="https://res.cloudinary.com/dbifof9on/image/upload/v1713817022/02._NEC_eyznci.jpg"
              alt='Experience Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </article>
      <article className='colorful-border about-info'>
        <div class='text-left'>
          <div className='basis-3/4 home-info-content'>
            <div>
              <p className='home-info-heading'>Skills</p>
              <p className='home-info-paragraph'>
                I work mostly front end, using HTML, CSS, JS, and React<br/><br/>
                But I also know how to set up backend using MongoDB and NextJS<br/><br/>
                Software that I have used in the past relating to my coding experience include VSCode, and Unity Engine
              </p>
            </div>
            
            <Image
              className='basis-1/4'
              src="https://res.cloudinary.com/dbifof9on/image/upload/v1713818985/css_qu6lv3.png"
              alt='Experience Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </article>
      <article className='colorful-border about-info'>
        <div class='text-left'>
          <div className='basis-3/4 home-info-content'>
            <div>
              <p className='home-info-heading'>Experience</p>
              <p className='home-info-paragraph'>
                Worked with a client for his compeny QuikTek<br/><br/>
                Six week internship with WBLA &#40;Work-Based Learning Alliance&#41; from January to Febuary 2024 to work with a client to make a customizable portfolio<br/><br/>
                Attributed regularly to community service throughout highschool
              </p>
            </div>
            
            <Image
              className='basis-1/4'
              src="https://res.cloudinary.com/dbifof9on/image/upload/v1681780766/cld-sample-4.jpg"
              alt='Experience Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </article>
      <Footer/>
    </>
  )
}

export default page