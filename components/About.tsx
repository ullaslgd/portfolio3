import React from 'react'
import Skills from './Skills'
import Image from 'next/image'
import Aboutpic from '/public/2.jpg'

const About = () => {
  return (
    <section id="about" className='flex justify-evenly flex-row-reverse gap-1 mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
       <div className='lg:max-w-[40vw] flex flex-col justify-start md:max-w-[30vw]'>
        <h3 className="font-semibold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-Poppins">About Me</h3>
        <p className="lg:text-[20px] text-[16px] mt-6 text-gray-800 font-Poppins">Hey, I’m a 21-year-old web developer and data anaylst who’s really passionate about creating great digital experiences. I’m skilled in React.js and python, and I love building apps that work smoothly across web. I’m always curious about how things work and love diving into new technologies to see how they can make projects better, faster, or more fun to use..</p>
        {/* <p className="lg:text-[20px] text-[16px] mt-6 text-gray-800 max-sm:hidden font-Poppins">Whether it's optimizing a web app or building a mobile experience, I enjoy the challenge of turning ideas into real, functional solutions. I’m always looking for ways to improve and push the boundaries of what can be done with the tools we have today.

</p> */}
        <div className='flex gap-4 py-4 justify-start text-[16px]'>
        <a href="#" className="text-[#5865f2] hover:text-[#6300f7] font-Poppins">#webdeveloper</a>
        <a href="#" className="text-[#5865f2] hover:text-[#6300f7] font-Poppins">#dataanaylst</a>
        </div>
        </div>
        <div className='max-sm:hidden max-md:hidden'>
            <Image src={Aboutpic} alt='about' height={400} className="rounded-[23px]"/>
        </div>
    </section>
  )
}

export default About
