import React from "react"
import { Montserrat, Roboto, Inter } from "next/font/google"
import NewEventCard from "@/components/NewEventCard"
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

const Singleevent = () => {
  return (
    <div className={`card w-[80%] mx-auto pb-24 pt-16 ${montserrat.className}`}>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">ERC Run</h2>
        <div className="flex flex-row">
          <p className="text-[13px] font-normal">Event Date: 20 December</p>
          <p className="text-[13px] font-normal">Event Time: 12:05 AM</p>
          <p className="text-[13px] font-normal">
            Location: IOE Purwanchal Campus, Dharan
          </p>
        </div>
        <div className="badge badge-neutral">COMPLETED or UPCOMING</div>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <p className="my-5 pl-3">Description here</p>
      <hr />
      <div className="pl-3 my-5">
        <p>Logo: 20 December</p>
        <p>Logo: 12:05 AM</p>
        <p>Register: link (if event hasn't been completed)</p>
        <p>Images from the event: gallery link (if event has been completed)</p>
      </div>

      <NewEventCard />
    </div>
  )
}

export default Singleevent
