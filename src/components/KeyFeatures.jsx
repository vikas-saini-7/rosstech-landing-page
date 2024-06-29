import React from 'react';
import { motion, useInView } from 'framer-motion';

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
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    const variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center gap-8 overflow-hidden'>
        <div className='flex-1'>
            <img src="/key-features.png" alt="" />
        </div>
        <div className='flex-1'>
            <motion.h1
                className='mb-8 text-[36px] font-bold'
                >Key <span className='text-primary'>features</span> of rosstech
            </motion.h1>
            <div className='flex flex-col gap-6'>
                {FEATURES.map((item) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 1 }}
                        key={item.id} className='flex items-center gap-6'>
                        <img className='w-8' src={item.image} alt={item.image}/>
                        <p>{item.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures