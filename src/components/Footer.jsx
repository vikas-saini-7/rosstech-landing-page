import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto px-[8%] py-10'>
          <div className='flex flex-col md:flex-row text-center md:text-left justify-between items-center pb-16 p-8'>
            <div className='mb-12 md:mb-0'>
              <h1 className='font-bold text-3xl'><span className='text-primary'>ross</span>tech</h1>
              <p className='mb-8'>Connecting Your Supply Chain Seamlessly</p>
              <h2>Contact us -</h2>
              <p>company@gmail.com</p>
            </div>
            <ul className='grid grid-cols-2 gap-x-12 gap-y-6'>
              <li className='text-center md:text-xl cursor-pointer ease-in-out duration-100 hover:underline'>Instagram</li>
              <li className='text-center md:text-xl cursor-pointer ease-in-out duration-100 hover:underline'>Facebook</li>
              <li className='text-center md:text-xl cursor-pointer ease-in-out duration-100 hover:underline'>Twitter</li>
              <li className='text-center md:text-xl cursor-pointer ease-in-out duration-100 hover:underline'>Linkdein</li>
            </ul>
          </div>
          <div className='text-center pt-12 border-t border-gray-500'>&copy; Rosstech 2024, All rights reserved </div>
      </div>
    </div>
  )
}

export default Footer