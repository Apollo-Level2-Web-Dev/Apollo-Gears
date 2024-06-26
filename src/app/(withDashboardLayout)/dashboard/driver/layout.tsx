import type { Metadata } from "next";
import DriverLayout from "./layout/driverLayout";

export const metadata: Metadata = {
  title: "Driver Dashboard",
  description: "Generated by create next app",
};

export default function DriverServerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DriverLayout>{children}</DriverLayout>
    </div>
  );
}
