import React from 'react'
import { motion } from 'framer-motion'
import WhiteLogo from '../../Images/AngkoolLogo/Logo-White.svg'

function LoadingScreen() {
    return (
        <motion.div
            className='fixed inset-0 bg-darkBG z-[100] flex flex-col items-center justify-center'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={WhiteLogo}
                alt="Loading"
                className='w-32 h-32 mb-8 border-2 border-white rounded-full'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [0.8, 1.1, 1],
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.5
                }}
            />

            <motion.div className='flex gap-2'>
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className='w-3 h-3 bg-white rounded-full'
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: index * 0.2
                        }}
                    />
                ))}
            </motion.div>

            <motion.p
                className='text-white mt-6 text-lg font-medium'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Loading...
            </motion.p>
        </motion.div>
    )
}

export default LoadingScreen
