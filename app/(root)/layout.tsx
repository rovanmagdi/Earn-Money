import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <img src="assets/img/green.png" className="absolute -z-10" />
      <img src="assets/img/yellow.png" className="absolute right-0 -z-10" />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
