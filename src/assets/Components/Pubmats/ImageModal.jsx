import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

function ImageModal({ src, onClose }) {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
                onClick={onClose}
            >
                {/* Close Button */}
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className='absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/20 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10'
                    onClick={onClose}
                >
                    <IoClose size={24} />
                </motion.button>

                {/* Image Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className='relative max-w-5xl max-h-[90vh] w-full'
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={src}
                        alt="Full size"
                        className='w-full h-full object-contain rounded-lg shadow-2xl'
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ImageModal
