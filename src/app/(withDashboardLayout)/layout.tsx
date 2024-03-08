import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen ">
        <div className="min-w-72 h-screen bg-slate-100">SideBar</div>
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
