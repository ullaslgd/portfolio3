import React from 'react'
import Skills from './Skills'
import Image from 'next/image'
import Aboutpic from '/public/2.jpg'

const About = () => {
  return (
    <section id="about" className='flex justify-evenly flex-row-reverse gap-1 mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
       <div className='lg:max-w-[40vw] flex flex-col justify-start md:max-w-[30vw]'>
        <h3 className="font-semibold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-Poppins">About Me</h3>
        <p className="lg:text-[20px] text-[16px] mt-6 text-gray-800 font-Poppins">A 19-year-old Full Stack Web Application and Game Developer proficient in JavaScript, React, Next.js, and game development framework Unreal Engine 5.</p>
        <p className="lg:text-[20px] text-[16px] mt-6 text-gray-800 max-sm:hidden font-Poppins">I have a passion for creating immersive gaming experiences and integrating advanced game mechanics with interactive web features. Continuously exploring new technologies and expanding my skills in both web and game development</p>
        <div className='flex gap-4 py-4 justify-start text-[16px]'>
        <a href="" className="text-[#5865f2] hover:text-[#6300f7] font-Poppins">#webdeveloper</a>
        <a href="" className="text-[#5865f2] hover:text-[#6300f7] font-Poppins">#gamedeveloper</a>
        </div>
        </div>
        <div className='max-sm:hidden max-md:hidden'>
            <Image src={Aboutpic} alt='about' height={400} className="rounded-[23px]"/>
        </div>
    </section>
  )
}

export default About
