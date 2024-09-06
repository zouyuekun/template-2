'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface CardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isVisible?: boolean;
}

export default function Card({ src, alt, width, height, className = "", isVisible = false }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const rotateClass = className.match(/rotate\([^)]+\)/);
    const baseRotation = rotateClass ? rotateClass[0] : 'rotate(0deg)';

    const baseStyle = {
      width: `${width}px`,
      height: `${height}px`,
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? '0' : '30px'}) ${baseRotation}`,
    };
    
    const hoverStyle = isHovered
      ? { 
          transform: `translateY(-15px) ${baseRotation} rotate(5deg)`,
          transition: 'all 0.3s ease-out',
        }
      : {};

    setStyle({ ...baseStyle, ...hoverStyle });
  }, [isHovered, isVisible, width, height, className]);

  return (
    <div
      className={`absolute shadow-[0_15px_50px_rgba(160,54,83,0.1)] rounded-2xl border border-[#e4839b]/20 ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-3xl"
      />
    </div>
  );
}