import React, { useState } from 'react'
import images from '../../../data/pubmats.json';
import ImageCard from '../../Components/Pubmats/ImageCard.jsx'
import ImageModal from '../../Components/Pubmats/ImageModal.jsx'
import './carousel.css'

function Pubmats() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className='w-full min-h-screen py-10 px-4'>
            <div className='max-w-7xl mx-auto'>

                <h4 className='text-3xl md:text-[50px] font-bold text-white text-center mb-4'>Pubmats</h4>
                <h1 className='text-white text-center mb-10 text-sm md:text-base'>Creative publication materials designed to inform, engage, and stand out.</h1>
                
                {/* Carousel Container */}
                <div className='bg-glass border-2 border-white/30 rounded-3xl p-6 md:p-10 backdrop-blur-lg'>
                    {/* Top Row - Left to Right */}
                    <div className='carousel-container mb-6 overflow-x-hidden overflow-y-visible'>
                        <div className='carousel-track carousel-left-to-right'>
                        {images.slice(0, 16).map((img, index) => (
                            <ImageCard key={index} src={img} onClick={() => setSelectedImage(img)} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {images.slice(0, 16).map((img, index) => (
                            <ImageCard key={`duplicate-${index}`} src={img} onClick={() => setSelectedImage(img)} />
                        ))}
                        </div>
                    </div>

                    {/* Bottom Row - Right to Left */}
                    <div className='carousel-container overflow-x-hidden overflow-y-visible '>
                        <div className='carousel-track carousel-right-to-left'>
                        {images.slice(17, 33).map((img, index) => (
                            <ImageCard key={index} src={img} onClick={() => setSelectedImage(img)} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {images.slice(17, 33).map((img, index) => (
                            <ImageCard key={`duplicate-${index}`} src={img} onClick={() => setSelectedImage(img)} />
                        ))}
                        </div>
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <ImageModal
                        src={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}

            </div>
        </div>
    )
}

export default Pubmats