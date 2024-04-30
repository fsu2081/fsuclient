import { messages } from "@/data/data"
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import React, { useEffect } from "react"

const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const Messages = () => {
  return (
    <div
      className={`md:w-[80%] mx-auto w-full h-fit mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 ${montserrat.className} text-white`}>
      <AnimatePresence>
        {messages?.map((message, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-full  rounded-xl p-8 flex flex-col gap-4 overflow-hidden justify-between opacity-0 "
            key={index}>
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-radial from-[#e08c3e] to-[#dd6515] shadow-lg  -z-[10]"></div>
            <div className="w-full h-full flex flex-col gap-4 ">
              <span className="text-base md:text-3xl  font-bold text-secondary-800 ">
                Message From {message.position}
              </span>
              <p
                className={`${montserrat.className} font-sans text-[10px] md:text-[15px] max:h-[24rem] min-h-fit `}>
                {message.content}
              </p>
            </div>
            <div className="w-full flex gap-16 ">
              <div className="flex flex-1 items-center justify-center ">
                <Image
                  alt="FSU committee"
                  width={10}
                  height={10}
                  src={message && message.image}
                  className="w-full rounded-lg"
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-center flex-[2]  ">
                <span className="text-[12px] md:text-2xl font-bold ">
                  {message.name}
                </span>
                <span
                  className={`text-neutral-200 text-[10px] md:text-[17px] ${montserrat.className}`}>
                  {message.faculty}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* <div className="w-full h-[30rem] border-2 "></div>
      <div className="w-full h-[30rem] border-2 "></div> */}
    </div>
  )
}

export default Messages
