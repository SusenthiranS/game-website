import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">{children}</div>
    </div>
  );
};

export default Layout;
