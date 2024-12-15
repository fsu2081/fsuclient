import EventCard from "@/components/EventCard";
import PastEvents from "@/components/PastEvents";
import UpcomingEvents from "@/components/UpcomingEvents";
// import { events } from '@/data/events';
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Events = () => {
  const { data: events } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`,
    fetcher
  );
  console.log(events);

  return (
    <div className="w-full min-h-[49rem] flex justify-center ">
      <div className="w-[90%] py-16 flex flex-col gap-8">
        {events && <UpcomingEvents events={events} />}
        <PastEvents events={events} />
      </div>
    </div>
  );
};

export default Events;
