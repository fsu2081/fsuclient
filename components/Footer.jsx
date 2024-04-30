import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const montserrat = Montserrat({
  weight: ["100", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const Footer = () => {
  return (
    <footer
      className={`text-white body-font font-[Poppins] bg-transparent overflow-hidden  relative ${montserrat.className}`}>
      <div className="absolute w-full h-full top-0 bg-gradient-radial from-[#e08c3e] to-[#dd6515] filter blur-[5px] brightness-110 -z-[10] "></div>
      <div className=" bg-background-color px-5 py-8 md:py-12 lg:py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="md:w-[40%] lg:w-[20%] flex flex-col flex-shrink-0 md:mx-[5%] mx-auto text-center md:text-left gap-5">
          <Link
            href="/"
            className="w-full flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              alt="fsu logo"
              src="/logo.png"
              width={80}
              height={80}
              className="w-[80%] md:w-full h-full "
              unoptimized
            />
            {/* <div className="w-full flex flex-col">
              <span className=" text-2xl">Free Student Union</span>
              <span className="text-sm text-[#a3a1a1] ">
                Purwanchal Campus, Dharan
              </span>
            </div> */}
          </Link>
          <div className="flex md:flex-col title-font font-medium justify-center md:items-start md:ml-5 items-center text-white">
            <div className="flex flex-1 flex-col">
              <span className="text-secondary-900 font-bold text-left">
                Telephone:
              </span>
              <a
                href="tel:9812345678"
                className="hover:text-secondary-800 text-left">
                9812345678
              </a>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-secondary-900 font-bold text-left">
                Email:
              </span>
              <a
                href="mailto:fsu.erc@ioepc.edu.np"
                className="hover:text-secondary-800 text-left"
                target="_blank">
                fsu.erc@ioepc.edu.np
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-40 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-full px-4">
            <h2 className="font-extrabold text-secondary-900 tracking-widest text-lg mb-3">
              NAVIGATION
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/classroom"
                  className="text-white hover:text-secondary-800">
                  Class Details
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-white hover:text-secondary-800">
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/bloodgroup"
                  className="text-white hover:text-secondary-800">
                  Blood Group
                </Link>
              </li>
              <li>
                <Link
                  href="/notice"
                  className="text-white hover:text-secondary-800">
                  Notice
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4">
            <h2 className=" font-extrabold text-secondary-900 tracking-widest text-lg mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={``} className="text-white hover:text-secondary-800">
                  Class Details
                </Link>
              </li>
              <li>
                <Link href={``} className="text-white hover:text-secondary-800">
                  IOE Admission
                </Link>
              </li>
              <li>
                <Link href={``} className="text-white hover:text-secondary-800">
                  Institute of Engineering
                </Link>
              </li>
              <li>
                <Link href={``} className="text-white hover:text-secondary-800">
                  Portal
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4">
            <h2 className="font-extrabold text-secondary-900 tracking-widest text-lg mb-3">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={`https://entrance.ioe.edu.np/`}
                  className="text-white hover:text-secondary-800">
                  IOE Entrance
                </Link>
              </li>
              <li>
                <Link
                  href={`https://admission.ioe.edu.np/`}
                  className="text-white hover:text-secondary-800">
                  IOE Admission
                </Link>
              </li>
              <li>
                <Link
                  href={`/notice`}
                  className="text-white hover:text-secondary-800">
                  New Notice
                </Link>
              </li>
              <li>
                <Link
                  href={`/complain`}
                  className="text-white hover:text-secondary-800">
                  Complain Box
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gradient-radial from-[#b44242ab] to-[#dd6515] w-[100%] ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row w-[80%] ">
          <p className="text-white text-xs md:text-sm text-center sm:text-left">
            © 2023 Free Student Union, Dharan, Nepal
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
              href={``}
              className="text-white hover:text-secondary-800 shadow-lg  duration-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              href={``}
              className="ml-3 text-white hover:text-secondary-800 shadow-lg duration-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link
              href={``}
              className="ml-3 text-white hover:text-secondary-800 shadow-lg duration-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              href={``}
              className="ml-3 text-white hover:text-secondary-800 shadow-lg duration-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
