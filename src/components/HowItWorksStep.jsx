import React from 'react'

const HowItWorksStep = ({item, index}) => {
    const {heading, paragraph, quote} = item;
  return (
    <div className={`flex flex-col md:flex-row gap-0 mb-20 md:mb-14 ${ index%2 === 0 ? '' : 'md:flex-row-reverse'}`} key={item.id}>
        <div className={`md:w-1/2 ${ index%2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}>
            <h1 className='text-[32px] underline text-primary font-semibold mb-6'>{heading}</h1>
            <p className='mb-6 md:max-w-[400px] text-justified'>{paragraph}</p>
            <p className='mb-6 underline text-primary text-md font-bold italic'>"{quote}"</p>
        </div>
        <div className='md:w-1/2 bg-gray-100 rounded'>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/RXeOiIDNNek?si=nE1jFbHc8VVpqFDZ?modestbranding=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
    </div>
  )
}

export default HowItWorksStep