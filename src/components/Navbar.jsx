import React from 'react'
import Button from './common/Button'

const Navbar = () => {
  return (
    <div className='container mx-auto mt-8 flex items-center justify-between'>
      <h1 className='font-bold text-3xl'><span className='text-primary'>ross</span>tech</h1>
      <ul className='flex items-center gap-8 -ml-24'>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300'>About us</li>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300'>How it works ?</li>
        <li className='hover:text-purple-700 cursor-pointer ease-in-out duration-300'>Contact  us</li>
      </ul>
      <Button className='' variant='outlined' value='Login'/>
    </div>
  )
}

export default Navbar