"use client";

import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/adminSidebar";
import React from "react";
import { NavbarWrapper } from "../../../components/dashboardNavbar/navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
