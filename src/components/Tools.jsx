import React, { useState, useEffect, useRef } from "react";

export default function ToolsSection() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [toolPositions, setToolPositions] = useState([]);
  const animationRef = useRef();
  const containerRef = useRef();

  const tools = [
    { name: "Pr", bg: "bg-purple-800", width: 64, height: 64 },
    {
      name: "Figma",
      bg: "bg-gradient-to-br from-pink-400 to-purple-500",
      width: 96,
      height: 64,
    },
    { name: "Ae", bg: "bg-blue-900", width: 48, height: 48 },
    { name: "Au", bg: "bg-indigo-700", width: 48, height: 48 },
    { name: "Ai", bg: "bg-orange-600", width: 48, height: 48 },
    { name: "Figma", bg: "bg-gray-600", width: 48, height: 48 },
    { name: "Framer", bg: "bg-black", width: 128, height: 64 },
    { name: "After Effects", bg: "bg-purple-900", width: 160, height: 64 },
    { name: "Ps", bg: "bg-blue-600", width: 48, height: 48 },
    { name: "LottieFiles", bg: "bg-emerald-400", width: 128, height: 64 },
    { name: "Photoshop", bg: "bg-blue-800", width: 128, height: 64 },
    { name: "Illustrator", bg: "bg-orange-700", width: 128, height: 64 },
    { name: "Krea", bg: "bg-black", width: 80, height: 64 },
    { name: "Rive", bg: "bg-emerald-500", width: 64, height: 64 },
    { name: "Midjourney", bg: "bg-gray-700", width: 112, height: 64 },
    { name: "Audition", bg: "bg-indigo-800", width: 96, height: 64 },
    { name: "Premiere Pro", bg: "bg-purple-800", width: 80, height: 160 },
  ];

  useEffect(() => {
    // Initialize positions randomly at the top
    const initialPositions = tools.map((tool, index) => ({
      x: Math.random() * (window.innerWidth - tool.width - 100) + 50,
      y: Math.random() * 100 + 150,
      vx: (Math.random() - 0.5) * 2,
      vy: 0,
      isDragging: false,
    }));
    setToolPositions(initialPositions);
  }, []);

  useEffect(() => {
    const animate = () => {
      setToolPositions((prev) => {
        const newPositions = prev.map((pos, index) => {
          if (pos.isDragging) return pos;

          const tool = tools[index];
          const gravity = 0.5;
          const bounce = 0.7;
          const friction = 0.98;
          const containerHeight = 384; // h-96 = 384px
          const ground = containerHeight - tool.height;

          let newVy = pos.vy + gravity;
          let newY = pos.y + newVy;
          let newVx = pos.vx * friction;
          let newX = pos.x + newVx;

          // Ground collision
          if (newY >= ground) {
            newY = ground;
            newVy = -newVy * bounce;
            if (Math.abs(newVy) < 1) newVy = 0;
          }

          // Wall collisions
          if (newX <= 0 || newX >= window.innerWidth - tool.width) {
            newVx = -newVx * bounce;
            newX = Math.max(0, Math.min(window.innerWidth - tool.width, newX));
          }

          return {
            ...pos,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });

        // Box-to-box collision detection
        for (let i = 0; i < newPositions.length; i++) {
          if (newPositions[i].isDragging) continue;
          
          for (let j = i + 1; j < newPositions.length; j++) {
            if (newPositions[j].isDragging) continue;
            
            const box1 = newPositions[i];
            const box2 = newPositions[j];
            const tool1 = tools[i];
            const tool2 = tools[j];
            
            // Check if boxes overlap
            if (box1.x < box2.x + tool2.width &&
                box1.x + tool1.width > box2.x &&
                box1.y < box2.y + tool2.height &&
                box1.y + tool1.height > box2.y) {
              
              // Calculate overlap and separation
              const overlapX = Math.min(box1.x + tool1.width - box2.x, box2.x + tool2.width - box1.x);
              const overlapY = Math.min(box1.y + tool1.height - box2.y, box2.y + tool2.height - box1.y);
              
              if (overlapX < overlapY) {
                // Separate horizontally
                const separation = overlapX / 2;
                if (box1.x < box2.x) {
                  newPositions[i].x -= separation;
                  newPositions[j].x += separation;
                } else {
                  newPositions[i].x += separation;
                  newPositions[j].x -= separation;
                }
                // Exchange horizontal velocities
                const tempVx = newPositions[i].vx;
                newPositions[i].vx = newPositions[j].vx * 0.8;
                newPositions[j].vx = tempVx * 0.8;
              } else {
                // Separate vertically
                const separation = overlapY / 2;
                if (box1.y < box2.y) {
                  newPositions[i].y -= separation;
                  newPositions[j].y += separation;
                } else {
                  newPositions[i].y += separation;
                  newPositions[j].y -= separation;
                }
                // Exchange vertical velocities
                const tempVy = newPositions[i].vy;
                newPositions[i].vy = newPositions[j].vy * 0.8;
                newPositions[j].vy = tempVy * 0.8;
              }
            }
          }
        }
        
        return newPositions;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e, index) => {
    e.preventDefault();
    setDraggedItem(index);

    const startX = e.clientX;
    const startY = e.clientY;
    const startPos = toolPositions[index];

    setToolPositions((prev) =>
      prev.map((pos, i) =>
        i === index ? { ...pos, isDragging: true, vx: 0, vy: 0 } : pos
      )
    );

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setToolPositions((prev) =>
        prev.map((pos, i) =>
          i === index
            ? {
                ...pos,
                x: startPos.x + deltaX,
                y: startPos.y + deltaY,
              }
            : pos
        )
      );
    };

    const handleMouseUp = () => {
      setDraggedItem(null);
      setToolPositions((prev) =>
        prev.map((pos, i) =>
          i === index ? { ...pos, isDragging: false } : pos
        )
      );
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center pt-24 pb-0 px-8 overflow-hidden h-96"
    >
      <div className="relative z-10">
        <h2
          className="text-6xl font-extrabold mb-6 text-black"
          style={{ fontFamily: "Bricolage Grotesque" }}
        >
          Tools
        </h2>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-16">
          These are the tools I use to bring ideas to life - design, motion, and
          everything in between.
        </p>
      </div>

      {/* Drag me text */}
      <div className="absolute top-1/3 left-1/4 transform -rotate-12">
        <span className="text-gray-400 text-sm italic">Drag me!</span>
        <svg
          className="w-8 h-8 text-gray-400 ml-2 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      {/* Physics Tool Boxes */}
      {toolPositions.map((pos, index) => {
        const tool = tools[index];
        return (
          <div
            key={index}
            className={`absolute ${
              tool.bg
            } text-white rounded-2xl flex items-center justify-center font-bold text-sm cursor-move shadow-lg hover:scale-105 select-none ${
              draggedItem === index ? "opacity-80 scale-110" : ""
            }`}
            onMouseDown={(e) => handleMouseDown(e, index)}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              width: `${tool.width}px`,
              height: `${tool.height}px`,
              transform: "rotate(0deg)",
              zIndex: draggedItem === index ? 50 : 10,
              transition:
                draggedItem === index ? "none" : "transform 0.1s ease-out",
            }}
          >
            {tool.name}
          </div>
        );
      })}
    </section>
  );
}
