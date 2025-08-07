import React from 'react'

const IndData = () => {
    const buttonData=["Retail & Ecommerce","Finance","Government","Education","Technology","Health Care","Utilities & Energy","Oil & Gas","Banking"]
  return (
     <>
     <div className='mb-5'>
        <h2 className='text-5xl font-bold text-[#00D0E7] py-6 text-center'>Industries</h2>
        <p className='text-white text-lg text-center'>Our clients trust Plutosec to secure their businesses. Discover their experiences and learn how we’ve helped strengthen their security. We value each testimonial and use the insights to continually improve our services.

</p>
<div className='py-5 mt-5 flex-col flex md:flex-wrap md:flex-row gap-10  '>
{
    buttonData.map((data) => (
        <div className='w-[full] md:w-[30%] bg-neutral-900 shadow-[0_0_10px_#00D0E7] hover:shadow-none 
          hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-md'>
        <h2 className='text-3xl font-bold text-[#00D0E7] py-7 text-center'>{data}</h2>
    </div>
    ))
}    
</div>
     </div>
     </>
  )
}

export default IndData