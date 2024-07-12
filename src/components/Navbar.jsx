import React from 'react'
import {motion} from 'framer-motion'
import  Sidebar  from './sidebar/Sidebar'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>JkDeveloper</motion.span>
        <motion.div className='social' initial={{opacity:0}} animate={{opacity:1, transition:{type:'tweek',duration:1}}}>
          <FaGithub></FaGithub>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
          <FaFacebook></FaFacebook>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar