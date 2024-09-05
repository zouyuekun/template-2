import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ececec] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center">
        <div className="max-w-3xl mx-auto lg:mx-0 lg:w-3/5">
          {/* 左半部分的内容保持不变 */}
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
            <Button variant="outline"  className="w-[183px] h-[59px] rounded-xl flex items-center justify-center">
              Explore
            </Button>
          </div>
          
          <div className="flex gap-[60px]">
            <div className="flex flex-col items-start">
              <span className="text-black text-[44px] font-semibold ">23k+</span>
              <span className="text-black text-base font-normal ">Users</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black text-[44px] font-semibold ">1M+</span>
              <span className="text-black text-base font-normal ">Download</span>
            </div>
          </div>
        </div>

        {/* 修改后的右半部分，包含更小的图片 */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-center">
          <div className="relative w-full max-w-[400px]">
            <Image
              src="/image.webp"
              alt="Hero image"
              width={400}
              height={400}
              layout="responsive"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
