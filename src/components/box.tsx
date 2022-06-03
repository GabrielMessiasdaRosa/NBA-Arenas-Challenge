import React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const _Row = (props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`flex flex-row ${props.className || ""}`}
    />
  );
};

const _Column = (props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`flex flex-col ${props.className || ""}`}
    />
  );
};

const _Box = (props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
  return <div ref={ref} {...props} />;
};

const Box = React.forwardRef(_Box);
export default Box;
export const Row = React.forwardRef(_Row);
export const Column = React.forwardRef(_Column);
