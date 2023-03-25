import React from 'react';
import { motion } from "framer-motion";

function Dragdrop({children,onClick}) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    onClick={onClick}
    className=""
    >
        {children}
    </motion.div>

  )
}

export default Dragdrop