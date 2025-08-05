import style from "@/app/styles";

const Subscrib = () => (
  <section
    id="bookings"
    className={`${style.flexCenter} ${style.padding} flex flex-col bg-blue-200/30 rounded-[20px]`}
  >
    <div className="flex">
      <h2 className={`${style.heading} text-center`}>
        Subscribe to get information, latest news and other interesting offers
        about Gotravel
      </h2>
    </div>

    <div className="flex flex-col md:flex-row gap-6">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-[450px] h-10 px-3 text-primary text-sm rounded-md bg-white"
      />

      <button className="flex items-center h-10 animate-pulse font-paragraph px-8 py-3 w-full mr-4 cursor-pointer rounded-2xl bg-blue-400 text-dimWhite lg:w-fit">
        Submit Now
      </button>
    </div>
  </section>
);

export default Subscrib;
