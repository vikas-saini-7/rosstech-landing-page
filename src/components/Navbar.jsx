import React, { useState } from 'react'
import LoginPopup from './LoginPopup'
import { Button } from '@headlessui/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <div className='container mx-auto mt-8 flex items-center justify-between'>
      <h1 className='font-bold text-3xl'><span className='text-primary'>ross</span>tech</h1>
      <ul className='md:flex items-center gap-8 hidden'>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300 hover:underline'>About us</li>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300 hover:underline'>How it works ?</li>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300 hover:underline'>Contact  us</li>
      </ul>
      <Button onClick={open} className='border rounded-full px-8 py-3 border-gray-500 font-bold hover:border-violet-500 hover:text-violet-600 ease-in-out duration-300'>Login</Button>
      <LoginPopup isOpen={isOpen} close={close} />
    </div>
  )
}

export default Navbar