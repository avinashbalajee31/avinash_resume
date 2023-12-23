import React from 'react'
import portfolio_image from '../assets/portfolio_image.png'
import { MainComponentContextType } from '../constants/component-constants';
import { useMainComponent } from '../context/mainComponent.context';

export function Home() {
  const mainComponent = useMainComponent();
  
  return (
    <div className='flex flex-col md:gap-19 gap-6'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
        <div className="gap-3 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-normal text-slate-300">Hello...!</h1>
          <p className=" lg:text-lg text-[12px] font-thin text-slate-300">
            This is Avinash, Software Engineer
          </p>
          <p className=" lg:text-lg sm:text-[14px] text-[10px] font-thin text-slate-300">
            I'm a skilled software engineer with a passion for creating
            innovative solutions.
          </p>
          <p className=" lg:text-lg sm:text-[14px] text-[10px] font-thin text-slate-300">
            Proficient in diverse programming languages and developing
            user-friendly applications.
          </p>
        </div>
        <img
          src={portfolio_image}
          alt={'portfolio_image'}
          className="lg:w-[300px] lg:h-[300px] rounded-full object-cover w-[180px] h-[180px]"
        />
      </div>
      <div className='flex justify-center items-center md:gap-28  gap-5'>
        {/* buttons */}
        <button
          type="button"
          onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EXPERIENCE)}}
          className="text-slate-300 border border-slate-800 hover:bg-slate-800 font-thin rounded-lg text-sm md:px-5 py-2.5 px-2  text-center"
        >
          Experience
        </button>
        <button
          type="button"
          onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EDUCATION)}}
          className="text-slate-300 border border-slate-800 hover:bg-slate-800 font-thin rounded-lg text-sm md:px-5 py-2.5 px-2  text-center"
        >
          Education
        </button><button
          type="button"
          onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.SKILLS)}}
          className="text-slate-300 border border-slate-800 hover:bg-slate-800 font-thin rounded-lg text-sm md:px-5 py-2.5 px-2  text-center"
        >
          Skills
        </button><button
          type="button"
          onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.CONTACT)}}
          className="text-slate-300 border border-slate-800 hover:bg-slate-800 font-thin rounded-lg text-sm md:px-5 px-2 py-2.5 text-center"
        >
          Contact
        </button>
      </div>
    </div>
  )
}
