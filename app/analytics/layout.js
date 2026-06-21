import React from "react";

const ParallelImageLayout = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default ParallelImageLayout;
