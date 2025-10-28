import React from 'react'

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="/bg_Video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    </div>
  )
}

export default Video