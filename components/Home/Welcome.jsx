import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Welcome = () => {
  return (
    <div
      className={` bg-neutral-200 md:w-[80%] mx-auto w-full h-full flex justify-center ${montserrat.className} p-8 mt-10 rounded-xl  `}
    >
      <div className="flex flex-col gap-4 ">
        <h1 className=" text-[24px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold font-sans text-center ">
          Welcome to Purwanchal Campus
        </h1>
        <p className="text-[14px] md:text-[15px] lg:text-[16px]  ">
          Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is
          one of constituent campuses of Tribhuvan University (TU) and one of
          the associate engineering campuses of Institute of Engineering (IOE)
          which is a comprehensive, non-profit making institution and pioneering
          institution of higher education level in Nepal funded by Government of
          Nepal.Currently this campus runs seven (Agricultural, Architecture,
          Civil, Computer, Electrical, Electronics Communication & Information,
          Mechanical) bachelors degree program and one (Land and Water) master
          degree program It is situated at Gangalal Marg, Tinkune, Dharan-8,
          Sunsari district in the eastern region of Nepal. It occupies an area
          of 443 ropani (34-13-11.75 Bigahas) With the upgrade to a higher level
          of courses, the need to adopt the recent technological development and
          initiate research and development activities to better deal with
          related engineering problems, the Purwanchal campus is committed to
          achieving better quality results.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
