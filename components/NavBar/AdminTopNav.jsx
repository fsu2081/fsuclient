import { AccountCircle, Menu } from '@mui/icons-material';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';

const montserrat = Montserrat({
  weight: ['100', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const AdminTopNav = () => {
  const [menu, setMenu] = useState();
  return (
    <div>
      <div
        className={`h-[4rem] w-full flex items-center justify-end relative ${montserrat.className}`}
      >
        <div
          className="flex md:hidden w-full relative left-4 "
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <Menu fontSize="large" />
        </div>

        <div className=" rounded-full cursor-pointer relative right-4 text-4xl ">
          <AccountCircle color="primary" fontSize="inherit" />
        </div>
      </div>
      {menu && (
        <div className="w-full flex md:hidden relative">
          <nav className="w-full justify-center ">
            {/* NavLinks */}
            <ul className="flex flex-col gap-8 items-center ">
              <Link href="/admin">
                <li className="w-full flex flex-col overflow-hidden group text-black mt-4 ">
                  Dashboard
                  <span className="border-[1.5px] border-gray-200 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/admin/notice">
                <li className="w-full flex flex-col overflow-hidden group text-black ">
                  Notice
                  <span className="border-[1.5px] border-gray-200 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/admin/event">
                <li className="w-full flex flex-col overflow-hidden group text-black ">
                  Event
                  <span className="border-[1.5px] border-gray-200 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/admin/project">
                <li className="w-full flex flex-col overflow-hidden group text-black ">
                  Project
                  <span className="border-[1.5px] border-gray-200 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
              <Link href="/admin/gallery">
                <li className="w-full flex flex-col overflow-hidden group text-black ">
                  Gallery
                  <span className="border-[1.5px] border-gray-200 -translate-x-full group-hover:translate-x-0 duration-300 "></span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AdminTopNav;
