"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavButton = ({ href, children }) => {
  const pathName = usePathname();

  const isActiveLink = pathName === href;
  return <Link 
  className={isActiveLink?"text-white bg-slate-800 transition-all duration-300 ease-in-out ":""}
  href={href}>{children}</Link>;
};

export default ActiveNavButton;
