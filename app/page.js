import { auth } from "@/auth";
import AllStudentsComponent from "@/components/AllStudentsComponent/AllStudentsComponent";
import SendEvent from "@/components/SendEvent/SendEvent";

export const metadata = {
  title: "Home",
  description: "Law Anatomy Home Page...!!",
};

const HomePage = async() => {
  const session=await auth();
  console.log({session})
  return (
    <>
      <h1>helooo belal..................</h1>
      <SendEvent/>
      < AllStudentsComponent/>
    </>
  );
};

export default HomePage;
