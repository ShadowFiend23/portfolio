import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaMapMarkerAlt} from "react-icons/fa";

const Contact = () => {
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <section className="lg:pt-28 lg:h-screen" id="contact">
      <h1 className="text-bold text-center w-full mb-3 text-6xl lg:text-8xl">
        Get In Touch
      </h1>
      <div className="w-[90%] mt-20 bg-white mx-auto md:w-4/5 lg:rounded-xl ">
        <div className="flex flex-wrap">
          <div className="p-8 w-full rounded-xl lg:w-[30%] lg:p-8 lg:m-3" id="contact-info">
            <div>
              <h3 className='text-white text-3xl'>Contact Information</h3>
              <p className='text-white py-4'>You may contact me in or message me directly using the contact form.</p>
            </div>
            <div className='py-5'>
              <div className='flex flex-wrap py-5'>
                <FaPhoneAlt style={ style }/>
                <div className="px-5">
                  <p className="text-white text-base">+63945439467</p>
                </div>
              </div>
              <div className='flex flex-wrap py-5 items-center'>
                <FaEnvelope style={ style }/>
                <div className="px-5">
                  <p className="text-white text-base lg:text-lg">jumiljaderosales@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-wrap py-5 items-center'>
                <FaMapMarkerAlt style={ style }/>
                <div className="px-5">
                  <p className="text-white text-base lgtext-lg">Ormoc City, Leyte, Philippines</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-full lg:mx-auto lg:w-[60%] p-6">
              <form className='lg:mx-4'>
                <div className="flex flex-wrap lg:flex-nowrap">
                  <div class="relative z-0 py-3 w-full lg:w-1/2 lg:mx-4">
                      <input type="text" id="name" class="contact-labels block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                      <label for="name" class="absolute text-sm text-gray-500 font-medium duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                  </div>
                  <div class="relative z-0 py-3 w-full lg:w-1/2 lg:mx-4">
                      <input type="email" id="email" class="contact-labels block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                      <label for="email" class="absolute text-sm text-gray-500 font-medium duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                  </div>
                </div>
                <div class="relative z-0 py-3 lg:w-full lg:my-6 lg:mx-4">
                  <input type="text" id="subject" class="contact-labels block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                  <label for="subject" class="absolute text-sm text-gray-500 font-medium duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-green peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                </div>
                <div className="lg:mx-4">
                  <div className="relative flex flex-wrap py-3 lg:w-full lg:my-6">
                    <textarea type="text" id="message" class="block order-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer h-[150px]" placeholder='Write Your Message'></textarea>
                    <label for="message" className="block order-1 w-full text-sm text-gray-500 font-medium peer-focus:text-green">Your Message</label>
                  </div>
                </div>
                <button class="bg-green hover:bg-blue-700 float-right text-white font-bold py-2 my-4 px-4 rounded-xl flex lg:mx-4">
                  <FaPaperPlane style={ style }/>
                  <span className='mx-1'>Send Message</span>
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact