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
  initialTransform?: string;
}

export default function Card({ src, alt, width, height, className = "", isVisible = false, initialTransform = "" }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const rotateMatch = initialTransform.match(/rotate\([^)]+\)/);
    const baseRotation = rotateMatch ? rotateMatch[0] : '';
    const translatePart = initialTransform.replace(baseRotation, '').trim();

    const baseStyle = {
      aspectRatio: `${width} / ${height}`,
      transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: isVisible ? 1 : 0,
      transform: `${translatePart} ${baseRotation} scale(${isVisible ? 1 : 0.8})`,
    };
    
    const hoverStyle = isHovered
      ? { 
          transform: `${translatePart} rotate(0deg) scale(1.05)`,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }
      : {};

    setStyle({ ...baseStyle, ...hoverStyle });
  }, [isHovered, isVisible, width, height, className, initialTransform]);

  return (
    <div
      className={`absolute shadow-[0_15px_50px_rgba(160,54,83,0.1)] rounded-[1.5rem] sm:rounded-3xl border border-[#e4839b]/20 overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}