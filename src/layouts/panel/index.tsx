"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "./sidebar";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

interface Props {
  children: ReactNode;
}

const PanelLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex pb-5">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="w-full">
        <div className="h-16 w-full fixed top-0 pb-5 bg-[#f5f7f9] z-50">
          <div className="bg-[#dce9ff] h-12 w-full"></div>
        </div>

        <IconButton className="mt-16 lg:hidden ml-5" onClick={toggleSidebar}>
          <Menu className="text-black" />
        </IconButton>

        {/* Page Content */}
        <div className="mt-5 lg:mt-16 m-5 border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
