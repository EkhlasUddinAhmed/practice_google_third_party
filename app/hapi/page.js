import SetQueryParameters from "@/components/SetQueryParameters/SetQueryParameters";
import React, { Suspense } from "react";

const HistoryApiPage = () => {
  return (
    <div>
      <Suspense fallback={<h1>Setting Query Patameter</h1>}>
        <SetQueryParameters />
      </Suspense>
    </div>
  );
};

export default HistoryApiPage;
