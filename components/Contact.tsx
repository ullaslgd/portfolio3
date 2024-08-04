import React from 'react'
import { SocialArray } from '@/constants'
import Image from 'next/image'

const Contact = () => {
  return (
     <section id="socials "className='flex flex-col   gap- m-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
      <h3 className='font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent text-2xl'> Socials</h3>
      <div className='flex justify-around items-center gap-4w pt-5'>
         {SocialArray.map((item,i)=>(
            <a key={i} href={item.link} target="_blank"><span ><Image className="rounded-[100px]"src={item.icon} alt="icon" height={40} width={40}/></span></a>
         ))}
      </div>

     </section>
  )
}

export default Contact
