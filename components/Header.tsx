import React from 'react'
import Image from 'next/image'
import  Link from '@/public/link.png'
import Location from "@/public/location.png"
import Mail from "@/public/mail.png"

const Header = () => {
  return (
    
    <section className='w-full mb-8'>
      
   
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
 
    
 

    
    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-6xl lg:text-7xl">
        I'm
        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Ullas Arwan</span>
      </h1>
    </div>
   

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 py-4">I make cool websites and games okay.</p>
    </div>

    
    <div className="mt-8 gap-3 flex justify-center">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4" href="#">
        Download CV
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        git hub
        
      </button>
    </div>
 

     
  </div>
</div>
 
    </section>
  )
}

export default Header