import React from 'react'
import HowItWorksStep from './HowItWorksStep'
import { HOW_IT_WORKS } from '../constants'

const HowItWorks = () => {
  return (
    <div className='container mx-auto'>
        <div className='text-center mb-16'>
            <h1 className='text-[36px] font-bold mb-4'>How it <span className='text-secondary'>works</span> ?</h1>
            <p className='max-w-[900px] mx-auto'>Learn how Rosstech transforms the trading of fruits and vegetables by connecting producers, suppliers, transport providers, and retailers through our unified platform. Our step-by-step video guides will walk you through the entire process, ensuring you understand how to make the most of FreshTrade.</p>
        </div>
        <div>
            {HOW_IT_WORKS.map((item, idx) => (
                <HowItWorksStep item={item} index={idx}/>
            ))}
        </div>
    </div>
  )
}

export default HowItWorks