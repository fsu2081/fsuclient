import React from "react"
import NewEventCard from "../NewEventCard"
import RecentNotice from "../RecentNotice"

import useSWR from "swr"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const fetcher = (url) => fetch(url).then((res) => res.json())

// const Events = () => {
const Events = ({}) => {
  // console.log(initialData)
  const { data: events } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`,
    fetcher
  )

  // console.log(events.data)
  let finalEvents
  if (events) {
    finalEvents = events.data
    // console.log(finalEvents)
  }

  const currentDate = new Date()

  // Step 1: Sort events by proximity to the current date
  const sortedEvents = finalEvents?.sort((a, b) => {
    const diffA = Math.abs(new Date(a.date) - currentDate)
    const diffB = Math.abs(new Date(b.date) - currentDate)
    return diffA - diffB
  })

  // Step 2: Select the closest 4 events
  const closestEvents = sortedEvents?.slice(0, 4)

  console.log(closestEvents)

  return (
    <div
      className={`${montserrat.className} flex flex-col lg:flex-row flex-wrap gap-3  justify-between w-[80%] mx-auto`}>
      <div className=" flex flex-col items-center justify-center">
        <h1
          className={`text-3xl md:text-5xl text-center text-primary-400 font-semibold mt-16 ${montserrat.className}`}>
          Recent Events
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto h-fit mt-5 gap-5">
          {closestEvents?.map((item, index) => (
            <NewEventCard event={item} key={index} />
          ))}
        </div>
      </div>
      <div
        className={`text-3xl md:text-5xl font-semibold mt-16 align-top ${montserrat.className} mr-0`}>
        <RecentNotice />
      </div>
    </div>
  )
}

export default Events
