import Link from "next/link";

const SeenAllNotificationsPage = () => {
  return (
    <div className="col-span-1 row-span-2 p-3 m-3 bg-cyan-700 h-[624px] ">
      <h1>I have seen All Notifications....!!!</h1>
      <Link href="/parallel-dashboard">Go To Parallel DashBoard</Link>
    </div>
  );
};

export default SeenAllNotificationsPage;
