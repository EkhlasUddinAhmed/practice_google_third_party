"use client";

import { getAllStudentsFromDB } from "@/query/student";
import React, { useEffect, useState, useTransition } from "react";

const AllStudentsComponent = () => {
  const [students, setStudents] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleGetAllStudents = async () => {
   
    try {
      const data = await getAllStudentsFromDB();

      if (data?.success) {
        setStudents([...data.data]);
        console.log(
          "From All Students Component, data is:---------------:",
          students,
        );
      }
    } catch (error) {
      console.log("Fetch Button Click Error:", error?.message);
    }
  };

  console.log("Number of Students are:", students);

  return (
    <div className="my-10 bg-amber-100">
      <h1>
        NUmber of Students:
        {students?.length > 0 ? students?.length : 0}
      </h1>
      <button
        onClick={() =>
          startTransition(async () => {
            await handleGetAllStudents();
          })
        }
        className="btn btn-info"
        disabled={isPending}
      >
        {isPending ? "Fetching" : "FetchAllStudents"}
      </button>
    </div>
  );
};

export default AllStudentsComponent;
