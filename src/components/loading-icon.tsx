import { ArrowDownIcon } from "@heroicons/react/outline";
import React from "react";
import { Column } from "./box";
export type LoadingIconProps = {};

const LoadingIcon = ({}: LoadingIconProps) => {
  return (
    <>
      <Column className="text-white flex items-center justify-center">
        <ArrowDownIcon className="h-24 w-24 animate-bounce" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 -translate-y-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m"
          />
        </svg>
      </Column>
    </>
  );
};

export default LoadingIcon;
