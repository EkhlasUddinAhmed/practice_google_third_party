"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

const GenericModal = ({ children }) => {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick=useCallback((e)=>{
     if(e.target===overlay.current||e.target===wrapper.current){
             if(onDismiss){
                onDismiss();
             }
     }
  },[onDismiss,overlay,wrapper])


  const onKeyDown=useCallback((e)=>{
        if(e.key==="Escape"){
         onDismiss();
        }
  },[onDismiss])


  useEffect(()=>{
    document.addEventListener("keydown",onKeyDown)

    return ()=>document.removeEventListener("keydown",onKeyDown)
  },[onKeyDown])

  return (
    <div
    onClick={onClick}
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/70 p-10"
    >
      <div
       onClick={onClick}
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5"
      >
        {children}
      </div>
    </div>
  );
};

export default GenericModal;
