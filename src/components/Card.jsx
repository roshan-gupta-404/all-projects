import React from 'react'
import { FaGithub } from "react-icons/fa";

function Card({ project }) {
  const keys = Object.keys(project.tech)
  console.log(keys);
  return (
    <>
      <div className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md shadow-slate-500  w-full max-w-[64rem] hover:scale-105 duration-300">
        <div className="relative md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white md:rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={project.imgUrl}
            alt="card-image" className="object-cover w-full h-full" />
        </div>
        <div className="px-6 py-2 md:w-3/5">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {project.title}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {project.desc}
          </p>
          <div id='details'>
            {keys.map((key) => (
              <div key={`${project.id+key}`}>
                <div className='flex my-2'>
                  <div className='w-1/4'>
                    <h6 className=''>{key}</h6>
                  </div>
                  <div className='w-3/5'>
                    <span className='text-lg font-bold'>{project.tech[key]}</span>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className='flex justify-end mt-4'>
            <a href={project.gitHub} target='_blank' className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-sm font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button">
                <span className='text-lg'><FaGithub /></span> Git Hub
              </button>
            </a>
            <a href={project.demoLink} target='_blank' className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-sm font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button">
                Live Demo<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card