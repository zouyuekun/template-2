'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import DotPattern from "@/components/DotPattern";
import Card from "@/components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible1(true), 100);
    const timer2 = setTimeout(() => setIsVisible2(true), 300);
    const timer3 = setTimeout(() => setIsVisible3(true), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat relative">
      <DotPattern className="z-0" />
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center rounded-xl p-8 relative z-10">
        {/* 左半部分内容 */}
        <div className="max-w-3xl mx-auto lg:mx-0 lg:w-3/5">
          <h1 className="text-black text-4xl sm:text-5xl lg:text-[64px] font-bold font-['Poppins'] leading-tight mb-8">
            Next.js hero section<br/>Phone Template
          </h1>

          <p className="text-black text-lg sm:text-xl opacity-60 font-normal font-['Poppins'] mb-8 max-w-[564px]">
            Eye-catching modern Responsive designs. Multiple layouts. Unique animations. Perfect for 2024. Free
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button className="w-[183px] h-[59px] bg-black rounded-xl flex items-center justify-center">
              Get Started
            </Button>
            <Button variant="outline" className="w-[183px] h-[59px] rounded-xl flex items-center justify-center">
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
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-3xl h-[700px]">
            <Card
              src="/card1.webp"
              alt="Hero image"
              width={490}
              height={259}
              className="absolute bottom-[360px] left-[72px] rotate-[8deg]"
              isVisible={isVisible1}
            />
            <Card
              src="/card2.webp"
              alt="Hero image"
              width={294}
              height={305}
              className="absolute bottom-[120px] left-[26px] rotate-[-8deg]"
              isVisible={isVisible2}
            />
            <Card
              src="/card3.webp"
              alt="Hero image"
              width={274}
              height={305}
              className="absolute bottom-[0px] left-[271px] rotate-[16deg]"
              isVisible={isVisible3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
