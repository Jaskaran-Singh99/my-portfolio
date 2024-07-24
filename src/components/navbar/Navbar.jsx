import React from 'react'
import {motion} from 'framer-motion'
import  Sidebar  from '../sidebar/Sidebar'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>Jk_Developer</motion.span>
        <motion.div className='social' initial={{opacity:0}} animate={{opacity:1, transition:{type:'tweek',duration:1}}}>
        <a href='https://github.com/Jaskaran-Singh99'><FaGithub/></a>
        <a href='https://www.instagram.com/jk_developer99/'><FaInstagram/></a>
        <a href='https://www.linkedin.com/in/jaskaran-singh-665865272/'><FaLinkedin/></a>
        <a href='https://www.facebook.com/profile.php?id=61555448061310'><FaFacebook/></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar