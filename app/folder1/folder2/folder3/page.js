import Link from 'next/link';
import React from 'react';

const Folder3page = () => {
  return (
    <div>
     <h1 className='text-5xl text-red-700 text-center'>This is Folder Three Page...!!</h1>
     <Link href="/folder1/folder2">Go To Folder1</Link>
    </div>
  );
};

export default Folder3page;