import React from "react";
// import { Layout } from "./components/layout/layout";
import { Layout } from "./layout/layout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className=" ">
        <Layout>
          <div>{children}</div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
