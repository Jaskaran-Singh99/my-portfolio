import React from 'react'
import {motion} from 'framer-motion'
export const Links = () => {
  const items = ['Home', 'Projects', 'Contact']
 
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 70,
      opacity: 0,
    },
  };
  
  return (
    <div className='links' >{items.map((i)=><motion.a href={`#${i}`} key={i} variants={itemVariants}  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>{i}</motion.a>)}</div>
  )
}
