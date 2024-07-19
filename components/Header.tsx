import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section id="home" className=" flex-col  gap-1 mt-[100px] w-[90%] max-w-[450px] rounded-[15px] bg-[#FFFEFD] p-5 pt-16 border-2 border-zinc-200">
        <div>
            <Image className="rounded-full absolute pointer-events-none top-[50px] border-white border-[6px]" src="/profile.png" alt="" height={110} width={110}/>
        </div>
        <div className="flex flex-col justify-center pl-4">
            <h1 className="font-semibold">Ullas Arwan</h1>
        </div>
        <div className="flex flex-col">
          <a href="">India</a>
          <a href="https://www.github.com/ullaslgd" target='_blank'>Github</a>
          <a href="">clubullas@gmail.com</a>
        </div>
        <div className="flex gap-8 items-center justify-center pt-5">
            <button className="bg-[#5865f2] hover:bg-[#6300f7] py-1 px-3 rounded-[15px] text-white">Download CV</button>
            <button className="bg-[#5865f2] hover:bg-[#6300f7] py-1 px-3 rounded-[15px] text-white">Freelance</button>

        
        </div>

    </section>
  )
}

export default Header