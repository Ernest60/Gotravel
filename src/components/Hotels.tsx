"use client";
import style, { layout } from "@/app/styles";
import { services } from "@/constats";
import { ServicesCard } from "./ServicesCard";

const Hotels = () => (
  <section
    id="hotels"
    className={`${style.paddingY}bg-gray-300/10 rounded-xl flex flex-col relative`}
  >
    <div
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full flex flex-col items-start"
    >
      <h3 className={`${style.paragraph}text-primary md:text-2xl`}>Category</h3>
      <h1 className={`${style.heading} md:text-5xl`}>We Offer Best Services</h1>
    </div>

    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      className="flex flex-wrap justify-center w-full relative mt-10 z-[1]"
    >
      {services.map((card) => (
        <ServicesCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Hotels;
