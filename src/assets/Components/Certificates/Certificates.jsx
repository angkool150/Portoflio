import React from 'react'
import { motion } from 'framer-motion';
import CertCard from './CertCards.jsx';
import cert from '../../../data/certificates.json'
import { useTheme } from '../context/ThemeContext.jsx'


function Certificates() {
    const { isLight } = useTheme()
    return (
        <div id='certificates' className='w-full min-h-screen overflow-x-hidden py-20 md:py-10 flex flex-col items-center justify-center'>
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
        </div>
    )
}

export default Certificates
