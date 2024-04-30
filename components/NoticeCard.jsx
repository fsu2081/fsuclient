import { CalendarMonth } from '@mui/icons-material';
import { Montserrat, Roboto, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const montserrat = Montserrat({
  weight: ['100', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

const NoticeCard = ({ notice }) => {
  const date = new Date(notice.createdAt);

  const formattedDate = date.toLocaleDateString('en-US', {
    timeZone: 'Asia/Kathmandu',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kathmandu',
  });

  return (
    <div
      className={`w-[80%] pb-4 h-full flex flex-col items-center ${montserrat.className} gap-4 border-2 border-secondary-800  `}
    >
      <div className="w-full h-[12rem] bg-secondary-800  flex justify-center ">
        <Image
          alt=""
          width={150}
          height={100}
          src="/fsu.webp"
          className=" object-contain "
          unoptimized
        />
      </div>
      <div className="w-[90%] flex flex-col gap-4  ">
        <Link href={`/notice/${notice._id}`}>
          <div
            className={` text-xl font-semibold hover:text-primary-400 transition-colors duration-300 ${inter.className} `}
          >
            {notice.title}
          </div>
        </Link>
        <div className="text-neutral-500 font-sans font-semibold flex items-center gap-2 ">
          <CalendarMonth color="inherit" />
          <span>{formattedDate}</span>

          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
