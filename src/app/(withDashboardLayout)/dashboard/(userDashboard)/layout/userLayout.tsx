"use client";

import React from "react";
import { NavbarWrapper } from "../../../components/dashboardNavbar/navbar";
import { SidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";

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
