import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section id="about" className='flex  flex-col gap-1 mt-[40px] w-[90%] max-w-[450px] rounded-[15px] bg-[#FFFEFD] p-5 pt-6'>
        <h3>About Me</h3>
        <p>A 19-year-old Full Stack Web Application and Game Developer proficient in JavaScript, React, Next.js, and game development framework Unreal Engine 5.</p>
        <div className='flex gap-4 py-4 justify-start'>
        <a href="" className="text-[#5865f2]">#webdeveloper</a>
        <a href="" className="text-[#5865f2]">#gamedeveloper</a>
        </div>
    </section>
  )
}

export default About