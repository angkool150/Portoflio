import React from 'react'

function InfoCard({ icon, label, value }) {
    return (
        <div className='bg-glass w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-[70px] rounded-2xl p-4 border-1 border-white flex gap-3 items-center hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300'>
            {/* Icon */}
            <span className='border-white border-1 w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0'>
                {icon}
            </span>

            {/* Label and Value */}
            <div className='flex-1 min-w-0'>
                <p className='text-[13px] font-medium truncate'>{label}</p>
                <p className='text-[13px] font-semibold truncate'>{value}</p>
            </div>
        </div>
    )
}

export default InfoCard