import GenericModal from "@/components/GenericModal/GenericModal";
import OpenGenericModalButton from "@/components/GenericModal/OpenGenericModalButton";
import { allImages } from "@/app/analytics/organImages";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllStudentsFromDB } from "@/query/student";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Analytics",
  description: "Law Anatomy Analutics Page...!!",
};

const AnalyticsPage = async () => {
  const images = await allImages();
  let allStudents = [];
  try {
    const students = await getAllStudentsFromDB();
    console.log("From Analytics, All Students results are:", students);

    if (students?.success) {
      allStudents = [...students.data];
    } else {
     console.log("Refresh Token Expired.....!!!")
    }
  } catch (error) {
   console.log("Refresh Token Expired.....!!!")
  }

  return (
    <div>
      <h1 className="text-6xl text-red-800 text-center">
        This is AnalyticsPage.....
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        {images?.map((image) => (
          <Link key={image?.imageId} href={`/analytics/${image?.imageId}`}>
            {" "}
            <Image
              src={image?.image}
              alt={image?.title}
              className="w-full rounded-2xl aspect-square object-cover"
            />
          </Link>
        ))}
      </div>
      <div className="mt-7 bg-amber-100 h-[400px]">
        <h1>Number of user are:{allStudents?.length}</h1>
      </div>
    </div>
  );
};

export default AnalyticsPage;
