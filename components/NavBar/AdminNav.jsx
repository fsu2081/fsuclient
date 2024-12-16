import { Close } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const AdminNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter()
  const path = router.pathname

  return (
    <div className="drawer lg:drawer-open z-[100] sticky top-0 ">
      <input
        id="my-drawer"
        type="checkbox"
        checked={isSidebarOpen}
        className="drawer-toggle"
        readOnly
      />
      <div className="drawer-side rounded-r-3xl shadow-lg bg-white ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className="w-fit h-full flex flex-col ">
          <header className=" w-full h-fit  flex flex-col justify-center items-center ">
            <div className="flex lg:hidden h-16 w-full items-center justify-start">
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
          <ul className="menu bg-base-200 text-base-content h-full min-w-80 w-full p-4">
            <Link
              className={`p-4 duration-300 ${
                path === "/admin"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin">
              Dashboard
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/notice"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/notice">
              Notice
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/event"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/event">
              Event
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/project"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/project">
              Project
            </Link>
            <Link
              className={`p-4   duration-300 ${
                path === "/admin/gallery"
                  ? "bg-blue-400 text-white"
                  : "hover:bg-neutral-200"
              } `}
              href="/admin/gallery">
              Gallery
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNav
