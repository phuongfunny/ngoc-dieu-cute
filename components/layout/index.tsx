import React from "react";
import Footer from "../footer/footer";
import Header from "../header";

interface Layout {
  children: any;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <div className="app-root">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
