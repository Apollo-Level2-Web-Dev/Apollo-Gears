import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";

import { ChevronLeft, Menu, SearchCheck } from "lucide-react";
import { useSidebarContext } from "../../layout-context";
import { UserDropdown } from "./user-dropdown";
// import { useSidebarContext } from "../../dashboard/(userDashboard)/layout/layout-context";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          {collapsed ? (
            <ChevronLeft onClick={setCollapsed}></ChevronLeft>
          ) : (
            <Menu onClick={setCollapsed}></Menu>
          )}
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<SearchCheck />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <UserDropdown />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
