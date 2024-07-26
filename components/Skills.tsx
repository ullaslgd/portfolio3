import React from 'react'
import { SkillsArray, BSkillsArray, GSkillsArray } from '../constants/index';
 
import Image from 'next/image';

const Skills = () => {
  return (
    <section id="skills "className='flex  gap-1 mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
        <div className='lg:max-w-[40vw] flex flex-col'>
            <h3 className="font-semibold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Skill Set</h3>
        <div className="pt-4 flex flex-wrap ">
            <h5 className="flex items-center justify-center text-[18px]">Frontend -</h5> 
            {SkillsArray.map((skill, index) => (
                
                <span key={index} className=" p-[3px] px-[10px] text-[13px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]">{skill.skillName}</span>
            ))}
            
        </div>
        <div className="pt-4 flex flex-wrap">
            <h5  className="flex items-center justify-center text-[18px]">Backend -</h5>
            {BSkillsArray.map((skill, index) => (
                <span  className=" p-[3px] px-[10px] text-[13px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]" key={index}>{skill.skillName}</span>
            ))}
        </div>
        <div className="pt-4 flex flex-wrap">
            <h5  className="flex items-center justify-center text-[18px]">Game -</h5>
            {GSkillsArray.map((skill, index) => (
                <span  className=" p-[3px] px-[10px] text-[13px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]" key={index}>{skill.skillName}</span>
            ))}
        </div>
        </div>
       

    </section>
  )
}

export default Skills