"use client";

import { SidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";
import React from "react";
import { NavbarWrapper } from "../../../components/dashboardNavbar/dashboardNavbar";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
