// import React from 'react'
// import './projects.scss'

// const items = [
//     {
//         id:1,
//         title:"Zen Chat",
//         img:"https://images.pexels.com/photos/19632167/pexels-photo-19632167/free-photo-of-legs-and-shoes-of-person-standing-in-puddle.jpeg",
//         desc:"Integration Capabilities: Git integrates seamlessly with numerous development tools, CI/CD platforms, and cloud services, offering a wide range of options for customization and automation. This integration capability allows for a smoother and more streamlined development process within a DevOps environment."
//     },
//     {
//         id:2,
//         title:"Zen Chat",
//         img:"https://images.pexels.com/photos/19632167/pexels-photo-19632167/free-photo-of-legs-and-shoes-of-person-standing-in-puddle.jpeg",
//         desc:"Integration Capabilities: Git integrates seamlessly with numerous development tools, CI/CD platforms, and cloud services, offering a wide range of options for customization and automation. This integration capability allows for a smoother and more streamlined development process within a DevOps environment."
//     }
//     ,
//     {
//         id:3,
//         title:"Zen Chat",
//         img:"https://images.pexels.com/photos/19632167/pexels-photo-19632167/free-photo-of-legs-and-shoes-of-person-standing-in-puddle.jpeg",
//         desc:"Integration Capabilities: Git integrates seamlessly with numerous development tools, CI/CD platforms, and cloud services, offering a wide range of options for customization and automation. This integration capability allows for a smoother and more streamlined development process within a DevOps environment."
//     },
//     {
//         id:4,
//         title:"Zen Chat",
//         img:"https://images.pexels.com/photos/19632167/pexels-photo-19632167/free-photo-of-legs-and-shoes-of-person-standing-in-puddle.jpeg",
//         desc:"Integration Capabilities: Git integrates seamlessly with numerous development tools, CI/CD platforms, and cloud services, offering a wide range of options for customization and automation. This integration capability allows for a smoother and more streamlined development process within a DevOps environment."
//     }
// ]

// const Section = ({item})=>{
//     return (
//     <section>{item.title}</section>
//     )
// }
// export const Projects = () => {
//   return (
//     <div className='portfolio'>
//     {items.map((item)=>{
//         return <Section item={item} key={item.id}></Section>
//     })}
//     </div>
//   )
// }
import { useRef } from "react";
// import { Single } from "./Single";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  // {
  //   id: 2,
  //   title: "Next.js Blog",
  //   img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="button">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
