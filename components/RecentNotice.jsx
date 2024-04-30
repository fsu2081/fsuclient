import React, { useEffect, useState } from 'react';
// import { notice } from '@/api/notice';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const RecentNotice = () => {
  // const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const newsCount = 5;
  const { data: notices, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice/recent`,
    fetcher
  );

  // useEffect(() => {
  //   getRecentNotices();
  // }, []);

  // const getRecentNotices = async () => {
  //   try{
  //     const result = await
  //   }catch(error){
  //     console.log(error)
  //   }
  // };

  console.log(notices);

  return (
    <div className="w-full h-fit shadow-lg shadow-[#07040334] rounded-lg p-4 ">
      <div>
        <span className="font-bold text-2xl text-[#2e4f96] font-[Montserrat]">
          Recent Notices
        </span>
      </div>
      {notices ? (
        notices.map((item, i) => (
          <div key={i} className="mt-5">
            <div className="flex items-start gap-5 py-2">
              <Image
                alt="notice"
                width={25}
                height={30}
                src="/icons/notice.png"
                className="object-contain "
                unoptimized
              />
              <Link href={`/notice/${item._id}`}>
                <span className="font-semibold hover:text-primary-400 text-[1.2rem] hover:text-background-color font-[Montserrat]">
                  {item.title}
                </span>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="py-2 mt-5 flex flex-col gap-5">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="w-[90%] flex flex-col gap-5  ">
              {/* <Skeleton className="h-[2rem]" /> */}
              <Skeleton className="h-[2rem]" width={'100%'} />
              {/* <Skeleton className="h-[1.5rem]" width={'80%'} /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentNotice;
