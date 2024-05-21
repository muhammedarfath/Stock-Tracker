import React from 'react'

function LiveBg() {
  return (
    <div>
        <div className='bg-black absolute top-0 left-0 w-full h-full object-cover z-1'>
        </div>
        <video autoPlay loop muted id="background-video" className='absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm'>
            <source src='/bgvideo.mp4' type="video/mp4" />
        </video>
    </div>
  )
}

export default LiveBg
