import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
      <video
        className='w-full rounded-[70px] h-full object-cover'
        autoPlay
        loop
        muted
        src="../public/fonts/calm.mp4"
      />
    </div>
  )
}

export default Video
