import React from "react";
export type Clickable = {
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentProps<"button">;

const Clickable = ({ children, ...props }: Clickable) => {
  return <button {...props}>{children}</button>;
};

export default Clickable;
