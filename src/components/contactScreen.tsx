import React from 'react'
import portfolio_image from '../assets/portfolio_image.png'
import {
  Phone,
  InstagramLogo,
  MetaLogo,
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react'

export function ContactScreen() {
  return (
    <div className="bg-slate-950 flex flex-col items-center justify-center gap-7">
      <h1 className="text-4xl font-thin text-slate-300">Contact</h1>
      <div className='bg-slate-900 p-3 sm:p-5 lg:gap-7 gap-6  rounded-xl flex flex-col'>
        <div className="gap-3 flex flex-col items-center justify-center">
          <div className=" lg:text-xl text-[12px] font-thin text-slate-300 ">
            <p>Avinash Balajee R M</p>
          </div>
          <div className=" lg:text-base text-[12px] font-thin text-slate-500 ">
            <p>Software Engineer</p>
          </div>
          <div className=" lg:text-base text-[12px] font-thin text-slate-500 ">
            <a href="tell:638278532">+91-638278532</a>
          </div>
          <div className=" lg:text-base text-[12px] font-thin text-slate-500">
            <a href="mailto:avinashbalajee03@gmail.com">
              avinashbalajee03@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <p className="lg:text-lg text-[12px] font-thin text-slate-300 ">
            Hey, please feel free to reach out via these platforms
          </p>
        </div>
        <div className=" text-4xl gap-5 sm:gap-10 text-slate-400 flex justify-center">
          <a  href='#'>
          <MetaLogo className="hover:text-white" weight="thin"  href='#'/>
          </a>
          <a href='https://www.instagram.com/avinashb_.31?igsh=MWk3amdjejJ3Y3d5dg%3D%3D&utm_source=qr'>
          <InstagramLogo className="hover:text-white" weight="thin" />
          </a>
          <a href='https://www.linkedin.com/in/avinash-balajee-22481a163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
          <LinkedinLogo className="hover:text-white" weight="thin" />
          </a>
          <a href='https://github.com/avinashbalajee31'>
          <GithubLogo className="hover:text-white" weight="thin" href='https://github.com/avinashbalajee31'/>
          </a>
          <a href='mailto:avinashbalajee03@gmail.com'>
          <EnvelopeSimple className="hover:text-white" weight="thin" />
          </a>
          <a href="tel:+919789845532">
          <Phone className="hover:text-white" weight="thin" />
          </a>
        </div>
        <div className='text-center'>
          <p className=" lg:text-[10px] text-[8px] font-thin text-slate-600">AB</p>
        </div>
      </div>
    </div>
  )
}
