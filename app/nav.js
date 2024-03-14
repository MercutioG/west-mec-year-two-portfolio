import React from 'react'
import { Lexend } from 'next/font/google'
// 
const inter = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

const Navbar = () => {
  return (
    <nav class='p-3 flex justify-between sticky top-0 left-0 bg-purple-500'>
      <p class='text-2xl'>Mercutio's Portfolio</p>
      <div class='text-lg flex items-center'>
        <button class='mx-4'>Home</button>
        <button class='mx-4'>Projects</button>
        <button class='mx-4'>About</button>
      </div>
    </nav>
  )
}

export default Navbar