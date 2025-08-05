import style from "@/app/styles";
import { apple, facebook, instagram, playstore, twitter } from "@/assets";
import { footerLinks } from "@/constats";
import Image from "next/image";

const Footer = () => (
  <section className={`${style.flexCenter} ${style.paddingY} gap-10 flex-col`}>
    <div className={`${style.flexStart} md:flex-row flex-col gap-5 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/*LOGO*/}
        <div className="flex justify-center md:justify-start">
          <h1 className={`${style.heading}text-primary italic`}>
            Go<span className="text-blue-400">tra</span>vel
          </h1>
        </div>
        <p className={`font-title mt-4 text-lg md:max-w-[200px]`}>
          Book your trip in minute, get full control for much longer.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col gap-2 ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-title font-bold text-xl text-primary">
              {" "}
              {footerLink.title}
            </h4>

            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-paragraph text-sm text-primary hover:text-blue-200 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/*SOCIAL MIDIA*/}
      <div className="flex-1 flex-col justify-center">
        <div className="flex flex-row gap-6 mb-5">
          <div className="flex justify-center items-center bg-gray-300 h-10 w-10 rounded-full cursor-pointer hover:bg-blue-200">
            <Image src={facebook} alt="icon" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center bg-gray-300 h-10 w-10 rounded-full cursor-pointer hover:bg-blue-200">
            <Image src={instagram} alt="icon" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center bg-gray-300 h-10 w-10 rounded-full cursor-pointer hover:bg-blue-200">
            <Image src={twitter} alt="icon" className="w-5 h-5" />
          </div>
        </div>{" "}
        <div className="flex flex-col gap-4">
          <h2 className="font-title font-normal text-xl">Descover Our App</h2>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row justify-center items-center bg-primary h-8 w-28 gap-1 rounded-xl cursor-pointer">
              <Image src={apple} alt="icon" className="h-5 w-5" />
              <h3 className="font-paragraph text-sm text-white">Get in Now</h3>
            </div>
            <div className="flex flex-row justify-center items-center bg-primary h-8 w-28 gap-1 rounded-xl cursor-pointer">
              <Image src={playstore} alt="icon" className="h-5 w-5" />
              <h3 className="font-paragraph text-sm text-white">Get in Now</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full flex items-center pt-2 border-t-[1px] border-t-primary">
      <p className="font-paragraph font-normal text-center text-[10px] leading-[27px] text-primary">
        2025 Gotravel. All Rigghts Reserved
      </p>
    </div>
  </section>
);

export default Footer;
