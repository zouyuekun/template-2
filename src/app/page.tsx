'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import DotPattern from "@/components/DotPattern";
import Card from "@/components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat relative">
      <DotPattern className="z-0" />
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center rounded-xl p-8 relative z-10">
        {/* 左半部分内容 */}
        <div className="max-w-3xl mx-auto lg:mx-0 lg:w-1/2">
          <h1 className="text-black text-4xl sm:text-5xl lg:text-[64px] font-bold font-['Poppins'] leading-tight mb-8">
            Next.js hero section<br/>Phone Template
          </h1>

          <p className="text-black text-lg sm:text-xl opacity-60 font-normal font-['Poppins'] mb-8 max-w-[564px]">
            Eye-catching modern Responsive designs. Multiple layouts. Unique animations. Perfect for 2024. Free
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button className="w-[183px] h-[59px] text-base font-bold bg-black rounded-xl flex items-center justify-center">
              Get Started
            </Button>
            <Button variant="outline" className="w-[183px] h-[59px] text-base font-bold rounded-xl flex items-center justify-center">
              Explore
            </Button>
          </div>
          
          <div className="flex gap-[60px]">
            <div className="flex flex-col items-start">
              <span className="text-black text-[44px] font-semibold">23k+</span>
              <span className="text-black text-base font-normal">Users</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black text-[44px] font-semibold">1M+</span>
              <span className="text-black text-base font-normal">Download</span>
            </div>
          </div>
        </div>

        {/* 右半部分内容 */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-3xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -ml-12 sm:-ml-8 md:-ml-4 lg:ml-0">
            <Card
              src="/card1.webp"
              alt="Hero image"
              width={490}
              height={259}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[196px] sm:w-[294px] md:w-[392px] lg:w-[490px]"
              isVisible={isVisible}
              initialTransform="translate(-40%, -110%) rotate(8deg)"
            />
            <Card
              src="/card2.webp"
              alt="Hero image"
              width={294}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[118px] sm:w-[176px] md:w-[235px] lg:w-[294px]"
              isVisible={isVisible}
              initialTransform="translate(-90%, -30%) rotate(-8deg)"
            />
            <Card
              src="/card3.webp"
              alt="Hero image"
              width={274}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] sm:w-[164px] md:w-[219px] lg:w-[274px]"
              isVisible={isVisible}
              initialTransform="translate(-10%, 10%) rotate(16deg)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
