import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
