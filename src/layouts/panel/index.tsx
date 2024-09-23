"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "./sidebar";

interface Props {
  children: ReactNode;
}

const PanelLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen ">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        <div className="h-16 w-full fixed top-0 pb-5 bg-[#f5f7f9] z-20">
          <div className="bg-[#dce9ff] h-12 w-full"></div>
        </div>

        {/* Page Content */}
        <div className="mt-16 m-5 border-t border-l border-r border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
