import React from 'react';
import { motion } from 'framer-motion';
import DarkSubli from '../../Images/T Shirt Layouts/For-Dark.png';
import LightSubli from '../../Images/T Shirt Layouts/For-Light.png';

function Sublimation() {
    return (
        <div className='w-full min-h-screen text-white py-10 px-4 mt-25'>
            <div className='max-w-7xl mx-auto'>
                <motion.h1
                    className='font-bold text-3xl md:text-5xl lg:text-[50px] font-sans cursor-pointer text-center pb-5'
                    initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    Sublimation Layouts
                </motion.h1>
                <motion.p
                    className='text-center mb-10 text-sm md:text-base'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Built for print. Designed to stand out.
                </motion.p>

                <div className='w-full px-4 md:px-20 py-8'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='rounded-2xl'
                    >
                        <motion.img
                            src={DarkSubli}
                            alt="Sublimation Layout"
                            className='w-full h-full object-cover cursor-pointer rounded-2xl'
                            whileHover={{
                                scale: 1.05,
                                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.6))'
                            }}
                            initial={{ filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Sublimation