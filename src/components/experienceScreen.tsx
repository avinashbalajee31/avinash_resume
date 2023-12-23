import React from 'react'
import { GraduationCap } from '@phosphor-icons/react'
import profile_pic from '../assets/profile_image.jpg'

export function ExperienceScreen() {
  return (

    <div className='flex overflow-x-scroll gap-2 p-3'>
      <div className="max-w-sm px-3 py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zhuttle App</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project places a central emphasis on enhancing employee benefits, specifically targeting the facilitation of administrators through automation.</p>
      </div>
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alianza</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is a cross-platform video and audio conferencing application that utilizes the powerful features of AWS Chime.</p>
      </div>      
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First Student</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is a ML tech with a quicker response to automate the drivers and teachers manual work. And also ensuring safety for students.</p>
      </div>
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Janet bot</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is based on the microsoft bot builder sdk, mainly developed to introduce a bot into organization teams platform.</p>
      </div>
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AVA</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is based on various ML models and stacks introduced in-order to automate various flow with a chat bot and clickable actions.</p>
      </div>
    </div>
  )
}
