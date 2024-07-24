import React from 'react'
import { motion } from 'framer-motion'
import '../hero/hero.scss'

export const Hero = () => {

  const variants = {
    initial:{
      opacity:0,
      x:-500
     
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        staggerChildren:0.1,
        type:'tween'
      },
    } 
  }
  
  const scrollAnimation={
      initial:{
        opacity:0.3,
        y:0
      },
      animate:{
          y:7,
          opacity:1,
        
          transition:{
            duration:1,
            type:'tween',
            repeat:Infinity,
             repeatType: "reverse",
             ease:'easeInOut'

          }
      }
  }

  const slidingVariant = {
    initial:{
  
      x:"-150%"
     
    },
    animate:{
  
      x:0,
      transition:{
        duration:25,
        repeat:Infinity,
        repeatType:'mirror',
       
        type:'tween'
      },
    } 
  }
  return (
    <motion.div className="hero" >
       <div className='wrapper'>
       <motion.div className="textContainer" variants={variants} initial="initial" animate="animate" >
            <motion.h2 variants={variants}>Jaskaran Singh</motion.h2>
            <motion.h1 variants={variants}> Web Developer</motion.h1>
            <motion.div className="buttons" variants={variants}>
                <motion.button className='button'>Projects</motion.button>
                <motion.button className='button'>Contact</motion.button>
                
            </motion.div>
            <motion.img src='/scroll.png'  variants={scrollAnimation}></motion.img>
        </motion.div>
        <motion.div className="slidingImage" variants={slidingVariant} initial='initial' animate='animate'>
          Innovative Problem Solver
        </motion.div>
        <div className="imageContainer">
            <img src='/bg-sharp.png' className='myimage'></img>
        </div>
       </div>
    </motion.div>
  )
}
