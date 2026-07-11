import React from "react";
import Svg from "./Svg";
import Link from "next/link";
import ActiveNavButton from "../ActiveNavButton/ActiveNavButton";
import { auth } from "@/auth";
import Logout from "../LogOut/Logout";

const Header = async () => {
  const session = await auth();

  
  const Nav_Links = [
    { id: "1", name: "Home", href: "/" },
    { id: "2", name: "Settings", href: "/settings" },
    { id: "3", name: "Analytics", href: "/analytics" },
    { id: "4", name: "Blogs", href: "/blogs" },
    { id: "5", name: "HistoryApi", href: "/hapi" },
    { id: "6", name: "ParallelDashboard", href: "/parallel-dashboard" },
    // { id: "7", name: "Login", href: "/login" },
    ...(!session?.user?.email
      ? [
          { id: "7", name: "Login", href: "/login" },
          { id: "8", name: "Register", href: "/register" },
        ]
      : [{ id: "9", name: "Dashboard", href: "/dashboard" }]),
  ];

  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-1 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <Svg />
          </label>
          <Link href="/">
            <button className="btn btn-ghost text-xl">
              <span className="text-red-900">LAW</span>
              <span className="text-blue-700">ANATOMY</span>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Nav_Links?.map((navLink) => (
              <li key={navLink?.id}>
                <ActiveNavButton href={navLink?.href}>
                  {" "}
                  <button>{navLink?.name}</button>
                </ActiveNavButton>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">{session?.user?.email && <Logout />}</div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          {Nav_Links?.map((navLink) => (
            <li key={navLink?.id}>
              <ActiveNavButton href={navLink?.href}>
                {" "}
                <button>{navLink?.name}</button>
              </ActiveNavButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
