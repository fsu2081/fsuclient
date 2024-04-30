import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Montserrat, Roboto, Inter } from "next/font/google"
const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
})
const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})
const inter = Inter({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

const TestimonialCard = ({ item }) => {
  return (
    <div>
      <div className="w-full min-h-[34rem] flex items-center justify-center font-sans mb-9">
        <div className="w-[95%] h-full flex items-center justify-center ">
          <div className="w-[25rem] bg-neutral-50 border-[2px] border-primary-500 max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800  rounded-lg shadow-xl ">
            <div className="w-full pt-1 pb-5 mx-auto text-center">
              <Image
                alt="profile"
                width={10}
                height={10}
                src={`${item.image}`}
                className="mx-auto object-cover rounded-full h-[10rem] w-[10rem] "
                unoptimized
              />
            </div>
            <div className="w-full mb-10">
              <div className="h-3 text-3xl leading-tight text-left text-primary-500">
                “
              </div>
              <p
                className={`${montserrat.className} px-5 text-xs md:text-sm text-center text-gray-600 `}>
                {item.quotes}
              </p>
              <div
                className={`${montserrat.className} h-3 -mt-3 text-3xl leading-tight text-right text-primary-500`}>
                ”
              </div>
            </div>
            <div className="w-full">
              <p
                className={`${montserrat.className} font-bold text-center text-primary-500 text-base`}>
                {item.name}
              </p>
              <p
                className={`${montserrat.className} text-xs text-center text-gray-500 `}>
                {item.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
