import React from 'react'
import Button from './common/Button'

const Hero = () => {
  return (
    <div className='flex container mx-auto mt-24'>
      <div className='flex-1 gap-4 pt-8'>
        <h1 className='text-[46px] font-bold leading-relaxed'>
          <span className='relative'>
            Revolutionizing<div className='absolute bottom-2 -left-2 w-full h-5 bg-violet-500 bg-opacity-30'></div>
          </span>
          <br />
          The Supply Chain.
        </h1>
        <p className='max-w-[600px] text-justified'>Welcome to Rosstech, where we revolutionize the trading of fruits and vegetables with our dedicated platform. As a part of Rosstech, you can now streamline your operations seamlessly. Connect with our producers, suppliers, transport providers, and retailers effortlessly, all within our unified system. Manage quality, track deliveries, and resolve disputes with ease</p>
        <Button className='mt-8' value='Get Started'/>
      </div>
      <div className='flex flex-1'>
        <img src="./hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero