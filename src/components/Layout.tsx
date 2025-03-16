import React, { ReactNode } from "react";
import Top from "./Top";
import Footer from "./Footer";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Top title="To Do List" />
      <div id="body">{children}</div>
      <Footer devName="Alexis E. Mata" appVersion="1.0.0" year="2025" />
    </>
  );
};

export default Layout;
