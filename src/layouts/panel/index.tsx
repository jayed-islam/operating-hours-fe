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
    <div className="flex h-screen bg-[#f5f7f9]">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        {/* App Bar */}
        <div className="">appbar</div>

        {/* Page Content */}
        <div className="mt-16 m-5 bg-black border-t border-l border-r border-gray-200 shadow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
