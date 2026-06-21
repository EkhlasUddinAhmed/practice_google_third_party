// components/BlogCard.jsx
'use client'; // Next.js App Router-এ ক্লায়েন্ট কম্পোনেন্ট করতে (ঐচ্ছিক)

const BlogCard = ({ blogId, title, description }) => {
  return (
    <div
      className="max-w-3xl w-full mx-auto bg-white dark:bg-gray-900 
                 rounded-3xl shadow-xl overflow-hidden
                 transition-all duration-300 ease-in-out
                 hover:shadow-2xl hover:-translate-y-2
                 border border-gray-100 dark:border-gray-800"
    >
      <div className="p-8 md:p-10 lg:p-12">
        {/* ----- হেডার: blogId ব্যাজ + ডেকোরেটিভ আইকন ----- */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 
                       rounded-full text-xs font-mono font-semibold
                       bg-indigo-50 text-indigo-700 
                       dark:bg-indigo-900/40 dark:text-indigo-300
                       border border-indigo-200 dark:border-indigo-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            {blogId}
          </span>

          {/* ডেকোরেটিভ ডট (শুধু ডিজাইনের জন্য) */}
          <span className="flex items-center gap-1 text-gray-300 dark:text-gray-700">
            <span className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500"></span>
            <span className="w-2 h-2 rounded-full bg-indigo-300 dark:bg-indigo-600"></span>
            <span className="w-2 h-2 rounded-full bg-indigo-200 dark:bg-indigo-700"></span>
          </span>
        </div>

        {/* ----- টাইটেল (বড় ও গাঢ়) ----- */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
                     text-gray-900 dark:text-white 
                     leading-tight tracking-tight mb-5"
        >
          {title}
        </h2>

        {/* ----- ডেসক্রিপশন (পরিষ্কার ও পড়তে আরামদায়ক) ----- */}
        <p
          className="text-base sm:text-lg md:text-xl 
                     text-gray-600 dark:text-gray-300 
                     leading-relaxed"
        >
          {description}
        </p>

        {/* ----- ফুটার (ভিজুয়াল সেপারেটর + ক্যাপশন) ----- */}
        <div className="mt-8 pt-5 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between text-sm text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>আপডেট: আজ</span>
            </span>
            <span className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400 font-medium">
              <span>বিস্তারিত</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;