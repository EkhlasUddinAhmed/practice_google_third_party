// app/not-found.js (বা pages/404.js)
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="relative max-w-lg w-full text-center">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
          <div className="mb-6">
            <span className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              404
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            পেজটি পাওয়া যায়নি!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা বিদ্যমান নেই।
          </p>
          <Link href="/">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
              🏠 হোমপেজে ফিরে যান
            </button>
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-gray-500">
          অথবা ব্রাউজারের ব্যাক বাটন ব্যবহার করুন
        </p>
      </div>
    </div>
  );
}