import React from 'react'
import { motion } from 'framer-motion'

function SkillsCards({ icon, icon2, title, description, iconSize = 40, icon2Size = 40 }) {
    const renderIcon = (src, size) => {
        if (!src) return null
        if (typeof src === 'string') {
            return <img src={src} alt="icon" style={{ width: size, height: size }} className='object-cover' />
        }
        return React.createElement(src, { size: size, color: 'white' })
    }

    return (
        <motion.div
            className='w-full max-w-[430px] min-h-[180px] bg-glass border-white border-2 rounded-xl text-white m-2 cursor-pointer transition-shadow duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.05,
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.4)',
                borderColor: 'rgba(255, 255, 255, 0.8)'
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div className='flex items-start justify-center flex-col h-full w-full p-4 sm:pl-4'>
                <div className='flex gap-2'>
                    <motion.div
                        className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border-2 border-white rounded-xl flex items-center justify-center overflow-hidden'
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        {renderIcon(icon, iconSize)}
                    </motion.div>
                    {icon2 && (
                        <motion.div
                            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border-2 border-white rounded-xl flex items-center justify-center overflow-hidden'
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            {renderIcon(icon2, icon2Size)}
                        </motion.div>
                    )}
                </div>
                <h4 className='text-lg sm:text-xl font-bold pt-2'>{title}</h4>
                <p className='text-sm sm:text-[16px]'>{description}</p>
            </div>
        </motion.div>
    )
}

export default SkillsCards