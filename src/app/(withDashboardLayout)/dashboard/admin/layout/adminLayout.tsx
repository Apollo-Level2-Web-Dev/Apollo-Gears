import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/adminSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AdminSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
