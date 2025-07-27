import React from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import './about.scss'


export const About = () => {
  return (
    <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" >
          <img src='/bg-sharp.png' className="myimage"/>
        </div>
        <motion.div className="textContainer" >
          <h3>Title</h3>
          <p>This is a para</p>
          <button className="button"><a href='#'>View Project</a></button>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
