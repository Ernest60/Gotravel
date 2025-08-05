import React from "react";

const Button = () => {
  return (
    <section className="flex gap-2">
      <button
        type="button"
        className={`my-6 px-4 font-paragraph text-lg text-primary hover:text-blue-400 cursor-pointer`}
      >
        Login
      </button>

      <button
      
        className={`my-6 px-4 font-paragraph text-lg text-primary hover:bg-blue-400 border border-gray-200 rounded-md cursor-pointer`}
      >
        Sign up
      </button>
    </section>
  );
};

export default Button;
