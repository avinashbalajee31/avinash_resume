import React from 'react'
import { Star } from '@phosphor-icons/react'

export function SkillsScreen() {
  const backendSkillDetails = [
    {
      title: 'JavaScript',
      rating: 9,
    },
    {
      title: 'TypeScript',
      rating: 9,
    },
    {
      title: 'Serverless',
      rating: 8,
    },
    {
      title: 'NodeJs',
      rating: 9,
    },
    {
      title: 'SpringBoot',
      rating: 8,
    },
    {
      title: '.Net',
      rating: 8,
    },
    {
      title: 'Python',
      rating: 8,
    },
  ]
  const frontendSkillDetails = [
    {
      title: 'Angular',
      rating: 7,
    },
    {
      title: 'React',
      rating: 10,
    },
    {
      title: 'HTML',
      rating: 10,
    },
    {
      title: 'CSS',
      rating: 10,
    },
    {
      title: 'React Native',
      rating: 9,
    },
    {
      title: 'Swift',
      rating: 8,
    },
    {
      title: 'Kotlin',
      rating: 8,
    },
  ]
  const cloudSkillDetails = [
    {
      title: 'EC2',
      rating: 8,
    },
    {
      title: 'API Gateway',
      rating: 8,
    },
    {
      title: 'Lambda',
      rating: 9,
    },
    {
      title: 'Cognito',
      rating: 10,
    },
    {
      title: 'S3',
      rating: 10,
    },
    {
      title: 'CodeBuild and CodeCommit',
      rating: 8,
    },
    {
      title: 'CDK',
      rating: 8,
    },
    {
      title: 'Comprehend',
      rating: 8,
    },
    {
      title: 'Cloud Formation',
      rating: 8,
    },
  ]
  const DBSkillDetails = [
    {
      title: 'MySQL',
      rating: 8,
    },
    {
      title: 'DynamoDB',
      rating: 9,
    },
    {
      title: 'RDS',
      rating: 8,
    },
  ]
  return (
    <div className="flex flex-col gap-3 xl:gap-20 px-4 bg-slate-950 ">
      <div className="flex justify-center">
        <div className="text-slate-300 hidden sm:flex text-4xl font-thin">
          Skills
        </div>
      </div>
      <div className="">
        <div className="grid sm:grid-cols-7 sm:grid-rows-3 grid-cols-1 grid-rows-2 gap-2 ">
          <div className="sm:row-span-3 row-start-1">
            <p className="mb-4 text-lg font-thin leading-none text-slate-300">
              Backend
            </p>
            {backendSkillDetails.map((DBSkillDetail, index) => (
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {DBSkillDetail.title}
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: `${DBSkillDetail.rating * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {DBSkillDetail.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:row-span-3 sm:col-start-3 sm:row-start-1 row-start-2">
            <p className="mb-4 text-lg font-thin leading-none text-slate-300">
              Frontend
            </p>

            {frontendSkillDetails.map((frontendSkillDetail, index) => (
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {frontendSkillDetail.title}
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: `${frontendSkillDetail.rating * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {frontendSkillDetail.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:row-span-3 sm:col-start-5 sm:row-start-1 row-start-3">
            <p className="mb-4 text-lg font-thin leading-none text-slate-300">
              Cloud
            </p>

            {cloudSkillDetails.map((cloudSkillDetail, index) => (
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {cloudSkillDetail.title}
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: `${cloudSkillDetail.rating * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {cloudSkillDetail.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:row-span-3 sm:col-start-7 sm:row-start-1 row-start-4">
            <p className="mb-4 text-lg font-thin leading-none text-slate-300">
              Database
            </p>

            {DBSkillDetails.map((DBSkillDetail, index) => (
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {DBSkillDetail.title}
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: `${DBSkillDetail.rating * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {DBSkillDetail.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
