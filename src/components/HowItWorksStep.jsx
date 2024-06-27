import React from 'react'

const HowItWorksStep = ({item, index}) => {
    const {heading, paragraph, quote} = item;
  return (
    <div className={`flex gap-0 mb-14 ${ index%2 === 0 ? '' : 'flex-row-reverse'}`} key={item.id}>
        <div className={`w-1/2 ${ index%2 === 0 ? 'pr-14' : 'pl-14'}`}>
            <h1 className='text-[32px] underline text-primary font-semibold mb-6'>{heading}</h1>
            <p className='mb-6 max-w-[400px] text-justified'>{paragraph}</p>
            <p className='mb-6 underline text-primary text-md font-bold italic'>"{quote}"</p>
        </div>
        <div className='w-1/2 bg-gray-100 min-h-[300px] rounded'>
            
        </div>
    </div>
  )
}

export default HowItWorksStep