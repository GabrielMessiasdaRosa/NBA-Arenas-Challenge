import React from "react";
export type Clickable = {
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentProps<"button">;

const Clickable = ({ children, ...props }: Clickable) => {
  return (
    <button
      {...props}
      className={`${props.disabled && "cursor-not-allowed"} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Clickable;
