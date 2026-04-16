import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function VideoCard({ video }) {
    const [isOpen, setIsOpen] = useState(false)

    const getYouTubeThumbnail = (url) => {
        const videoId = url.split('/embed/')[1]?.split('?')[0]
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }

    return (
        <>
            <motion.div
                className='bg-glass w-80 h-60 border-2 border-white rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0'
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
            >
                <div className='w-full h-40 relative overflow-hidden'>
                    <img
                        src={getYouTubeThumbnail(video.url)}
                        alt={video.title}
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center'
                        >
                            <svg className='w-8 h-8 text-white ml-1' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
                            </svg>
                        </motion.div>
                    </div>
                </div>
                <div className='p-4 bg-gradient-to-b from-transparent to-black/20'>
                    <h1 className='text-white font-semibold text-lg truncate'>{video.title}</h1>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className='bg-glass border-2 border-white rounded-2xl overflow-hidden max-w-4xl w-full'
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='relative' style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    src={video.url}
                                    frameBorder='0'
                                    className='absolute inset-0 w-full h-full'
                                    allowFullScreen
                                />
                            </div>
                            <div className='p-6 flex justify-between items-center'>
                                <h2 className='text-white font-semibold text-xl'>{video.title}</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className='text-white hover:text-red-400 transition-colors text-2xl font-bold'
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default VideoCard
