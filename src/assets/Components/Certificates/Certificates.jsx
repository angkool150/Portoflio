import React from 'react'
import { motion } from 'framer-motion';
import CertCard from './CertCards.jsx';
import cert from '../../../data/certificates.json'
import { useTheme } from '../context/ThemeContext.jsx'
import { SkeletonCard, SkeletonText } from '../Skeleton/Skeleton.jsx'


function Certificates({ loading = false }) {
    const { isLight } = useTheme()

    if (loading) {
        return (
            <motion.div
                key="certificates-skeleton"
                id='certificates'
                aria-busy="true"
                aria-live="polite"
                role="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full min-h-screen overflow-x-hidden py-20 md:py-10 flex flex-col items-center justify-center'
            >
                <span className="sr-only">Loading certificates...</span>
                <div className={`${isLight ? 'text-black' : 'text-white'} px-4 mt-16 md:mt-0 w-full`}>
                    <div className='h-30 flex items-center justify-center'>
                        <SkeletonText lines={1} widths={['260px']} lineClassName='h-10 md:h-12' className='max-w-[260px]' />
                    </div>
                    <SkeletonText lines={2} widths={['100%', '68%']} className='mx-auto mb-10 max-w-3xl px-4' />

                    <div className='flex flex-wrap items-center justify-center w-full gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-20'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard
                                key={index}
                                media
                                mediaClassName='h-30'
                                lines={1}
                                className='w-full sm:w-80 md:w-72 lg:w-80 h-50 flex-shrink-0'
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            key="certificates-content"
            id='certificates'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className='w-full min-h-screen overflow-x-hidden py-20 md:py-10 flex flex-col items-center justify-center'
        >
            <div className={` ${isLight ? 'text-black' : 'text-white'} px-4 mt-16 md:mt-0`}>
                <div className='h-30 flex items-center justify-center'>
                    <motion.h1
                        className='font-bold text-3xl md:text-5xl lg:text-[50px] font-sans cursor-pointer text-center pb-5 '
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
                        Certificates
                    </motion.h1>
                </div>
                <motion.p
                    className='text-center mb-10 text-sm md:text-base px-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    "Recognized certifications that reflect my skills, training, and commitment to continuous growth in my field."
                </motion.p>


                <div className='flex flex-wrap items-center justify-center w-full gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-20'>
                    {cert.Certificates.slice(0, 4).map((item, index) => (
                        <CertCard
                            key={index}
                            cert={{
                                image: item.url,
                                title: item.title
                            }}
                            imagePosition='top'
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Certificates
