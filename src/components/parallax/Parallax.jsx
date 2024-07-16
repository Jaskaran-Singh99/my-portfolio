import React, { useRef } from 'react'
import '../parallax/parallax.scss'
// import { motion } from 'framer-motion'
import {motion, useScroll, useTransform } from 'framer-motion'



export const Parallax = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start start"," end start"]
  })
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", '400%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", '100%'])
  
  return (
    <motion.div className='parallax' style={{background:"linear-gradient(180deg,  #212152, #505064)"}} ref={ref}>
        <motion.h1 style={{y:yText}}>What I did?</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div className='planets' style={{y:yBg}}></motion.div>
        <motion.div className='stars' style={{x:yBg}}></motion.div>
    </motion.div>
  )
}
