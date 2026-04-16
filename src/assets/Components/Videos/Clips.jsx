import React from 'react'
import VideoCard from './VideoCard.jsx'
import data from '../../../data/videoClips.json'


function Clips() {
    return (
        <div className='w-full min-h-screen text-white py-10 px-4'>
            <div className='max-w-7xl mx-auto'>
                <h4 className='text-center font-bold text-3xl md:text-[50px] mb-4'>Edited Videos</h4>
                <h1 className='text-center text-sm md:text-base mb-10'>Carefully edited videos that combine storytelling, smooth transitions, and visual impact.</h1>

            </div>

            <div className='w-full flex flex-col items-center gap-6 px-4'>
                <div className='flex flex-wrap justify-center gap-6'>
                    <VideoCard video={data.videos[0]} />
                    <VideoCard video={data.videos[1]} />
                    <VideoCard video={data.videos[2]} />
                    <VideoCard video={data.videos[3]} />
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    <VideoCard video={data.videos[4]} />
                    <VideoCard video={data.videos[5]} />
                    <VideoCard video={data.videos[6]} />
                    <VideoCard video={data.videos[7]} />
                </div>
            </div>
        </div>
    )
}

export default Clips