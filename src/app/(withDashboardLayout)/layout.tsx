
import type { Metadata } from "next";
import DashboardLayout from "./layout/dashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Book your next adventure with Apollo Gears.",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
