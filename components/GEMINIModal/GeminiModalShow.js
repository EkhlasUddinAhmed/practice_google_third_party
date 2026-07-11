"use client"
import React, { useState } from 'react';
import GeminiModal from './GeminiModal';


export default function GeminiModalShow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-10">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Modal খুলুন
      </button>

      <GeminiModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="কনফার্মেশন"
      >
        <p className="text-gray-600 mb-4">
          আপনি কি নিশ্চিত যে এটি সেভ করতে চাচ্ছেন?
        </p>
        <div className="flex justify-end gap-3">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            বাতিল
          </button>
          <button 
            onClick={() => {
                alert("Saved!");
                setIsModalOpen(false);
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            সেভ করুন
          </button>
        </div>
      </GeminiModal>
    </div>
  );
}