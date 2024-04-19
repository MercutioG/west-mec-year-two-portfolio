"use client"
import Navbar from '../nav'
import Footer from '../footer'
import data from './data'
import Image from 'next/image'
import Link from 'next/link'
import useScreenSize from '../screenSize'

const page = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <Navbar />
      <p id="project-height">Projects</p>
      <div className="projects-container">
        {/* Each individual Card gets made here */}
      {data.map((item) => (
          <div key={item.id} className='colorful-border card-container'>
            <div className='text-center project-cards'>
              <article>
                <h1>{item.title}</h1>
                <Image src={item.image} width={500} height={500} alt={item.title}/>
                <p>{item.description}</p>
              </article>
              <article className='project-btn-container-container'>
                <Link href={item.github} className='project-btn-container' target='_blank'><button className='project-btn'>GitHub</button></Link>
                <Link href={item.url} className='project-btn-container' target='_blank'><button className='project-btn'>Visit</button></Link>
              </article>
            </div>
          </div>
        ))}

        {((data.length % 3 !== 0 && screenSize.width >= 1376 || data.length % 2 !== 0 && screenSize.width < 1376) && screenSize.width > 920) ? (data.length % 3 !== 1 || screenSize.width <= 1376) ? 
        <div key="-1" className='colorful-border card-container'>
        <div className='text-center project-cards'>
          <article>
            <h1>Coming Soon</h1>
            <Image src="https://res.cloudinary.com/dbifof9on/image/upload/v1713558899/question_ewr1lj.png" width={500} height={500} alt="Coming Soon"/>
            <p>This project is yet to be developed, I can't wait to continue my coding career!</p>
          </article>
          <article className='project-btn-container-container'>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
          </article>
        </div>
      </div>: 
      <>
      <div key="-1" className='colorful-border card-container'>
        <div className='text-center project-cards'>
          <article>
            <h1>Coming Soon</h1>
            <Image src="https://res.cloudinary.com/dbifof9on/image/upload/v1713558899/question_ewr1lj.png" width={500} height={500} alt="Coming Soon"/>
            <p>This project is yet to be developed, I can't wait to continue my coding career!</p>
          </article>
          <article className='project-btn-container-container'>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
          </article>
        </div>
        </div>
        <div key="-2" className='colorful-border card-container'>
        <div className='text-center project-cards'>
          <article>
            <h1>Coming Soon</h1>
            <Image src="https://res.cloudinary.com/dbifof9on/image/upload/v1713558899/question_ewr1lj.png" width={500} height={500} alt="Coming Soon"/>
            <p>This project is yet to be developed, I can't wait to continue my coding career!</p>
          </article>
          <article className='project-btn-container-container'>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
            <Link href="/projects" className='project-btn-container'><button className='project-btn'>Soon</button></Link>
          </article>
        </div></div>
        </>: console.log('Perfect')}
    </div>
    <Footer />
    </>
  )
}

export default page