import { useRouter } from "next/router"
import React from "react"
import { Montserrat, Roboto, Inter } from "next/font/google"

import useSWR from "swr"
import NewEventCard from "@/components/NewEventCard"
import Image from "next/image"
import Link from "next/link"
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

const fetcher = (url) => fetch(url).then((res) => res.json())

const EventSlug = ({ initialData }) => {
  const router = useRouter()
  const eventId = router.query.slug

  const { data: event = [] } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event/${eventId}`,
    fetcher,
    { initialData }
  )

  console.log(event.data)

  const eventDate = event?.data?.date // Likely a string in ISO format
  const currentDate = new Date() // Current date as a Date object

  // Convert eventDate to a Date object
  const eventDateObject = new Date(eventDate)

  // Compare dates
  const completedEvent = eventDateObject < currentDate

  // Format the date
  const dateOptions = { day: "numeric", month: "long", year: "numeric" }
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: true,
  } // Format: "2:30 PM"
  const formattedDate = eventDateObject.toLocaleDateString("en-US", dateOptions)
  const formattedTime = eventDateObject.toLocaleTimeString("en-US", timeOptions)

  console.log("Formatted Date:", formattedDate)

  // return (
  //   <div className="min-h-[49rem] w-full ">
  //     Helo
  //     <div className=" w-full mt-10 flex flex-col items-center">
  //       <div className="text-center  ">
  //         <span className="text-4xl font-bold">{event.data.title}</span>
  //       </div>
  //       <div
  //         className="w-[60%] flex flex-col  "
  //         dangerouslySetInnerHTML={{ __html: event.content }}
  //       />
  //     </div>
  //   </div>
  // )
  return (
    <div className={`card w-[80%] mx-auto pb-24 pt-16 ${montserrat.className}`}>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{event?.data?.title}</h2>
        <div className="flex flex-row">
          <p className="text-[13px] font-normal">Event Date: {formattedDate}</p>
          <p className="text-[13px] font-normal">Event Time: {formattedTime}</p>
        </div>
        <div
          className={`badge text-white ${
            completedEvent ? "badge-warning" : "badge-success"
          }`}>{`${completedEvent ? "COMPLETED" : "UPCOMING"}`}</div>
      </div>
      <figure>
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${event?.data?.thumbnail_url}`}
          width={500}
          height={500}
          alt={event?.data?.title}
          className="object-contain"
        />
      </figure>
      <p className="my-5 pl-3">{event?.data?.content}</p>
      <hr />
      <div className="pl-3 my-5">
        <p className="flex flex-row items-center gap-2">
          <span>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18">
              <path
                d="M3.5 0v5m8-5v5M5 8.5l2 2 3.5-4m-9-4h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                stroke="currentColor"></path>
            </svg>
          </span>
          : 20 December
        </p>
        <p className="flex flex-row gap-2 items-center">
          <span>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18">
              <path
                d="M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z"
                fill="currentColor"></path>
            </svg>
          </span>
          : 12:05 AM
        </p>
        <p>
          Register:{" "}
          <Link href={event?.data?.registration || "/"} className="underline">
            Click here
          </Link>
        </p>
        <p>Images from the event: gallery link (if event has been completed)</p>
      </div>

      {/* <NewEventCard /> */}
    </div>
  )
}

export default EventSlug

export async function getServerSideProps(context) {
  const projectId = context.query.slug
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project/${projectId}`
  )
  return { props: { initialData } }
}
