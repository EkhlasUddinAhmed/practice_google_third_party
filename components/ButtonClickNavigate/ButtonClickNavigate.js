"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonClickNavigate = ({href,children}) => {

  const router=useRouter();

  const handleCustomNavigation=()=>{
    router.push(href)
  }
  return (
    <button onClick={handleCustomNavigation} className="btn btn-neutral">{children}</button>
  );
};

export default ButtonClickNavigate;