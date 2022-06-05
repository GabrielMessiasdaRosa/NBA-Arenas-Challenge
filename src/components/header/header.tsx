import useQueryParams from "hooks/use-query-params";
import React from "react";
import HeaderTab from "./header-tab";

export type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const { params, updateParams } = useQueryParams();
  React.useEffect(() => {
    if (params.tab === undefined) {
      updateParams({ tab: "players" });
    }
  }, []);
  return (
    <>
      <header className="flex min-h-12 items-end justify-center bg-slate-800 shadow-md">
        <nav className="flex h-12 min-w-[752px] ">
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
