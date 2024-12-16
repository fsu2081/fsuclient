import React from "react"
import NewEventCard from "../NewEventCard"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const Notices = () => {
  return (
    <div className={`${montserrat.className}`}>
      <h1
        className={`text-3xl md:text-5xl text-center text-primary-400 font-semibold mt-16 ${montserrat.className}`}>
        Recent Notices
      </h1>
      <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[80%] mx-auto w-full h-fit mt-5 gap-10">
        <NewEventCard />
        <NewEventCard />
      </div>
    </div>
  )
}

export default Notices