import Link from 'next/link';

const Footer = () => {
  return (
    <footer class='py-5 flex justify-around sticky top-0 left-0 bg-purple-500'>
      <div class='text-lg flex flex-col items-center'>
        <button class='my-2'><Link href="https://github.com/MercutioG">GitHub</Link></button>
        <button class='my-2'><Link href="https://docs.google.com/document/d/1I6Hohf9NjKIB2RJe2O5yl927Da6IkIalJFgxf4HdSdQ/edit?usp=sharing">Resume</Link></button>
      </div>
      <div class='text-lg flex flex-col items-center'>
        <button class='my-2'><Link href="/">Home</Link></button>
        <button class='my-2'><Link href="/projects">Projects</Link></button>
      </div>
    </footer>
  )
}

export default Footer