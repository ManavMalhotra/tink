import { useState } from "react";
import HeroImg from "../assets/hero.svg";

const Header = () => {
  const [title, setTitle] = useState();
  const [isclicked, setisclicked] = useState(false);

  return (
    <section className="w-full px-6">
      <img src={HeroImg} className="w-auto h-1/3 max-w-[60vw]" alt="Hero" />

      <div className="flex flex-col items-center justify-center gap-4 px-6 py-2 mx-auto my-16 border border-black rounded-full w-fit md:flex-row flex-nowrap">
        {/* EMAIL  */}
        <input
          id="email"
          name="email"
          type="text"
          placeholder="johndoe@xyz.com"
          className="py-1 text-lg transition-colors bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <button
          className="px-4 py-2 text-lg font-bold text-white bg-black rounded-3xl "
          onClick={() => setisclicked(true)}
        >
          Join Waitlist
        </button>
      </div>
    </section>
  );
};

export default Header;
