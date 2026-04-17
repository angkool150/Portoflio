import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaFacebook, FaTiktok, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/angkool150', label: 'GitHub' },
        { icon: FaFacebook, url: 'https://www.facebook.com/jannedenzelle.tagupa', label: 'Facebook' },
        { icon: FaTiktok, url: 'https://www.tiktok.com/@angkool_150', label: 'TikTok' },
        { icon: FaEnvelope, url: 'denzelle.tagupa@gmail.com', label: 'Email' }
    ]
    const { isLight } = useTheme()

    return (
        <footer className={`w-full  border-t-2 border-white/20 ${isLight ? 'bg-glass-dark' : 'bg-glass'} py-8 px-4 md:py-12`}>
            <div className='max-w-7xl mx-auto'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center md:text-left'
                    >
                        <h3 className='text-xl md:text-2xl font-bold mb-3 hover:text-shadow-glow transition-all duration-300 cursor-pointer text-white'>
                            Portfolio
                        </h3>
                        <p className={`text-sm md:text-base 0  text-white`}>
                            Creating impactful visuals and bringing ideas to life through design and development.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='text-center'
                    >
                        <h3 className='text-xl md:text-2xl font-bold mb-3 hover:text-shadow-glow transition-all duration-300 cursor-pointer text-white'>
                            Quick Links
                        </h3>
                        <ul className='space-y-2'>
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className={`text-sm md:text-base text-white hover:text-white hover:text-shadow-glow transition-all duration-300`}
                                    >
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-center md:text-right'
                    >
                        <h3 className='text-xl md:text-2xl font-bold mb-3 hover:text-shadow-glow transition-all duration-300 cursor-pointer text-white'>
                            Connect
                        </h3>
                        <div className='flex justify-center md:justify-end gap-4 text-white'>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className={`w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full flex items-center justify-center`}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 360,
                                        boxShadow: isLight ? '0 0 0px rgba(255, 255, 255, 0)' : '0 0 20px rgba(255, 255, 255, 0.8)'
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mb-6'
                />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`text-center text-sm md:text-base  text-white`}
                >
                    <p className='flex items-center justify-center gap-2 flex-wrap'>
                        <span>© {currentYear} Portfolio. Made with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <FaHeart className='text-red-500 inline' />
                        </motion.span>
                        <span>All rights reserved.</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
