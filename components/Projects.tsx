import React from 'react'
import Image from 'next/image'
import Link from  'next/link'
import { ProjectsArray } from '@/constants'

const Projects = () => {
  return (
    <section id="projects"  className='flex  flex-col gap-1 mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
            <h3 className='font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-Poppins text-2xl'>Projects</h3>
            {ProjectsArray.map((item,index)=>(
                 <a href={item.link} key={index}> <div  className='flex gap-[20px] my-3 rounded-[10px] cursor-pointer p-4 hover:bg-[#6a748020]'>

                <div className='flex justify-center items-start'>
                     <Image className="rounded-[6px] mt-2"src={item.icon} alt="icon" height={65} width={65}/>
                </div>
                <div className='pl-3'>
                    <h5 className="text-lg font-semibold font-Poppins">{item.title}</h5>
                    <p className='text-sm py-1 text-gray-500 font-Poppins'>{item.description}</p>
                    <span className='text-xs text-[#5865f2] font-Poppins'>{item.stack}</span>
                </div>

            </div>
            </a>

            ))}
    </section>
  )
}

export default Projects
