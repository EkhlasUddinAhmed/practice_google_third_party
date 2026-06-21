import React from "react";
import { getImageById } from "../organImages";
import Image from "next/image";

const SingleImagePage = async ({ params }) => {
  const { id } = await params;

  const image = await getImageById(id);
 
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl text-center text-blue-700 ">{image?.title}</h1>
        <Image
          src={image?.image}
          alt={image?.title}
          className="w-[1000px] h-[800px]  rounded-2xl aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default SingleImagePage;
