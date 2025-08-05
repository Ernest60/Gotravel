"use cliente";
import style from "@/app/styles";
import Image from "next/image";

export const ServicesCard = ({ content, title, icon }) => (
  <div className="flex justify-between hover:shadow-2xl gap-8 flex-col w-[275px] h-[280px] rounded-xl cursor-pointer sm:mr-5 md:mr-10 mr-0 my-5">
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="flex flex-col text-center items-center gap-5 py-4"
    >
      <Image src={icon} alt="name" className="w-20 h-20" />

      <h3 className="font-title font-bold text-lg leading-[24px] text-primary">
        {title}
      </h3>

      <p className={`${style.paragraph} md:text-xl`}>{content}</p>
    </div>
  </div>
);
