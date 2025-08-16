import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default Layout;
