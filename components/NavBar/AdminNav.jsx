import { Close } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AdminNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="drawer lg:drawer-open sticky top-0 z-[100]  ">
      <input
        id="my-drawer"
        type="checkbox"
        readOnly
        checked={isSidebarOpen}
        className="drawer-toggle"
      />
      <div className=" drawer-side  shadow-lg  ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="lg:w-[300px] h-full flex flex-col  ">
          <header className="relative h-fit w-fit  flex flex-col justify-center items-center ">
            <div className="absolute top-2 right-2 flex lg:hidden ">
              <Close
                fontSize="large"
                className="cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>
            <div className="flex">
              <Image
                src="https://placehold.co/680x320"
                alt=""
                height={10}
                width={10}
                className="w-full h-full object-cover"
              />
            </div>
          </header>
          <ul className="menu bg-base-200 text-base-content h-full min-w-80 w-full p-4 bg-white ">
            <Link
              className={`p-4 duration-300 ${
                path === "/admin"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin"
            >
              Dashboard
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/notice"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/notice"
            >
              Notice
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/event"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/event"
            >
              Event
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/project"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/project"
            >
              Project
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/gallery"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/gallery"
            >
              Gallery
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
