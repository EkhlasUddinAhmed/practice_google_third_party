import React from 'react';
import {auth} from "@/auth"
import StudentDashboard from './../../components/StudentDashboard/StudentDashboard';
import AdminDashboard from './../../components/AdminDashboard/AdminDashboard';
const DashboardPage = async() => {

  const session=await auth()

   const role = session?.user?.role;

  return (
    <>
      {role === "student" ? <StudentDashboard /> : <AdminDashboard />}
    </>
  );
};

export default DashboardPage;