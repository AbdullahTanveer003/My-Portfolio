import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(32); // Outer ring size
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOverText = () => {
      setCursorSize(64); // Expand outer ring
      setIsHovered(true);
    };

    const handleMouseLeaveText = () => {
      setCursorSize(32); // Reset size
      setIsHovered(false);
    };

    // Add event listeners to all interactive/text elements
    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, a, button, input, textarea, [role='button']"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseOverText);
        el.addEventListener("mouseleave", handleMouseLeaveText);
      });
    };

    attachListeners();
    window.addEventListener("mousemove", handleMouseMove);

    // Re-attach listeners when DOM changes (e.g. navigation, new page render)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full border border-cyan-400/40 bg-cyan-400/5 mix-blend-screen shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        style={{
          width: cursorSize,
          height: cursorSize,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        animate={{
          x: cursorPosition.x - cursorSize / 2,
          y: cursorPosition.y - cursorSize / 2,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 22,
          mass: 0.6,
        }}
      />
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        style={{
          width: 8,
          height: 8,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        animate={{
          x: cursorPosition.x - 4,
          y: cursorPosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </>
  );
}
