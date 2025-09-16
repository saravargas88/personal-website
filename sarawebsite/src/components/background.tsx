import { useState } from "react";

export default function Background() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      
      style={{
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, 
          rgba(255, 221, 225, 0.6), 
          rgba(238, 156, 167, 0.5), 
          rgba(161, 196, 253, 0.5), 
          rgba(194, 233, 251, 0.5))`,
        transition: "background 0.1s ease",
      }}
    />
  );
}
