import React from 'react'
import { SkillsArray  } from '../constants/index';
import skillspic from '/public/skillspic.jpg'


import Image from 'next/image';

const Skills = () => {
  return (
    <section id="skills "className='flex justify-evenly  gap-1 mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
        <div className='lg:max-w-[40vw] flex flex-col'>
            <h3 className="font-Poppins font-semibold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent mb-3">Skill Set</h3>
        <div className="pt-4 flex gap-2 flex-wrap ">
            <h5 className="flex items-center justify-center text-[18px] lg:text-[20px] font-Poppins">Frontend --</h5>
            {SkillsArray[0].map((skill, index) => (

                <span key={index} className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px] lg:text-[16px] mx-1 my-[8px] bg-[#6a748020] rounded-[4px] font-Poppins">
                <img width={20} height={20} src={skill.icon} />
              {skill.skillName}</span>
            ))}

        </div>
        <div className="pt-4 flex gap-2 flex-wrap">
            <h5  className="flex gap-2  justify-center items-center text-[18px] lg:text-[20px] font-Poppins" >Backend --</h5>
            {SkillsArray[1].map((skill, index) => (
                <span  className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px]  lg:text-[16px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px] font-Poppins" key={index}> <img width={20} height={20} src={skill.icon} /> {skill.skillName}</span>
            ))}
        </div>
        <div className="pt-4  gap-2 flex flex-wrap">
            <h5  className="flex items-center justify-center text-[18px] lg:text-[20px] font-Poppins" >Mobile Apps --</h5>
            {SkillsArray[4].map((skill, index) => (
                <span  className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px]  lg:text-[16px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px] font-Poppins" key={index}><img width={20} height={20} src={skill.icon} />{skill.skillName}</span>
            ))}
        </div>
        <div className="pt-4 gap-2 flex flex-wrap">
            <h5  className="flex items-center justify-center text-[18px] lg:text-[20px] font-Poppins" >DevOps --</h5>
            {SkillsArray[3].map((skill, index) => (
                <span  className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px]  lg:text-[16px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px] font-Poppins" key={index}><img width={20} height={20} src={skill.icon} />{skill.skillName}</span>
            ))}
        </div>

        <div className="pt-4 flex gap-2 flex-wrap">
            <h5  className="flex items-center justify-center text-[18px] lg:text-[20px] font-Poppins">Game --</h5>
            {SkillsArray[2].map((skill, index) => (
                <span  className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px] lg:text-[16px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px] font-Poppins" key={index}><img width={20} height={20} src={skill.icon} />{skill.skillName}</span>
            ))}
        </div>

        <div className="pt-4 flex gap-2 flex-wrap">
            <h5  className="flex items-center justify-center text-[18px] lg:text-[20px] font-Poppins">Data Analysis --</h5>
            {SkillsArray[5].map((skill, index) => (
                <span  className=" flex gap-2 items-center p-[3px] px-[10px] text-[13px] lg:text-[16px] mx-1 my-[6px] bg-[#6a748020] rounded-[4px] font-Poppins" key={index}><img width={20} height={20} src={skill.icon} />{skill.skillName}</span>
            ))}
        </div>
        </div>
        <div className='max-sm:hidden max-md:hidden flex justify-self-end items-center'>
            <Image src={skillspic} alt='' height={400}  className="rounded-[23px]" />



        </div>


    </section>
  )
}

export default Skills
