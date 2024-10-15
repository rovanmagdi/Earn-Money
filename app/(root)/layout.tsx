import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <img src="assets/img/green.png" className="absolute -z-10" />
      <img src="assets/img/yellow.png" className="absolute right-0 -z-10" />
      {children}
    </div>
  );
};

export default RootLayout;
