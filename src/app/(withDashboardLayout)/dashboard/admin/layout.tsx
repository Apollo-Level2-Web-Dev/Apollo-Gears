import type { Metadata } from "next";
import AdminLayout from "./layout/adminLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function AdminServerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* {children} */}
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
