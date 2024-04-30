import EventCard from '@/components/EventCard';
import PastEvents from '@/components/PastEvents';
import UpcomingEvents from '@/components/UpcomingEvents';
// import { events } from '@/data/events';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Events = ({ initialData }) => {
  // console.log(initialData)
  const { data: events } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`,
    fetcher,
    initialData
  );
  // console.log(events);

  // console.log(events);

  return (
    <div className="w-full min-h-[49rem] flex justify-center ">
      <div className="w-[90%] py-16 flex flex-col gap-8">
        {events?.upcomingEvents && (
          <UpcomingEvents events={events?.upcomingEvents} />
        )}
        <PastEvents events={events?.pastEvents} />
      </div>
    </div>
  );
};

export default Events;

export async function getServerSideProps() {
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`
  );
  return { props: { initialData } };
}
