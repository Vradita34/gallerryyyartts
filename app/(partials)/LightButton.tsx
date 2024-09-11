import React from 'react';
import { motion } from 'framer-motion';
import '@/assets/css/button-light.css';

function LightButton() {
    return (
        <motion.button
            className="btn-light"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            Get Started
        </motion.button>
    );
}

export default LightButton;
