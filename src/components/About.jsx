import React, { useEffect, useState } from 'react';
import { star, heart, plane, lightning, note } from '../assets/paths';
import { interpolate } from "flubber";
// import {motion} from 'framer-motion';
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";


const About = () => {

  const [pathIndex, setPathIndex] = useState(0)
  const progress = useMotionValue(pathIndex)
  const fill = useTransform(progress, paths.map((_, index) => index), colors);
  const path = useTransform(progress, paths.map((_, index) => index), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
  })

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0)
          setPathIndex(1)
        } else {
          setPathIndex(pathIndex + 1)
        }
      },
    })

    return () => animation.stop()
  }, [pathIndex, progress])


  return (
    <>
      <section className='mx-auto max-w-6xl w-full min-h-screen p-4 md:p-5 lg:p-20 lg:pb-10 flex items-center justify-center' id='about'>
        {/* <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      exit={{ opacity: 0, y: 50 }}
      
      className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-blue-400' > */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='flex flex-col sm:flex-col-reverse items-center md:flex-row justify-cente gap-8 md:gap-16 lg:gap-24' >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='flex flex-col items-center md:items-start justify-center gap-3 sm:ml-16 mt-24 sm:mt-0' >
            <span className='px-2 py-1 text-white rounded-full text-xs md:text-sm bg-zinc-500 z-20'>Open to Hire</span>
            <h2 className='font-semibold z-20 text-5xl md:text-6xl lg:text-8xl text-center md:text-left bg-gradient-to-r from-blue-600 via-pink-500 to-blue-400 text-transparent bg-clip-text'>About Me</h2>
            <p className='text-s md:text-base lg:text-lg text-slate-300 text-center md:text-left text-pretty z-20'>
              I am a passionate web developer specializing in building responsive and intuitive web applications.
            </p>
          </motion.div>
          <svg className='w-98 sm:w-100 md:w-200 lg:200 h-100 z-20 ml:1 sm:ml-28'>
            <g transform="translate(10 10) scale(17 17)" className='align-middle'>
              <motion.path fill={fill} d={path} />
            </g>
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default About;

const paths = [lightning, plane, heart, note, star, lightning]
const colors = [
  "#fff312",
  "#dd00ee",
  "#FFC0CB",
  "#0d63f8",
  "#0cdcf7",
  "#4ff0b7",
]