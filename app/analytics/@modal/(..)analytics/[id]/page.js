import { getImageById } from "@/app/analytics/organImages";
import GenericModal from "@/components/GenericModal/GenericModal";
import Image from "next/image";
import React from "react";

const ShowImageOnModal = async ({ params }) => {
  const { id } = await params;

  const image = await getImageById(id);

  return (
    <div>
      <GenericModal>
        <Image
          src={image?.image}
          alt={image?.title}
          className="w-full rounded-2xl aspect-square object-cover"
        />
      </GenericModal>
    </div>
  );
};

export default ShowImageOnModal;
