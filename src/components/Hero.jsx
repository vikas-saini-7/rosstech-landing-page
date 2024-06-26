import React from 'react';
import Button from './common/Button';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <div className='flex container mx-auto md:mt-12 flex-col-reverse md:flex-row'>
      <div className='flex-1 gap-4 pt-8'>
        <motion.h1 variants={textVariants} initial="hidden" animate="visible" className='text-[36px] md:text-[46px] font-bold leading-relaxed'>
          <span className='relative'>
            Revolutionizing<div className='absolute bottom-2 -left-2 w-full h-5 bg-violet-500 bg-opacity-30'></div>
          </span>
          <br />
          The Supply Chain.
        </motion.h1>
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