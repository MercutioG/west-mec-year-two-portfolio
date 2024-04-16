import Navbar from '../nav'
import data from './data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <Navbar />
      <p id="project-height">Projects</p>
      <div className="projects-container">
      {data.map((item) => (
          <div key={item.id} className='colorful-border card-container'>
            <div className='text-center project-cards'>
              <h1>{item.title}</h1>
              <Image src={item.image}
              width={500}
              height={500}
              alt={item.title}
              />
              <p>{item.description}</p>
              <div>
                <Link href={item.github} className='project-btn-container'><button className='project-btn'>GitHub</button></Link>
                <Link href={item.url} className='project-btn-container'><button className='project-btn'>Visit</button></Link>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default page