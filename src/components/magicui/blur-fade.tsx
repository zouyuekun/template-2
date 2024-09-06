'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
}

const BlurFade: React.FC<BlurFadeProps> = ({ children, delay = 0, inView = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={isVisible ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;