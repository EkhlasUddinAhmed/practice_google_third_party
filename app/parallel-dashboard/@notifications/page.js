import { waitSomeTimes } from "@/lib/waitSomeTimes";
import Link from "next/link";
import React from "react";

const NotificationsPage = async() => {
  

  
  return (
    <div className="col-span-1 row-span-2 p-3 m-3 bg-cyan-700 h-[624px] ">
      <h1 className="text-4xl text-blue-800 text-center text-white">
        This is NotificationsPage.....
      </h1>

      
      <Link href="/parallel-dashboard/seen">See All Nitification</Link>
    </div>
  );
};

export default NotificationsPage;
