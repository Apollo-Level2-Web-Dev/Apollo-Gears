import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen">
        <div className="w-96 bg-black text-white">SideBar</div>
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
