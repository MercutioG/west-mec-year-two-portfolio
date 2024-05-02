"use client"
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect: ')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('Cleanup')
      window.removeEventListener('resize', checkSize)
    }
  },[])
  console.log('render')
  return size;
}

export default useScreenSize;