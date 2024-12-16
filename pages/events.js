// import EventCard from '@/components/EventCard';
import NewEventCard from "@/components/NewEventCard"
import PastEvents from "@/components/PastEvents"
import UpcomingEvents from "@/components/UpcomingEvents"
// import { events } from '@/data/events';
import React from "react"
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

const Events = ({ initialData }) => {
  // console.log(initialData)
  const { data: events } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`,
    fetcher,
    initialData
  )

  // console.log(events.data)
  let finalEvents
  if (events) {
    finalEvents = events.data
    console.log(finalEvents)
  }

  // console.log(events);

  return (
    <div className="min-h-[90vh] flex justify-center font-[Montserrat] py-5 w-[80%] mx-auto">
      <div className="flex flex-row items-center justify-center flex-wrap gap-4 h-max">
        {finalEvents?.map((item, index) => (
          <NewEventCard key={index} event={item} />
        ))}
      </div>
      {/* <div className="w-[90%] py-16 flex flex-col gap-8">
        {events?.upcomingEvents && (
          <UpcomingEvents events={events?.upcomingEvents} />
        )}
        <PastEvents events={events?.pastEvents} />
      </div> */}
    </div>
  )
}

export default Events

// export async function getServerSideProps() {
//   const initialData = await fetcher(
//     `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`
//   )
//   return { props: { initialData } }
// }
