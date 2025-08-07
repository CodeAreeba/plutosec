import React from 'react'

const ContactCard = () => {
  return (
    <>
    <div className="flex flex-col md:w-full bg-neutral-900 rounded-lg px-3 py-6 flex md:flex-row">
            <div className="w-[100%] md:w-[50%] rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46182315.12919057!2d-47.8023207!3d45.05039994999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xde64cbc4f065e73%3A0xbe5c3094fc7b3e7d!2sPlutoSec!5e0!3m2!1sen!2s!4v1753870311495!5m2!1sen!2s"
                width="100%"
                height="580"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plutosec Location"
              ></iframe>
            </div>
            <div className="w-[100%] md:w-[50%] px-5">
              <h2 className="text-xl text-[#00D0E7]  md:text-[#00D0E7] text-3xl font-bold mb-4">
                Start a conversation with us, and we'll assist you right away!
              </h2>
              <div className="md:flex flex-wrap gap-5 mb-4">
                <div className="flex flex-col gap-1 mb-6 md:flex gap-10"> 
                <input
                  id="email"
                  type="name"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-neutral-900 text-white rounded-md
           border border-[#00D0E7] focus:outline-none focus:ring-2
           focus:ring-[#00D0E7] focus:border-transparent"
                />
                <input
                  type="name"
                    placeholder="Last Name"
                  className="w-full px-4 py-3 bg-neutral-900 text-white rounded-md
           border border-[#00D0E7] focus:outline-none focus:ring-2
           focus:ring-[#00D0E7] focus:border-transparent"
                />
                </div>
                <div className="flex flex-col gap-1 md:flex gap-10"> 
                <input
                  type="number"
                  placeholder="Enter number"
                  className="w-full px-4 py-3 bg-neutral-900 text-white rounded-md
           border border-[#00D0E7] focus:outline-none focus:ring-2
           focus:ring-[#00D0E7] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-neutral-900 text-white rounded-md
           border border-[#00D0E7] focus:outline-none focus:ring-2
           focus:ring-[#00D0E7] focus:border-transparent"
                />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-gray-100 text-base" >Select Subject?</label>
                <div className="text-base">
                    <div className="md:flex gap-20">
                        <div className="flex gap-3 p-1"> 
                        <input type="checkbox"/>
                        <span className="text-[#00D0E7]">Penetration Testing</span>
                    </div>
                    <div className="md:flex gap-3 p-1">
                        <input type="checkbox" />
                        <span className="text-[#00D0E7]">Cloud Security</span>
                        </div>
                    </div>
                    <div className="md:flex gap-20">
                        <div className="flex gap-3 p-1 mr-4"> 
                        <input type="checkbox" />
                        <span className="text-[#00D0E7]">Network Security</span>
                    </div>
                    <div className="md:flex gap-3 p-1">
                        <input type="checkbox" />
                        <span className="text-[#00D0E7]">Managed Security</span>
                        </div>
                    </div>
                    <div className="md:flex gap-20">
                        <div className="flex gap-3 p-1 mr-1"> 
                        <input type="checkbox" />
                        <span className="text-[#00D0E7]">Cyber Consultation</span>
                    </div>
                    <div className="md:flex gap-3 p-1">
                        <input type="checkbox" />
                        <span className="text-[#00D0E7]">General Inquiry</span>
                        </div>
                    </div>
                     
                </div>
              </div>
              <div>
                 <textarea
  className="w-full h-25 mt-5 px-4 py-3 bg-neutral-900 text-white rounded-md
         border border-[#00D0E7] focus:outline-none focus:ring-2
         focus:ring-[#00D0E7] focus:border-transparent"
  placeholder="Please type your inquiry and our team will get back to you...">
</textarea>
  </div>
  <div>
    <button className=" flex gap-2
bg-[#2a2a2a] px-6 py-4 rounded-md mt-2 border-white border-1">
        <input type="checkbox" />
        <span className="text-white">I'm not a robot</span>
    </button>
  </div>
  <div>
    <button className="bg-[#00D0E7] text-black w-full mt-4 py-2 font-semibold rounded-md">Submit</button>
  </div>
            </div>
          </div>
    </>
  )
}

export default ContactCard