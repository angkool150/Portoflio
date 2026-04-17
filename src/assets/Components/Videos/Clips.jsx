import React from 'react'
import VideoCard from './VideoCard.jsx'
import data from '../../../data/videoClips.json'
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx'


function Clips() {

    const { isLight } = useTheme()
    return (
        <div id='videos' className={`w-full min-h-screen ${isLight ? 'text-black' : 'text-white'} px-4 flex flex-col justify-center items-center py-20 md:py-10}`}>
            <div className='max-w-7xl mx-auto mt-16 md:mt-0'>
                <motion.h1
                    className='font-bold text-3xl md:text-5xl lg:text-[50px] font-sans cursor-pointer text-center pb-5 mt-5'
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
                    Edited Videos
                </motion.h1>
                <h1 className='text-center text-sm md:text-base mb-10'>Carefully edited videos that combine storytelling, smooth transitions, and visual impact.</h1>

            </div>

            <div className='w-full flex flex-col items-center gap-6 px-4'>
                <div className='flex flex-wrap justify-center gap-6'>
                    <VideoCard video={data.videos[0]} />
                    <VideoCard video={data.videos[1]} />
                    <VideoCard video={data.videos[2]} />
                    <VideoCard video={data.videos[3]} />
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    <VideoCard video={data.videos[4]} />
                    <VideoCard video={data.videos[5]} />
                    <VideoCard video={data.videos[6]} />
                    <VideoCard video={data.videos[7]} />
                </div>
            </div>
        </div>
    )
}

export default Clips