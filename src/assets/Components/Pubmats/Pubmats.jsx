import React, { useState } from 'react'
import images from '../../../data/pubmats.json';
import ImageCard from '../../Components/Pubmats/ImageCard.jsx'
import ImageModal from '../../Components/Pubmats/ImageModal.jsx'
import './carousel.css'
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx'
import { SkeletonBlock, SkeletonText } from '../Skeleton/Skeleton.jsx'

function Pubmats({ loading = false }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const { isLight } = useTheme()

    if (loading) {
        return (
            <motion.div
                key="pubmats-skeleton"
                id='pubmats'
                aria-busy="true"
                aria-live="polite"
                role="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center'
            >
                <span className="sr-only">Loading publication materials...</span>
                <div className='max-w-6xl mx-auto w-full'>
                    <SkeletonText lines={1} widths={['190px']} lineClassName='h-10 md:h-12' className='mx-auto max-w-[190px] pb-5 mt-30' />
                    <SkeletonText lines={1} widths={['100%']} className='mx-auto mb-10 max-w-lg' />

                    <div className={`border-2 border-white/30 rounded-3xl p-4 md:p-6 backdrop-blur-lg ${isLight ? 'bg-glass-dark' : 'bg-glass'}`}>
                        {[0, 1].map((row) => (
                            <div key={row} className={`carousel-container overflow-hidden ${row === 0 ? 'mb-6' : ''}`}>
                                <div className='flex gap-4 min-w-max'>
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <SkeletonBlock key={index} className='h-60 w-60 border-2 border-white' rounded="2xl" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            key="pubmats-content"
            id='pubmats'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className='w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center'
        >
            <div className='max-w-6xl mx-auto w-full'>

                <motion.h1
                    className={`font-bold text-3xl md:text-5xl lg:text-[50px] font-sans cursor-pointer text-center pb-5 mt-30 ${isLight ? 'text-black' : 'text-white'}`}
                    initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                    whileHover={{
                        scale: 1.1,
                        textShadow: isLight ? "0 0 0px rgba(255,255,255,0)" : "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    Pubmats
                </motion.h1>
                <h1 className={`${isLight ? 'text-black' : 'text-white'} text-center mb-10 text-sm md:text-base`}>Creative publication materials designed to inform, engage, and stand out.</h1>

                {/* Carousel Container */}
                <div className={`border-2 border-white/30 rounded-3xl p-4 md:p-6 backdrop-blur-lg ${isLight ? 'bg-glass-dark' : 'bg-glass'}`}>
                    {/* Top Row - Left to Right */}
                    <div className='carousel-container mb-6 overflow-x-hidden overflow-y-visible'>
                        <div className='carousel-track carousel-left-to-right'>
                            {images.slice(0, 16).map((img, index) => (
                                <ImageCard key={index} src={img} onClick={() => setSelectedImage(img)} />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {images.slice(0, 16).map((img, index) => (
                                <ImageCard key={`duplicate-${index}`} src={img} onClick={() => setSelectedImage(img)} />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Right to Left */}
                    <div className='carousel-container overflow-x-hidden overflow-y-visible '>
                        <div className='carousel-track carousel-right-to-left'>
                            {images.slice(17, 33).map((img, index) => (
                                <ImageCard key={index} src={img} onClick={() => setSelectedImage(img)} />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {images.slice(17, 33).map((img, index) => (
                                <ImageCard key={`duplicate-${index}`} src={img} onClick={() => setSelectedImage(img)} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <ImageModal
                        src={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}

            </div>
        </motion.div >
    )
}

export default Pubmats
