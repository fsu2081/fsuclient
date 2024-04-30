import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarMonth } from '@mui/icons-material';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import RecentNotice from '@/components/RecentNotice';

const fetcher = (url) => fetch(url).then((res) => res.json());

const NoticeSlug = ({ initialData }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const noticeId = router.query.slug;
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { data: notice, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice/${noticeId}`,
    fetcher,
    { initialData }
  );

  console.log(notice);

  const date = new Date(notice?.createdAt);

  const formattedDate = date.toLocaleDateString('en-US', {
    timeZone: 'Asia/Kathmandu',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kathmandu',
  });

  const isPDF = notice?.image?.toLowerCase().endsWith('.pdf');

  // console.log(isPDF);

  if (!notice) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center ">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center my-20 min-h-[49rem]">
        <div className="w-[90%] flex ">
          <div className="w-full ">
            <div className="w-full flex flex-col items-center ">
              <div className="w-full mb-14 ">
                <motion.h1 className="text-4xl text-black font-extrabold font-[Arial]">
                  {notice.title}
                </motion.h1>
                <div className="w-full flex h-[4rem] items-center text-neutral-500 text-lg ">
                  <CalendarMonth />
                  <span className="ml-2 font-semibold">
                    {formattedDate} {formattedTime}{' '}
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between ">
                <div className="lg:flex-none flex-1 border-2 lg:w-[60%]">
                  {/* <Image
                  alt="notice image"
                  src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${notice.image}`}
                  width={100}
                  height={100}
                  className="cursor-pointer w-full "
                  unoptimized
                /> */}
                  {isPDF ? (
                    <iframe
                      src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${notice?.image}`}
                      className="w-full h-[50rem] " // Adjust height as needed
                    ></iframe>
                  ) : (
                    <Image
                      alt="notice image"
                      src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${notice.image}`}
                      width={100}
                      height={100}
                      className="cursor-pointer w-full"
                      unoptimized
                    />
                  )}
                  {/* <div dangerouslySetInnerHTML={{ __html: notice.content }} /> */}
                </div>
                <div className="container hidden lg:flex md:w-[30%] px-5 py-4 h-max">
                  <RecentNotice />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NoticeSlug;

export async function getServerSideProps(context) {
  const noticeId = context.query.slug;
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice/${noticeId}`
  );
  return { props: { initialData } };
}
