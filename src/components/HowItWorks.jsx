import React from 'react'
import HowItWorksStep from './HowItWorksStep'

const HOW_IT_WORKS = [
    {
        id: 1,
        heading: 'Sign Up',
        paragraph: 'Create your account tailored to your role—producer, supplier, transport provider, or retailer.',
        quote: 'Watch the video to see how easy it is to get started.',
        video: ''
    },
    {
        id: 2,
        heading: 'Centralized Dashboard',
        paragraph: 'Access your personalized dashboard to manage orders, track deliveries, and communicate seamlessly with other parties involved in the supply chain.',
        quote: 'See how the centralized dashboard simplifies your workflow.',
        video: ''
    },
    {
        id: 3,
        heading: 'Real-Time Updates',
        paragraph: 'Stay informed with real-time notifications and live transaction views. Receive instant updates on order statuses, delivery confirmations, and any issues that arise.',
        quote: 'Learn how real-time updates keep you informed.',
        video: ''
    },
    {
        id: 4,
        heading: 'Efficient Dispute Resolution',
        paragraph: 'Handle quality or quantity disputes swiftly through our streamlined support case system. Upload documents, communicate with relevant parties, and work towards automated resolutions.',
        quote: 'Understand our efficient dispute resolution process.',
        video: ''
    },
]

const HowItWorks = () => {
  return (
    <div>
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