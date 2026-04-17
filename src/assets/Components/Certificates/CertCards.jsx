// CertCards.jsx

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'


function CertCards({ cert, imagePosition = '50% 50%' }) {

    const { isLight } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.div
                className={` ${isLight ? 'bg-glass-dark' : 'bg-glass'} w-full sm:w-80 md:w-72 lg:w-80 h-50  border-2 border-white rounded-2xl overflow-hidden cursor-pointer flex-shrink-0`}
                whileHover={{
                    scale: 1.05,
                    boxShadow: isLight ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
            >
                <div className='w-full h-30'>
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className='w-full h-full object-cover'
                        style={{ objectPosition: imagePosition }}
                    />
                </div>
                <div className='pt-2 pr-5 text-sm text-left pl-5 flex items-center'>
                    <p className='font-semibold text-white'>{cert.title}</p>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className='fixed top-4 right-4 w-12 h-12 bg-glass border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg z-10'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                        <motion.div
                            className='relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center'
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className='max-w-full max-h-full object-contain rounded-2xl border-2 border-white shadow-2xl'
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default CertCards
