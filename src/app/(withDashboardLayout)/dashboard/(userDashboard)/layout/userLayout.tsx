"use client";

import { SidebarWrapper } from "@/app/(withDashboardLayout)/siderbar/sidebar.style";


interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>
    </section>
  );
};
