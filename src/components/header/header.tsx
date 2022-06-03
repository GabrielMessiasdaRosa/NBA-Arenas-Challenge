import React from "react";
import useQueryParams from "../../hooks/use-query-params";
import HeaderTab from "./header-tab";
export type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const { updateParams } = useQueryParams();
  return (
    <>
      <header className="flex h-20 items-end justify-center bg-slate-800 shadow-md">
        <nav className="flex h-12 min-w-[752px] max-w-3xl">
          <HeaderTab
            label="Players"
            onClick={() => {
              updateParams({ tab: "players" });
            }}
          />
          <HeaderTab
            label="Teams"
            onClick={() => {
              updateParams({ tab: "teams" });
            }}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
