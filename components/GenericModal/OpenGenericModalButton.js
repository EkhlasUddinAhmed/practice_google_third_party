"use client"
import React from "react";
import GenericModal from "./GenericModal";

const OpenGenericModalButton = () => {
  return (
    <>
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal_5").showModal()}
    >
      open modal
    </button>
    
    </>
  );
};

export default OpenGenericModalButton;
