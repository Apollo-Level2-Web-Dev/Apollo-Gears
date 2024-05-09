import React from "react";
// import { Layout } from "./components/layout/layout";
import { Layout } from "./layout/driverLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" ">
      <Layout>
        <div>{children}</div>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
