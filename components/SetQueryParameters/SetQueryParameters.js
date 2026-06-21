"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SetQueryParameters = () => {
  const searchParams = useSearchParams();
  const router=useRouter();
  const pathname=usePathname()


  const setOrder = (order) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", order);
    // window.history.pushState(null, '', `?${params.toString()}`)
   
    const REDIRECT_TO=pathname+`?${params.toString()}`
    router.push(REDIRECT_TO)

  };
  
  return (
    <div>
      <h1 className="text-3xl text-purple-800 text-center">
        SetQueryParameters Components
      </h1>

      <div className="my-5 p-5 bg-olive-200 h-60 space-x-4  ">
        <button
          onClick={() => setOrder("asc")}
          className="btn btn-accent text-white text-2xl"
        >
          Ascending Order
        </button>
        <button
          onClick={() => setOrder("dsc")}
          className="btn btn-info text-white text-2xl"
        >
          Descending Order
        </button>
      </div>
    </div>
  );
};

export default SetQueryParameters;
