import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sublimations from '../../../data/SubliLayouts.json';
import SublimationCards from './SublimationCards.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Sublimation() {
    const { isLight } = useTheme();
    const [selected, setSelected] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);

    const openModal = (item) => {
        setSelected(item);
        setActiveIndex(0);
        setZoomed(false);
    };

    const prev = () => setActiveIndex((i) => (i - 1 + selected.images.length) % selected.images.length);
    const next = () => setActiveIndex((i) => (i + 1) % selected.images.length);

    return (
        <div id='sublimation' className='max-w-7xl mx-auto w-full px-4'>
            <div className='flex items-center justify-center flex-col mb-8 mt-16'>
                <motion.h1
                    className={`text-3xl md:text-5xl lg:text-[50px] font-bold ${isLight ? 'text-black' : 'text-white'}`}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, textShadow: isLight ? 'none' : '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    Sublimations
                </motion.h1>
                <motion.h3
                    className={`text-center text-sm md:text-lg lg:text-[15px] pt-5 max-w-4xl ${isLight ? 'text-black' : 'text-white'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Creative sublimation designs crafted with clean layouts, bold visuals, and attention to detail.
                </motion.h3>
            </div>

            <div className='flex flex-wrap justify-center gap-6 px-4'>
                {sublimations.Sublimations.map((item) => (
                    <SublimationCards
                        key={item.id}
                        src={item.thumbnail}
                        alt={item.title}
                        onClick={() => openModal(item)}
                    />
                ))}
            </div>

            {/* Product View Modal */}
            {selected && !zoomed && (
                <div className='fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-6' onClick={() => setSelected(null)}>
                    <button className='absolute top-5 right-5 text-white' onClick={() => setSelected(null)}>
                        <FiX size={28} />
                    </button>

                    <h2 className='text-white text-xl font-semibold mb-6'>{selected.title}</h2>

                    <div className='flex flex-col items-center gap-6' onClick={(e) => e.stopPropagation()}>
                        {/* Main Image */}
                        <div className='relative'>
                            <img
                                src={selected.images[activeIndex]}
                                alt={`${selected.title} ${activeIndex + 1}`}
                                className='w-80 h-80 md:w-[650px] md:h-[650px] object-cover rounded-2xl border-2 border-white cursor-zoom-in'
                                onClick={() => setZoomed(true)}
                            />
                            <button onClick={prev} className='absolute left-[-50px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300'>
                                <FiChevronLeft size={32} />
                            </button>
                            <button onClick={next} className='absolute right-[-50px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300'>
                                <FiChevronRight size={32} />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className='flex gap-3'>
                            {selected.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`thumb-${i}`}
                                    onClick={() => setActiveIndex(i)}
                                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${i === activeIndex ? 'border-white scale-110' : 'border-white/30 opacity-60 hover:opacity-100'}`}
                                />
                            ))}
                        </div>

                        <p className='text-white/50 text-xs'>Click image to zoom</p>
                    </div>
                </div>
            )}

            {/* Zoomed / Fullscreen View */}
            {zoomed && selected && (
                <div className='fixed inset-0 z-60 bg-black flex items-center justify-center' onClick={() => setZoomed(false)}>
                    <button className='absolute top-5 right-5 text-white z-10' onClick={() => setZoomed(false)}>
                        <FiX size={28} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); prev(); }} className='absolute left-5 text-white'>
                        <FiChevronLeft size={40} />
                    </button>
                    <img
                        src={selected.images[activeIndex]}
                        alt={`${selected.title} zoomed`}
                        className='max-w-full max-h-full object-contain'
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button onClick={(e) => { e.stopPropagation(); next(); }} className='absolute right-5 text-white'>
                        <FiChevronRight size={40} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Sublimation;
