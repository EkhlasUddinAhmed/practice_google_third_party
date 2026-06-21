import Link from 'next/link';
import React from 'react';

const InterceptedFolder2page = () => {
  return (
    <div>
     <h1 className='text-5xl text-red-700 text-center'>This isInterceptedFolder2page Page...!!</h1>
     <Link href="/folder1/folder2">Go To Folder2</Link>
    </div>
  );
};

export default InterceptedFolder1page;