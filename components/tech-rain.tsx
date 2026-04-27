"use client";

import { useEffect, useState } from "react";
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaJs, FaTerminal } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiOpencv, SiIntellijidea, SiPostman } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

const icons = [
  FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaJs,
  SiSpringboot, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, GrOracle, SiOpencv, VscVscode, SiIntellijidea, SiPostman, FaTerminal
];

interface RainDrop {
  id: number;
  IconComponent: any;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

export default function TechRain() {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const newDrops: RainDrop[] = [];
    let idCounter = 0;
    
    for (let col = 0; col < 25; col++) {
      const dropsInColumn = 3; 
      const columnOffset = Math.random() * 15; 
      
      for (let j = 0; j < dropsInColumn; j++) {
        const spacingTimer = 15 / dropsInColumn; 
        
        newDrops.push({
          id: idCounter++,
          IconComponent: icons[Math.floor(Math.random() * icons.length)],
          left: col * 4, 
          animationDuration: 15, 
          animationDelay: -(j * spacingTimer) - columnOffset,
          
          size: 40 
        });
      }
    }
    
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute anim-rain text-[var(--foreground)] blur-[1.5px]"
          style={{
            left: `${drop.left}%`,
            top: `-15%`,
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.animationDelay}s`,
          }}
        >
          <drop.IconComponent size={drop.size} />
        </div>
      ))}
    </div>
  );
}
