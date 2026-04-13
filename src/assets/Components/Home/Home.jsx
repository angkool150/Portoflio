import React from 'react'
import { motion } from 'framer-motion'
import BigLogo from '../../Images/AngkoolLogo/Angkool-Works-and-Effects.svg'

function Home({ isOpen }) {
    return (
        <motion.div
            animate={{ paddingTop: isOpen ? '220px' : '0px' }}
            transition={{ duration: 0.3 }}
            className='px-6 sm:px-12 md:px-20 lg:px-32 xl:px-85 pt-20 h-screen bg-black/30'
        >
            {/* Big Logo */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className='pt-64 sm:pt-48 md:pt-50'
            >
                <motion.img
                    src={BigLogo}
                    alt="Angkool Works and Effects"
                    className='invert brightness-10 w-full h-[auto] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>

            {/* Two Buttons */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='w-full flex flex-col sm:flex-row gap-4 justify-center items-center mt-10'
            >
                <button className='bg-glass border-2 border-white w-40 sm:w-45 h-12 sm:h-13 rounded-3xl text-[15px] sm:text-[16px] font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105'>
                    Get in Touch
                </button>
                <button className='bg-glass border-2 border-white w-40 sm:w-45 h-12 sm:h-13 rounded-3xl text-[15px] sm:text-[16px] font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105'>
                    About
                </button>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='text-white flex flex-col items-center px-4'
            >
                <p className='text-center max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mt-10 text-[14px] sm:text-[16px] leading-relaxed'>
                    I'm a multi-skilled creative editor specializing in video editing, graphic design, and apparel layouts. From cinematic edits to eye-catching pubmats and custom jersey designs, I turn ideas into visually powerful content.
                </p>
                <p className='mb-30 text-center max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mt-10 text-[14px] sm:text-[16px] font-bold leading-relaxed'>
                    I don't just design I create visuals that connect, promote, and stand out.
                </p>
            </motion.div>

        </motion.div>
    )
}

export default Home