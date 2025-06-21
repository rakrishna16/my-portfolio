import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
    const skills = [{ tech: "HTML", percentage: "96%" }, { tech: "CSS", percentage: "96%" }, { tech: "Core Java", percentage: "65%" }, { tech: "JavaScript", percentage: "85%" }, { tech: "React.js", percentage: "70%" }, { tech: "Node.js", percentage: "75%" }, { tech: "MongoDB", percentage: "70%" }, { tech: "SQL", percentage: "90%" }, { tech: "Tailwind CSS", percentage: "95%" }, { tech: "Bootstrap", percentage: "95%" }];
    return (
        <section className="w-full p-4 md:p-8 lg:px-20 lg:py-20" id='skills'>
            <motion.h1 className="text-4xl sm:text-6xl font-Rowdies font-extrabold text-white mt-24 sm:mt-5 mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: 0 }} >Skills</motion.h1>
            <ul className='grid grid-cols-1 gap-6 w-full sm:grid-cols-2'>
                {skills.map((skill, index) => (
                    <div className="grid grid-cols-1 gap-6" key={index}>
                        <li className='w-full'>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">{skill.tech}</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">{skill.percentage}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">

                                    <motion.div className="bg-gradient-to-r from-blue-600 via-pink-500 to-blue-400 h-4 rounded-full"
                                        initial={{ opacity: 0, width: '0%' }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        whileInView={{ opacity: 1, width: skill.percentage }}
                                    />
                                </div>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    );
};

export default Skills;