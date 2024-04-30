import { Menu } from '@mui/icons-material';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const montserrat = Montserrat({
  weight: ['100', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const UserNav = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      setMenu(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div
      className={`h-fit w-full flex flex-col items-center justify-center ${montserrat.className}`}
    >
      <div className="w-[90%] py-2 flex items-center  ">
        <div className="flex items-center h-full ">
          <Image
            alt="Free Student Union"
            width={20}
            height={20}
            src="/logo.png"
            className="w-fit h-[3rem] md:h-[4rem]"
            unoptimized
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full h-[4rem] flex justify-center bg-primary-400 py-4 ">
        <div className="w-[90%] flex justify-end  ">
          <nav className="hidden md:flex w-full justify-center ">
            {/* NavLinks */}
            <ul className="flex gap-8 items-center  ">
              <Link href="/">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Home
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/about">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  About
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/notice">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Notice
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/events">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Events
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Projects
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/committee">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Committee
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/gallery">
                <li
                  className="w-full flex flex-col overflow-hidden group text-background-50"
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Gallery
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
            </ul>
          </nav>

          <div
            className="flex md:hidden justify-center items-center "
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <Menu fontSize="large" />
          </div>
        </div>
      </div>
      {menu && (
        <div className="w-full flex md:hidden">
          <nav className="w-full justify-center ">
            {/* NavLinks */}
            <ul className="flex flex-col gap-8 items-center ">
              <Link href="/">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black mt-4 "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Home
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/about">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  About
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/notice">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Notice
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/events">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Events
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Projects
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/committee">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black "
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Committee
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/gallery">
                <li
                  className="w-full flex flex-col overflow-hidden group text-black mb-4"
                  // className="h-[1.6rem] hover:border-b-2 border-secondary-600 text-background-50 before:content-[''] before:absolute before:h-[1rem] before:border-b-2 before:border-b-secondary-600 "
                >
                  Gallery
                  <span className="border-[1.5px] border-secondary-600 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default UserNav;
