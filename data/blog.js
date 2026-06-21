const blogs = [
  {
    blogId: "blog-001",
    title: "Getting Started with React Hooks",
    description:
      "Learn the fundamentals of useState, useEffect, and building custom hooks in React.",
  },
  {
    blogId: "blog-002",
    title: "Mastering CSS Grid Layout",
    description:
      "A complete guide to creating responsive and complex layouts using CSS Grid.",
  },
  {
    blogId: "blog-003",
    title: "Understanding JavaScript Closures",
    description:
      "Deep dive into lexical scoping, closures, and their practical use cases.",
  },
  {
    blogId: "blog-004",
    title: "10 Tips for Better UI/UX Design",
    description:
      "Improve your design workflow with these proven user experience best practices.",
  },
  {
    blogId: "blog-005",
    title: "Introduction to Node.js and Express",
    description:
      "Build your first REST API with Node.js, Express, and MongoDB.",
  },
  {
    blogId: "blog-006",
    title: "A Beginner's Guide to TypeScript",
    description:
      "Why TypeScript matters and how to gradually adopt it in your JavaScript projects.",
  },
  {
    blogId: "blog-007",
    title: "Optimizing Web Performance",
    description:
      "Techniques like lazy loading, code splitting, and caching to speed up your site.",
  },
  {
    blogId: "blog-008",
    title: "State Management in Vue.js",
    description:
      "Using Pinia and Vuex to manage application state efficiently.",
  },
  {
    blogId: "blog-009",
    title: "CSS Animations with Tailwind",
    description:
      "How to use Tailwind's utility classes to create smooth, performant animations.",
  },
  {
    blogId: "blog-010",
    title: "Deploying Apps with Docker",
    description:
      "Containerize your applications and deploy them seamlessly with Docker and Kubernetes.",
  },
];

export const getAllBlogs = async() => {
  const allBlogs=await new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogs);
    }, 400);
  });

  return allBlogs;
};

export const getBlogById = (id) => {
  const blog = blogs.find((blog) => blog?.blogId === id);
  return blog;
};
