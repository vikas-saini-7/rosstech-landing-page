import React from 'react'
import { motion, useInView } from 'framer-motion';

const HowItWorksStep = ({item, index}) => {
    const {heading, paragraph, quote} = item;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };
  return (
    <motion.div

    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={variants}
    transition={{ duration: 1 }}
     className={`flex flex-col md:flex-row gap-0 mb-20 md:mb-14 ${ index%2 === 0 ? '' : 'md:flex-row-reverse'}`} key={item.id}>
        <div
         className={`md:w-1/2 ${ index%2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}>
            <h1 className='text-[32px] underline text-primary font-semibold mb-6'>{heading}</h1>
            <p className='mb-6 md:max-w-[400px] text-justified'>{paragraph}</p>
            <p className='mb-6 underline text-primary text-md font-bold italic'>"{quote}"</p>
        </div>
        <div className='md:w-1/2 rounded'>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/RXeOiIDNNek?si=nE1jFbHc8VVpqFDZ?modestbranding=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
    </motion.div>
  )
}

export default HowItWorksStep