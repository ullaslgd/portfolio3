import React from 'react'
import { SkillsArray, BSkillsArray, GSkillsArray } from '../constants/index';

const Skills = () => {
  return (
    <section id="skills "className='flex flex-col lg:absolute lg:bottom-[55%] lg:right-[38%] gap-1 mt-[40px] w-[90%] max-w-[450px] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
        <h3 className="font-semibold">Skill Set</h3>
        <div className="pt-4 flex flex-wrap">
            <h5 className="flex items-center justify-center">Frontend -</h5>
            {SkillsArray.map((skill, index) => (
                
                <span key={index} className=" p-[3px] px-[10px] text-[12px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]">{skill.skillName}</span>
            ))}
            
        </div>
        <div className="pt-4 flex flex-wrap">
            <h5  className="flex items-center justify-center">Backend -</h5>
            {BSkillsArray.map((skill, index) => (
                <span  className=" p-[3px] px-[10px] text-[12px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]" key={index}>{skill.skillName}</span>
            ))}
        </div>
        <div className="pt-4 flex flex-wrap">
            <h5  className="flex items-center justify-center">Game -</h5>
            {GSkillsArray.map((skill, index) => (
                <span  className=" p-[3px] px-[10px] text-[12px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px]" key={index}>{skill.skillName}</span>
            ))}
        </div>

    </section>
  )
}

export default Skills