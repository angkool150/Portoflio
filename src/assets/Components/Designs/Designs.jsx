import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import Pubmats from '../Pubmats/Pubmats.jsx';
import Sublimation from '../Sublimation/Sublimation.jsx';

function Designs({ loading = false }) {
    const { isLight } = useTheme();

    return (
        <div id='designs' className='w-full pt-50'>
            <motion.h1
                className={`text-4xl md:text-8xl font-bold text-center mt-6 mb-4 ${isLight ? 'text-black' : 'text-white'}`}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, textShadow: isLight ? 'none' : '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                Designs
            </motion.h1>


            <section id='pubmats'>
                <Pubmats loading={loading} />
            </section>

            <section id='sublimation'>
                <Sublimation loading={loading} />
            </section>
        </div>
    );
}

export default Designs;
