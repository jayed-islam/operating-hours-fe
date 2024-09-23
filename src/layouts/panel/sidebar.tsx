import React, { useState, useEffect } from "react";
import { Drawer, List, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { configsNavs } from "./config_navigation";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();
  const drawerWidth = 240;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = () => {
    if (!isDesktop) {
      toggleSidebar();
    }
  };

  return (
    <Drawer
      variant={isDesktop ? "persistent" : "temporary"}
      anchor="left"
      open={isOpen || isDesktop}
      onClose={toggleSidebar}
      sx={{ width: isOpen || isDesktop ? drawerWidth : 0, border: "none" }}
      classes={{
        paper: "text-gray-800 bg-[#f5f7f9] w-60 border-none",
      }}
    >
      <div className="">
        <div className="bg-[#dce9ff] h-12 w-full"></div>
        <div className="p-5">
          <Typography variant="h6" mb={3}>
            Settings
          </Typography>
          <List className="p-0 m-0">
            {configsNavs.map((item, index) => (
              <Link href={item.route} key={index}>
                <div
                  key={index}
                  onClick={() => handleItemClick()}
                  className={`hover:bg-[#dce9ff] transition-all duration-500 px-3 py-2  mb-2 flex items-center gap-3 rounded-lg ${
                    pathname === item.route && "bg-[#dce9ff] "
                  }`}
                >
                  <div className="text-gray-500">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              </Link>
            ))}
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
