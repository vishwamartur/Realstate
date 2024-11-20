import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ExpertiseItemProps {
  children: ReactNode;
  index: number;
}

export default function ExpertiseItem({ children, index }: ExpertiseItemProps) {
  return (
    <motion.div
      className="group relative cursor-pointer py-12"
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
    >
      <motion.div 
        className="absolute left-0 -translate-x-16 text-neutral-500 text-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        —
      </motion.div>
      <motion.h3 
        className="text-[8rem] font-extralight leading-none tracking-tight"
        whileHover={{ x: 40 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.h3>
    </motion.div>
  );
}