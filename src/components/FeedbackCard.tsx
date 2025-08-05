"use cliente";
import Image from "next/image";

export const FeedbackCard = ({ content, name, title, img }) => (
  <div
    data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className="flex justify-between gap-4 flex-col px-10 py-12 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 shadow-2xl"
  >
    <p className="font-paragraph font-normal text-[18px] text-primary my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <Image src={img} alt="name" className="w-12 h-12 rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-paragraph font-semibold text-[15px] leading-[32px] text-primary">
          {name}
        </h4>

        <p className="font-paragraph font-normal text-[16px] text-primary">
          {title}
        </p>
      </div>
    </div>
  </div>
);
