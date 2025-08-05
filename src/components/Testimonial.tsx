"use cliente";
import { feedback } from "../constats";
import style from "@/app/styles";
import { FeedbackCard } from "./FeedbackCard";

const Testimonial = () => (
  <section id="clients" className={`${style.paddingY} flex-col relative`}>
    <div
      data-aos="fade-up"
      data-aos-delay="250"
      className={`w-full flex flex-col items-start`}
    >
      <h3 className={`${style.paragraph} text-primary md:text-2xl`}>Testimonials</h3>
      <h1 className={`${style.heading} md:text-5xl`}>
        What People Say Abaut Us.
      </h1>
    </div>

    <div
      data-aos="zoom-in"
      className="flex flex-wrap justify-center w-full relative z-[1]"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonial;
