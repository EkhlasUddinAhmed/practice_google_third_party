import BlogCard from "@/components/BlogsCard/BlogCard";
import ButtonClickNavigate from "@/components/ButtonClickNavigate/ButtonClickNavigate";
import { getAllBlogs, getBlogById } from "@/data/blog";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    blogId: blog.blogId,
  }));
}

const ShowBlogDetailsPage = async ({ params }) => {
  const { blogId } = await params;

  const singleBlog = await getBlogById(blogId);
  console.log("Blog is:", singleBlog);

  return (
    <div>
      <BlogCard {...singleBlog} />

      <div>
        <ButtonClickNavigate href="/blogs">Back</ButtonClickNavigate>
      </div>
    </div>
  );
};

export default ShowBlogDetailsPage;
