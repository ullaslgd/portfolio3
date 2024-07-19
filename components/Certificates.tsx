import React from 'react'

const Certificates = () => {
  return (
    <section  className='flex  flex-col gap- mt-[40px] w-[90%] max-w-[450px] rounded-[15px] bg-[#FFFEFD] p-5 pt-6'>
        <h3>Certificates</h3>
        <div className="mt-4  px-5 ">
        <ul className='flex flex-col gap-4 list-disc'>
            <li><a className='text-[#5865f2]' href="https://www.udemy.com/certificate/UC-3b54c456-699c-4bbe-b273-9b0fd91d8d9c/">The Complete 2024 Web Development Bootcamp</a></li>
            <li><a  className="text-[#5865f2]" href="https://www.linkedin.com/learning/certificates/31c9e67c33b5eaecf4d85dcbdd6f7376941dae7d1bdb0d3902db54048d976d54">Career Essentials in Generative AI by Microsoft and LinkedIn</a></li>
        </ul>
        </div>

    </section>
  )
}

export default Certificates