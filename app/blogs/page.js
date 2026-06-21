import ShowAllBlogsCard from "@/components/BlogsCard/ShowAllBlogsCard";
import { getAllBlogs } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "Law Anatomy Blogs Page...!!",
};


const BlogsPage = async() => {

  const allBlogs=await getAllBlogs();
  return (
    <div>
      <h1 className="text-6xl text-cyan-800 text-center">
        This is Blogs Page.....
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center my-7 p-40 bg-olive-100 text-xl">
        {
          allBlogs?.map((blog)=><Link key={blog?.blogId} href={`/blogs/${blog?.blogId}`}><ShowAllBlogsCard  blog={blog}/></Link>)
        }
      </div>

    </div>
  );
};

export default BlogsPage;
