
import { useState } from "react";
import { motion } from "framer-motion";
import {Links} from "./Links";
import "./sidebar.scss";
import {ToggleButton} from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(800px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 10,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 60,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants} >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
