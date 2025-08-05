"use client";
import style from "./styles";
import {
  Navbar,
  Hero,
  Hotels,
  BookTrip,
  Testimonial,
  Subscrib,
  Footer,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";


const page = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }),
    [];

  return (
    <div className="w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>{" "}
      </div>

      <div className={`${style.padding} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hotels /> <BookTrip /> <Testimonial /> <Subscrib /> <Footer />
        </div>{" "}
      </div>
    </div>
  );
};
export default page;
