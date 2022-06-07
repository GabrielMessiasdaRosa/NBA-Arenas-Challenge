import NbaLogo from "assets/svg/nba-logo.svg";
import { Row } from "components/box";
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
      <header className="flex min-h-20 justify-center bg-slate-800 shadow-md">
        <Row className="items-end flex-1">
          <Row className="mr-24 items-center">
            <NbaLogo className="w-20 h-20 " />
            <span className="text-3xl font-bold text-white ">NBA</span>
          </Row>
          <nav className="flex h-12 min-w-[752px] ">
            <HeaderTab
              label="Players"
              onClick={() => {
                updateParams({ tab: "players", page: 1, per_page: 28 });
              }}
            />
            <HeaderTab
              label="Teams"
              onClick={() => {
                updateParams({ tab: "teams", page: 1, per_page: 8 });
              }}
            />
          </nav>
        </Row>
      </header>
    </>
  );
};

export default Header;
