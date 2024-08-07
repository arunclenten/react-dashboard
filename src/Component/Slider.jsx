import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdAssessment } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";

const Slider = () => {
  const menus = [
    { name: "dashboard", link: "/dashboard", icon: IoHomeSharp },
    { name: "user", link: "/user", icon: MdAssessment },
    { name: "analytics", link: "/analytics", icon: MdAssignmentTurnedIn, margin: true },
    { name: "file manager", link: "/file-manager", icon: IoWallet },
    { name: "calendar", link: "/calendar", icon: IoIosBriefcase },
  ];
  const lastMenu = { name: "logout", link: "/logout", icon: IoMdLogIn };
  const [open, setOpen] = useState(true);

  return (
    <section className="flex side-bar-new">
      <div
        className={`bg-gray-800 min-h-screen sidebar-menu ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 flex flex-col justify-between`}
      >
        <div>
          <div className="pb-5 flex justify-end mt-5">
            <IoGrid
              size={26}
              className="cursor-pointer text-blue-400"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-5 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && ""
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div
                  className="relative group-hover:before:absolute group-hover:before:left-0 group-hover:before:top-1/2 group-hover:before:-translate-y-1/2 group-hover:before:h-4 group-hover:before:w-1 group-hover:before:bg-blue-400 group-hover:text-blue-400"
                >
                  {React.createElement(menu?.icon, { size: "20", className: "group-hover:text-blue-400" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <Link
            to={lastMenu?.link}
            className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div
              className="relative group-hover:before:absolute group-hover:before:left-0 group-hover:before:top-1/2 group-hover:before:-translate-y-1/2 group-hover:before:h-4 group-hover:before:w-1 group-hover:before:bg-blue-400 group-hover:text-blue-400"
            >
              {React.createElement(lastMenu?.icon, { size: "20", className: "group-hover:text-blue-400" })}
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {lastMenu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {lastMenu?.name}
            </h2>
          </Link>
        </div>
      </div>
      <div className="text-xl text-gray-900 font-semibold">
    
      </div>
    </section>
  );
};

export default Slider;
