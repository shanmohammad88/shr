import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring physics for the "lagging" effect
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Logic to detect if we are hovering over a button or link
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: mouseX,
        translateY: mouseY,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        width: isHovered ? 80 : 32,
        height: isHovered ? 80 : 32,
        backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
        border: isClicking ? '2px solid #4f46e5' : '1px solid #6366f1',
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block backdrop-blur-[2px] transition-colors"
    >
      {/* Inner Dot */}
      <motion.div 
        animate={{ scale: isHovered ? 0.5 : 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-600 rounded-full"
      />
    </motion.div>
  );
};

export default CustomCursor;