import React from "react";
import { Layout } from "./components/layout/layout";
import NavBar from "@/components/pages/shared/Navbar";
import { Navbar } from "@nextui-org/react";

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
