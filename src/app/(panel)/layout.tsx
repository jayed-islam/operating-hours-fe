import PanelLayout from "@/layouts/panel";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default Layout;
