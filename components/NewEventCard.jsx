import Image from "next/image"
import Link from "next/link"
import React from "react"

const NewEventCard = (event) => {
  console.log(event)
  const eventDate = event?.event?.date
  const currentDate = new Date()

  const completedEvent = eventDate < currentDate
  const eventDateObject = new Date(eventDate)
  // console.log(eventDate.toString())

  const options = { day: "numeric", month: "long", year: "numeric" }

  const formattedDate = eventDateObject.toLocaleDateString("en-US", options)

  // console.log(event.event.title)
  return (
    <div className="card bg-base-100 w-max shadow-xl border-[1px] border-primary-600 pt-2 pb-4 px-2 flex justify-center">
      {/* <figure className=""> */}
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${event?.event?.thumbnail_url}`}
        alt="Shoes"
        width={300}
        height={300}
        className="border rounded-t-xl object-contain"
      />
      {/* </figure> */}
      <div className="card-body !px-5 !py-3">
        <Link
          href={`/events/${event?.event?._id}`}
          className="text-[18px] card-title ">
          {event?.event?.title}
        </Link>
        <div
          className={`badge ${
            completedEvent ? "bg-primary-600" : "bg-green-600"
          } text-white text-[10px]`}>
          {completedEvent ? "COMPLETED" : "UPCOMING"}
        </div>
        <p className="text-[13px]">{event?.event?.content}</p>
        <p className="text-[11px] flex gap-2 font-medium items-center">
          <span>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13">
              <path
                d="M3.5 0v5m8-5v5M5 8.5l2 2 3.5-4m-9-4h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                stroke="currentColor"></path>
            </svg>
          </span>
          {formattedDate}
        </p>
      </div>
    </div>
  )
}

export default NewEventCard
