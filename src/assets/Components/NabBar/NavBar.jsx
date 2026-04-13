import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhiteLogo from '../../Images/AngkoolLogo/Logo-White.svg'
import Logo from './logo.jsx'
import { FiSun, FiMenu, FiX } from "react-icons/fi";

function NavBar({ isOpen, setIsOpen }) {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='fixed top-0 left-0 w-screen h-16 border-b border-white flex items-center justify-between z-50'
            style={{
                backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.35)',
                transition: 'background-color 0.3s ease'
            }}
        >
            <span className='ml-5 border-1 border-white rounded-full'>
                <Logo src={WhiteLogo} alt="Logo" size={40} />
            </span>

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-6 items-center font-medium text-white text-[16px] mr-5'>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Home</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>About</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Skills</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Pubmats</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Sublimation</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Videos</h4>
                <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Certificates</h4>

                <button className='border-white border-2 w-10 h-10 flex items-center justify-center rounded-full text-white'>
                    <FiSun size={20} />
                </button>
            </div>

            {/* Mobile Menu Button & Sun Icon */}
            <div className='md:hidden flex items-center gap-3 mr-5'>
                <button className='border-white border-2 w-10 h-10 flex items-center justify-center rounded-full text-white'>
                    <FiSun size={20} />
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-white'
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed top-16 left-0 w-full border-b border-white md:hidden overflow-hidden z-40'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                        }}
                    >
                        <div className='flex flex-col gap-4 p-6 font-medium text-white text-[16px]'>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Home</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>About</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Skills</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Pubmats</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Sublimation</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Videos</h4>
                            <h4 className='cursor-pointer hover:text-gray-300 transition-colors'>Certificates</h4>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default NavBar