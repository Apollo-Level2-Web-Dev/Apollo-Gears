import React from "react";
// import { Layout } from "./components/layout/layout";
import { UserLayout } from "./layout/userLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" ">
      <UserLayout>
        <div>{children}</div>
      </UserLayout>
    </div>
  );
};

export default DashboardLayout;
