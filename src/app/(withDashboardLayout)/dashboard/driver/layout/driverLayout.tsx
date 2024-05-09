"use client";

import { DriverSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/driverSidebar";
import React from "react";
import { NavbarWrapper } from "../../../components/dashboardNavbar/navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <DriverSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
