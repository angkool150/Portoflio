import React from 'react'
import Cards from './SkillsCards'
import { SiBlender, SiCanva, SiGlovo } from "react-icons/si";
import { FiGlobe } from "react-icons/fi"
import Illustrator from '../../Images/Illustrator-logo.png'
import Capcut from '../../Images/CapCut-Logo-Video-Editing-App-Icon.png'
import Photoshop from '../../Images/Phooshop-logo.png'
import AE from '../../Images/AE-logo.png'
import { motion } from "framer-motion"





function Skills() {
    return (
        <div id='skills' className='w-full min-h-screen font-sans py-20 md:py-10 px-4 flex flex-col justify-center '>
            <div className='text-white flex items-center justify-center flex-col mb-8 md:mb-12 mt-16 md:mt-0'>
                <motion.h1
                    className='font-bold text-3xl md:text-5xl lg:text-[50px] font-sans cursor-pointer'
                    initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                    whileHover={{
                        textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    My Skills
                </motion.h1>
                <h3 className='text-center text-sm md:text-lg lg:text-[15px] pt-5 max-w-4xl'>
                    The tools I use are just the foundation
                    <br />
                    how I use them is what brings ideas to life.
                    <br />
                    Each software plays a role in creating clean, impactful, and professional visuals.
                </h3>
            </div>

            {/* Skills Cards */}
            <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 px-2 md:px-4 place-items-center'>
                <Cards
                    icon={Capcut}
                    title={"Capcut"}
                    description={"Montage, Short Films, Advertisments, Doucmentaries"}
                    iconSize={80}
                />
                <Cards
                    icon={Photoshop}
                    title={"Photoshop"}
                    description={"Edit Photos, Layout T-Shirts, Jackets, Jerseys, Singlets"}
                    iconSize={60}
                />

                <Cards
                    icon={FiGlobe}
                    title={"Web Development"}
                    description={"Javascript, HTML, CSS, REACT, JAVA"}

                />
                <Cards
                    icon={AE}
                    title={"After EFfects"}
                    description={"Simple Motion Graphics, Visual Effects, Special Effects, Compositing"}
                    iconSize={50}

                />
                <Cards
                    icon={SiBlender}
                    title={"Blender"}
                    description={"Basic 3D Modelling"}
                />

                <Cards
                    icon={SiCanva}
                    icon2={Illustrator}
                    title={"Canva, Illustrator"}
                    description={"Publication Materials, Tarpaulins, Powerpoints"}
                    icon2Size={60}
                />


            </div>

        </div>
    )
}

export default Skills