import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

const Contact = () => {

    const onButtonClick = () => {
        const pdfUrl = "src/assets/HK_resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Hari_krishnan_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='p-4 lg:px-20 lg:py-20' id='contact'>
            <motion.h2 className="text-3xl sm:text-6xl font-Rowdies font-extrabold text-white mt-24 sm:mt-5 mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: 0 }} >Contact</motion.h2>
            <div className="flex flex-wrap sm:flex-row justify-center space-x-4 p-4">
                <a href="https://github.com/rakrishna16" target='_blank' className="m-5 p-10 w-20 sm:w-30 "><FaGithub className='text-gray-300 text-5xl sm:text-6xl float-end' /></a>
                <a href="https://www.linkedin.com/in/hari-krishnan-doss/" target='_blank' className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><FaLinkedin className='text-blue-400 text-5xl sm:text-6xl' />
                </a>
                <a href="tel:7010802254" className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><BiPhoneCall className='text-amber-300 text-5xl sm:text-6xl float-end' />
                </a>
                <a href="mailto:rakrishna16@gmail.com" className="m-5 p-10 w-20 sm:w-30 text-gray-500 hover:text-gray-700"><IoIosMail className='text-red-300 text-5xl sm:text-6xl' /></a>
            </div>
            <center>
                <h3 className='text-gray-300 text-1xl sm:text-2xl pb-10'>
                    Click on below button to download Resume
                </h3>
                <button onclick={onButtonClick} className='pointer-events-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Download My Resume
                </button>
            </center>

        </section>

    );
};

export default Contact;