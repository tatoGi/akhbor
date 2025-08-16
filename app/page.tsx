'use client'

import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Auto-redirect after 10 seconds
    const timer = setTimeout(() => {
      window.location.href = 'http://www.akbor.com.tr/'
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop playsInline preload="auto">
        <source src="/Akhbor_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
    </>
  )
}
