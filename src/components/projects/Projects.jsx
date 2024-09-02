
import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Zen chat",
    img: './project4.jpg',
    desc:'Zen Chat is a chat application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The app supports real-time messaging, enabling instant message delivery through WebSockets for  communication',
    url:'https://drive.google.com/file/d/1IHWBsW-DDbwnuRcdrTD_WRs7G_HeMJur'
  },
  {
    id: 2,
    title: "Crypto Tracker",
    img: "./project5.jpg",
    desc:'The crypto tracker app is a web application developed using React that allows users to track the prices of various cryptocurrencies in real-time. Users can view  price information and even historical data for different cryptocurrencies. The app fetches data from coingecko API,',
    url:'https://crypto-tracker-git-main-jaskaransingh99s-projects.vercel.app/'
  },

  {
    id: 3,
    title: "IMDB Clone",
    img: "./project6.png",
    desc: "The IMDb clone is a  project designed to replicate the core features of the IMDb. Developed using React,  we can to browse, sand view detailed information about movies and TV shows. The app has responsive  interface .",
    url:"https://imbd-clone-git-main-jaskaran-singh99.vercel.app/"
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
            <button className="button"><a href={item.url}>View Project</a></button>
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
