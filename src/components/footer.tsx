import React from 'react'
import { GENERAL_TEXT } from '../constants/general-constants'
import { MetaLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export function Footer() {
  // Function to determine if the NavLink is active
  const isActive = (path: string) => {
    // eslint-disable-next-line no-restricted-globals
    return location.pathname === path
  }

  return (
    <div className="py-2 px-4 bg-slate-950">
      <div className="navbar-container flex bg-slate-950 px-[24px] justify-between items-center py-1 rounded-full">
        <div>
          <p className="text-slate-600 font-thin lg:text-xs text-[8px]">
            &#9400; 2023 by {GENERAL_TEXT.NAME}
          </p>
        </div>
        <div className="text-slate-600 font-thin lg:text-base text-[10px] flex gap-5">
          <a href='#'>
            <MetaLogo className="hover:text-white" weight="thin" href='#' />
          </a>
          <a href='https://www.instagram.com/avinashb_.31?igsh=MWk3amdjejJ3Y3d5dg%3D%3D&utm_source=qr'>
            <InstagramLogo className="hover:text-white" weight="thin" />
          </a>
          <a href='https://www.linkedin.com/in/avinash-balajee-22481a163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
            <LinkedinLogo className="hover:text-white" weight="thin" />
          </a>
          <a href='https://github.com/avinashbalajee31'>
            <GithubLogo className="hover:text-white" weight="thin" href='https://github.com/avinashbalajee31' />
          </a>
        </div>
      </div>
    </div>
  )
}
