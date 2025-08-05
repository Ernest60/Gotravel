"use client";
import style from "@/app/styles";
import { play, traveller } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="destinations"
      className={`${style.paddingY} flex flex-col items-center md:flex-row`}
    >
      <div
        data-aos="fade-right"
        className={`${style.flexStart} flex-1 flex-col gap-3 xl:px-0 sm:px-16 px-6`}
      >
        <div>
          <h2
            className={`${style.paragraph} font-bold uppercase text-blue-400 md:text-2xl`}
          >
            Best Destinations Around The World
          </h2>

          <h1 className={`${style.heading} font-bold md:text-8xl`}>
            Travel, enjoy and live a new and full life
          </h1>

          <p className={`${style.paragraph} max-w-[650px] md:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sed
            ut? Alias obcaecati quod asperiores temporibus cupiditate possimus,
            dignissimos voluptatum est maiores necessitatibus soluta non
            ratione.
          </p>
        </div>

        <div className="flex sm:items-center gap-3">
          <div className="flex flex-row justify-center items-center px-4 h-10 font-paragraph text-lg text-white bg-blue-400 hover:bg-white hover:text-primary border rounded-md cursor-pointer">
            <h3 className="font-paragraph text-sm text-primary md:text-xl">
              Find Out More
            </h3>
          </div>

          <div className="flex flex-row justify-center items-center gap-2 px-4 h-10 hover:bg-blue-400 border border-gray-200 rounded-md cursor-pointer">
            <Image src={play} alt="image" className="w-4 h-4" />
            <h3 className="font-paragraph text-sm text-primary md:text-xl">Play Demo</h3>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="250"
        className={`${style.flexCenter} flex-1 flex md:my-0 my-10 relative`}
      >
        <Image
          src={traveller}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
