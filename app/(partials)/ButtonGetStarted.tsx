"use client";

import { motion } from "framer-motion";
import React from "react";
import "@/assets/css/button1.css";

export default function ButtonGetStarted() {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="button mt-10"
    >
      <span className="actual-text">&nbsp;get&nbsp;started&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;get&nbsp;started&nbsp;
      </span>
    </motion.button>
  );
}
