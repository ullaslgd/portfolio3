import React from 'react'

const Certificates = () => {
  return (
    <section  className='flex  flex-col gap-4   mt-[40px] w-[90%] max-w-[95vw] rounded-[15px] bg-[#FFFEFD] p-5 pt-6  border-2 border-zinc-200'>
        <h3 className='font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent text-2xl '>Certificates</h3>
        <div className="mt-4  px-5 ">
        <ul className='flex flex-col gap-4 list-disc'>
            <li><a className='text-gray-950 hover:text-[#6300f7]' target='_blank' href="https://www.udemy.com/certificate/UC-3b54c456-699c-4bbe-b273-9b0fd91d8d9c/">The Complete 2024 Web Development Bootcamp</a></li>
            <li><a  className="text-gray-950 hover:text-[#6300f7]" target='_blank' href="https://www.linkedin.com/learning/certificates/31c9e67c33b5eaecf4d85dcbdd6f7376941dae7d1bdb0d3902db54048d976d54">Career Essentials in Generative AI by Microsoft and LinkedIn</a></li>
            <li><a  className="text-gray-950 hover:text-[#6300f7]" target='_blank' href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/6574e173-7fcd-42d6-be1c-30f089a37e8d-ullas-563e0c85-1dfd-4017-a839-25de18411bb1-certificate.pdf">Introduction to MongoDB</a></li>
            <li><a  className="text-gray-950 hover:text-[#6300f7]" target='_blank' href="https://certificates.simplicdn.net/share/">The AWS Technical Essentials</a></li>

        </ul>
        </div>

    </section>
  )
}

export default Certificates
