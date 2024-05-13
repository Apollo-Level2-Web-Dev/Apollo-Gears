import { Avatar, Tooltip } from "@nextui-org/react";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

import { Car, Cog, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "../../layout/layout-context";

export const AdminSidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {" "}
          <Link className="flex" href="/">
            <Cog />
            <p className="font-bold text-inherit px-4">APOLLO GEARS</p>
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="admin"
              icon={<Home />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/admin/cars-management"}
                title="cars manage"
                icon={<Car />}
                href="/dashboard/admin/cars-management"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/users-management"}
                title="users manage"
                icon={<User />}
                href="/dashboard/admin/users-management"
              />
              <CollapseItems
                icon={<Home />}
                items={["Banks Accounts", "Credit Cards"]}
                title="Balances"
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Customers"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title="Products"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<Home />}
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/developers"}
                title="Developers"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/view"}
                title="View Test Data"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<Home />}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<Home />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <Home />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <Home />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
