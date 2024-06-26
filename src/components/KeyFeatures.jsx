import React from 'react'

const FEATURES = [
    {
        id: 1,
        image: '/img/feature-1.png',
        title: 'Centralized Data Repository'
    },
    {
        id: 2,
        image: '/img/feature-2.png',
        title: 'Seamless Communication'
    },
    {
        id: 3,
        image: '/img/feature-3.png',
        title: 'Real-Time Updates'
    },
]

const KeyFeatures = () => {
  return (
    <div className='container mx-auto flex items-center gap-8'>
        <div className='flex-1'>
            <img src="/key-features.png" alt="" />
        </div>
        <div className='flex-1'>
            <h1 className='mb-8 text-[36px] font-bold'>Key <span className='text-primary'>features</span> of rosstech</h1>
            <div className='flex flex-col gap-4'>
                {FEATURES.map((item) => (
                    <div key={item.id} className='flex items-center gap-4'>
                        <img className='w-8' src={item.image} alt={item.image}/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures