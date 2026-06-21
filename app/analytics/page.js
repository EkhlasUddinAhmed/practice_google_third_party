import GenericModal from "@/components/GenericModal/GenericModal";
import OpenGenericModalButton from "@/components/GenericModal/OpenGenericModalButton";
import { allImages } from "@/app/analytics/organImages";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Analytics",
  description: "Law Anatomy Analutics Page...!!",
};

const AnalyticsPage = async () => {
  const images = await allImages();

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
    </div>
  );
};

export default AnalyticsPage;
