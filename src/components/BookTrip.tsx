"use cliente";
import style, { layout } from "@/app/styles";
import { features } from "../constats";
import Image from "next/image";
import { greece, house, live, map, mappin, send } from "@/assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-2 rounded-2xl ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } hover:shadow-xl`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-lg ${style.flexCenter} bg-blue-200`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-4">
      <h1 className="font-title font-semibold text-primary text-xl leading-[23px]">
        {title}
      </h1>

      <p className={`${style.paragraph}`}>{content}</p>
    </div>
  </div>
);

const BookTrip = () => {
  return (
    <section id="fleghts" className={`${style.paddingY} relative`}>
      <div
        data-aos="fade-up"
        data-aos-delay="250"
        className="w-full flex flex-col items-start"
      >
        <h3 className={`${style.paragraph} text-primary`}>Easy And Fast</h3>
        <h1 className={`${style.heading} md:text-5xl`}>Top Destinations</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-15 md:flex-row mt-5">
        <div
          data-aos="fade-down-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className={``}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className={`flex flex-col  justify-center  items-center relative mt-10 z-[1]`}
        >
          <div
            className={`w-[300px] md:w-[450px] flex flex-col shadow-xl gap-5 shadow-blue-200 rounded-2xl`}
          >
            <Image
              src={greece}
              alt="img"
              className="w-[90%] h-[60%] ml-4 rounded-lg"
            />

            <h1 className={`font-title font-bold text-primary ml-4 text-sm`}>
              Trip To Greece
            </h1>

            <p className={`font-paragraph text-sm ml-4 text-primary`}>
              12-30 April | by Ernesto Mandlate
            </p>

            <div className="flex flex-row ml-4">
              <div className="flex justify-center items-center w-10 h-10 bg-gray-200 hover:bg-blue-300 rounded-full cursor-pointer">
                <Image src={live} alt="img" className="h-4 w-4" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-gray-200 hover:bg-blue-300 rounded-full ml-3 cursor-pointer">
                {" "}
                <Image src={map} alt="img" className="h-4 w-4" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-gray-200 hover:bg-blue-300 rounded-full ml-3 cursor-pointer">
                <Image src={send} alt="img" className="h-4 w-4" />
              </div>
            </div>

            <div className="flex flex-row ml-4 mb-3">
              <Image src={house} alt="img" className="h-5 w-5" />

              <h4 className="font-paragraph ml-4 text-sm text-primary">
                13 people going
              </h4>
            </div>

          </div>

          <div className="flex flex-row justify-center items-center gap-5 bg-white rounded-2xl shadow-2xl w-55  h-30 ml-55 my-[-48] mb-10 md:w-75 md:h-35  md:my-[-68] md:ml-75">
            <Image
              src={greece}
              alt="img"
              className="w-15 h-15 ml-2 rounded-full mt-4"
            />
            <div className="flex flex-col gap-2 mt-3">
              <h4 className="font-paragraph text-primary text-sm">Ongoing</h4>
              <h1 className="font-title font-bold mb-3 text-primary text-sm">
                Trip To Portugal
              </h1>
              <p className="font-paragraph text-sm text-primary">
                <span className="text-blue-300"> 40% </span>completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
