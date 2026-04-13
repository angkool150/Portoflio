import React from 'react'
import { motion } from 'framer-motion'
import Card from './InforCard.jsx'
import { MdLocationOn } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import YourPhoto from '../../Images/Angkool-Pic.png';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

function About() {
    return (
        <div className='text-white w-full flex flex-col items-center justify-center min-h-screen py-20 px-6 sm:px-12  relative overflow-hidden'>

            {/* Mobile & MD Photo - visible only below lg */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='block lg:hidden mb-8'
            >
                <motion.img
                    src={YourPhoto}
                    alt="Angkool"
                    className='w-[200px] h-[280px] object-cover object-top rounded-lg border-2 border-white cursor-pointer'
                    initial={{ filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))' }}
                    whileHover={{
                        scale: 1.05,
                        filter: 'drop-shadow(0 0 25px rgba(255,255,255,0.8))'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Row: Name + Description */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center w-full max-w-[1300px] gap-10 lg:gap-20 relative z-0'>

                {/* Left: Name + Socials */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-auto'
                >
                    <motion.div
                        className='flex flex-col gap-0 cursor-pointer'
                        initial={{ filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))' }}
                        whileHover={{
                            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.7))'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-[0.9]'>ANGKOOL</h1>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-[0.9] ml-10 sm:ml-20 lg:ml-30'>TAGUPA</h1>
                    </motion.div>

                    <div className='mt-6 lg:mt-10'>
                        <div className='flex flex-col sm:flex-row sm:justify-between gap-3'>
                            <span className='flex items-center gap-3'>
                                <FaFacebook size={20} />
                                <p className='text-sm'>Angkool Denzelle Tagupa</p>
                            </span>
                            <span className='flex items-center gap-3 sm:mr-10'>
                                <FaInstagram size={20} />
                                <p className='text-sm'>@Ice_Kooled</p>
                            </span>
                        </div>
                        <div className='flex items-center gap-3 pt-3'>
                            <FaTiktok size={20} />
                            <p className='text-sm'>Angkool Works and Effects</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Description + Roles */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-96 relative z-30'
                >
                    <p className='text-sm leading-relaxed'>
                        I'm a passionate all-around editor with experience in video editing, layout design, and custom apparel such as t-shirts, jerseys, and jackets. I focus on delivering high-quality visuals that are both creative and effective.
                    </p>
                    <br />
                    <p className='text-sm leading-relaxed'>
                        I continuously improve my skills and adapt to new creative challenges, delivering every project with dedication, creativity, and quality.
                    </p>

                    <div className='flex flex-col pt-6'>
                        <p className='font-semibold'>Videoeditor</p>
                        <p className='font-semibold'>Layout Artist</p>
                        <p className='font-semibold'>3D Artist</p>
                    </div>
                </motion.div>
            </div>

            {/* Circle outline - Large screens only */}
            <div className='absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block'>
                <div className='w-[380px] h-[380px] rounded-full border-2 border-white' />
            </div>

            {/* Photo - Large screens only */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block'
            >
                <motion.img
                    src={YourPhoto}
                    alt="Angkool"
                    className='w-[420px] h-[600px] object-cover object-top cursor-pointer'
                    initial={{ filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))' }}
                    whileHover={{
                        scale: 1.05,
                        filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8))'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Bottom: Info Cards */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row justify-between w-full max-w-[1300px] gap-6 mt-16 relative z-30'
            >
                <div className='flex flex-col gap-4 w-full sm:w-auto'>
                    <Card icon={<MdLocationOn size={24} className='text-white' />} label="Location" value="Montevista Davao de Oro" />
                    <Card icon={<BsBriefcase size={24} className='text-white' />} label="Experiance" value="3+ Years" />
                </div>
                <div className='flex flex-col gap-4 w-full sm:w-auto'>
                    <Card icon={<FaGraduationCap size={24} className='text-white' />} label="Education" value="BS Information Technology" />
                    <Card icon={<FaGraduationCap size={24} className='text-white' />} label="NC II" value="Computer System Servicing" />
                </div>
            </motion.div>

        </div>
    )
}

export default About