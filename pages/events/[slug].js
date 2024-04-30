import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const EventSlug = ({ initialData }) => {
  const router = useRouter();
  const eventId = router.query.slug;

  const { data: event = [] } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event/${eventId}`,
    fetcher,
    { initialData }
  );

  return (
    <div className="min-h-[49rem] w-full ">
      <div className=" w-full mt-10 flex flex-col items-center">
        <div className="text-center  ">
          <span className="text-4xl font-bold">{event.title}</span>
        </div>
        <div
          className="w-[60%] flex flex-col  "
          dangerouslySetInnerHTML={{ __html: event.content }}
        />
      </div>
    </div>
  );
};

export default EventSlug;

export async function getServerSideProps(context) {
  const projectId = context.query.slug;
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project/${projectId}`
  );
  return { props: { initialData } };
}
