'use client'

import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Auto-redirect after 10 seconds
    const timer = setTimeout(() => {
      window.location.href = 'http://www.akbor.com.tr/'
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    
      
      <div className="main-container">
        <div className="logo-section">
          <div className="company-name">
            <span className="ak">AK</span><span className="bor">BOR</span><sup>®</sup>
          </div>
          <div className="caucasus">CAUCASUS</div>
        </div>

        <div className="slogan">
          «МЫ ДАЛИ НАПРАВЛЕНИЕ ВОДЕ...»
        </div>
        
        <div className="sub-slogan">
          «МЫ ДАЛИ НАПРАВЛЕНИЕ ВОДЕ....»
        </div>

        <div className="contact-info">
          <div className="contact-left">
            Адрес: Грузия, Тбилиси;<br />
            Проспект Важа-Пшавела, 29а
          </div>
          <div className="contact-right">
            www.akborcaucasus.com;<br />
            Mob: +(995) 511 449921;
          </div>
        </div>
      </div>
    </>
  )
}
