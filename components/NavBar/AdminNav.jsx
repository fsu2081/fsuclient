import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AdminNav = () => {
  const router = useRouter();
  const path = router.pathname;

  //Handles logout logic
  const handleLogoutClick = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      ).then((r) => {
        return r.json();
      });
      if (result.status === "success") {
        router.push("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[18rem] h-[100vh] flex flex-col items-center bg-white ">
      <div className="w-[18rem] h-full flex flex-col justify-between items-center fixed ">
        <div className="w-full h-full">
          <div className="w-full h-[12rem] bg-blue-500 flex justify-center items-center ">
            <span className="text-2xl text-white ">Free Student Union</span>
          </div>
          {/* Admin Links */}
          <div className=" ">
            <ul className="w-full flex flex-col ">
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

        <div className="w-full">
          <button
            className="p-2 px-2 w-full bg-blue-400 text-white text-lg hover:bg-blue-500 duration-300  "
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
