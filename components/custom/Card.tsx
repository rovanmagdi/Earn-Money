import React from "react";

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="leading-[45px]">
      <h2 className="font-bold text-green-500">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
