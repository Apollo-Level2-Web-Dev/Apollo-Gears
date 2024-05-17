import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { DriverSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/driverSidebar";

export default function DriverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <DriverSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
