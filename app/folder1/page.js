import Link from 'next/link';
import React from 'react';

const FolderOnePage = () => {
  return (
    <div>
      <h1 className='text-5xl text-red-700 text-center'>This is Folder One Page.....!!!!</h1>
    
      <Link href="/folder1/folder2">Go To Folder 2 Page</Link>
      <Link href="/folder1/folder2/folder3">Go To Folder 3 Page</Link>
    </div>
  );
};

export default FolderOnePage;