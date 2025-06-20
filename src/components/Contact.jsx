import React from 'react';
import {motion} from 'framer-motion';
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";




const Contact = () => {
    return (
        <section className='p-4 lg:px-20 lg:py-20 min-h-screen' id='contact'>
            <motion.h2 className="text-3xl sm:text-6xl font-Rowdies font-extrabold text-white mt-5 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: 0 }} >Contact</motion.h2>
  <div className="flex flex-wrap sm:flex-row justify-center space-x-4 p-4">
    <a href="https://github.com/rakrishna16" target='_blank' className="m-5 p-10 w-20 sm:w-30 "><FaGithub className='text-gray-300 text-4xl sm:text-6xl' /></a>
    <a href="https://www.linkedin.com/in/hari-krishnan-doss/" target='_blank' className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><FaLinkedin className='text-blue-400 text-4xl sm:text-6xl'/>
</a>
    <a href="tel:7010802254" className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><BiPhoneCall className='text-amber-300 text-4xl sm:text-6xl' />
</a>
<a href="mailto:rakrishna16@gmail.com" className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><IoIosMail className='text-red-300 text-4xl sm:text-6xl'/></a>
  </div>
</section>

    );
};

export default Contact;