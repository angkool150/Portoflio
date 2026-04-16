import React from 'react'

function ImageCard({ src, alt = "image", onClick }) {
    return (

        <div 
            className='w-60 h-60 bg-glass flex items-center justify-center border-2 border-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]'
            onClick={onClick}
        >
            <div className='w-50 h-50 overflow-hidden'>
                <img src={src} alt={alt} className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default ImageCard