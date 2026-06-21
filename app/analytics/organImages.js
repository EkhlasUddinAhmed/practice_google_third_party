import Banner from "./Images/banner.png";
import Brain from "./Images/brain.png";
import Eye from "./Images/eye.png";
import Heart from "./Images/cardiology.png";
import Kidney from "./Images/kidney.png";
import Orthopedics from "./Images/orthopedics.png";
import Teeth from "./Images/teeth.png";

const OrganImages = [
  {
    imageId: "1",
    title: "Banner",
    image: Banner,
  },
  {
    imageId: "2",
    title: "Brain",
    image: Brain,
  },
  {
    imageId: "3",
    title: "Eye",
    image: Eye,
  },
  {
    imageId: "4",
    title: "Heart",
    image: Heart,
  },
  {
    imageId: "5",
    title: "Kidney",
    image: Kidney,
  },
  {
    imageId: "6",
    title: "Orthopedics",
    image: Orthopedics,
  },
  {
    imageId: "7",
    title: "Teeth",
    image: Teeth,
  },
];

export const allImages = async () => {
  return OrganImages;
};


export const getImageById = async (id) => {
  const image=OrganImages.find((image)=>image.imageId===id)
  return  image
};