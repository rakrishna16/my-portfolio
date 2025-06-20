import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    { company: "Company A", role: "Frontend Developer", duration: "Jan 2022 - Present" },
    { company: "Company B", role: "Web Developer Intern", duration: "Jun 2021 - Dec 2021" }
  ];
  return (
    <section className='p-4 md:p-8 lg:px-20 lg:py-20' id='experience'>
      {/* <h2>Experience</h2> */}
      <motion.h2 className="text-3xl sm:text-6xl font-Rowdies font-extrabold text-white mt-5 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: 0 }} >Experience</motion.h2>
      {/* <ul>
            {experiences.map((exp, index) => (
              <li key={index}>
                <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
              </li>
            ))}
          </ul> */}

      <div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="p-2 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-l sm:text-xl text-slate-300">Web Developer |</h3>
              <span className="ml-2 text-1xl sm:text-2xl font-semibold text-slate-300">Accenture</span>
              <span className="ml-auto text-xs sm:text-sm font-semibold text-slate-300">2021 - Present</span>
            </div>
            <p className="text-gray-300 text-sm sm:pr-52">Developed and maintained web applications using React and Node.js. Worked on a team to deliver high-quality software. Design, build and test web-based applications for various site components and edit site content. Document technical designs and specifications. Research and incorporate updated content for websites.</p>
          </div>
          <div className="p-2 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-l sm:text-xl font-thick text-slate-300">Web Developer |</h3>
              <span className="ml-2 font-semibold text-1xl sm:text-2xl text-slate-300">A2Z Technologies</span>
              <span className="ml-auto text-xs sm:text-sm text-slate-300">2020 - 2021</span>
            </div>
            <p className="text-gray-300 text-sm sm:pr-52">Assisted web developers in building and testing web applications. Gained experience with front-end and back-end technologies. Design and built the CMS sites using Wordpress, Shopify and Squarespace etc.</p>
          </div>
          <div className="p-2 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-l sm:text-xl text-slate-300">Software Developer |</h3>
              <span className="ml-2 font-semibold text-1xl sm:text-2xl text-slate-300"> Dhariz Web Simplified</span>
              <span className="ml-auto font-semibold text-xs sm:text-sm text-slate-300">2018 - 2020</span>
            </div>
            <p className="text-gray-300 text-sm sm:pr-52">Assisted web developers in building and testing web applications. Gained experience with front-end and back-end technologies.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;