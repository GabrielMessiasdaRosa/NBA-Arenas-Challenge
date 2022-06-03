import React from "react";
import { Column, Row } from "../components/box";
import Layout from "../components/default-layout";
import Header from "../components/header/header";
import useQueryParams from "../hooks/use-query-params";
import { players } from "../utils/mocks/players";

const IndexPage = () => {
  const { params, updateParams } = useQueryParams();
  React.useEffect(() => {
    updateParams({ tab: "players" });
  }, []);
  const isPlayersPage = params.tab === "players";
  return (
    <Layout title="Home | NBA Arenas Challenge">
      <Header />
      <Column className="items-center justify-center">
        <Column className="min-w-[750px]">
          {isPlayersPage && (
            <Row className="grid grid-cols-7 bg-slate-900 px-2 py-5">
              {players.map((player) => {
                return (
                  <Column className="w-24 h-48 border border-slate-400 rounded-md overflow-hidden">
                    <Row className="bg-white min-w-24 min-h-24">
                      <img
                        className="object-cover"
                        src={player.image}
                        alt={player.name}
                      />
                    </Row>
                    <Column className="px-2 ">
                      <span className="text-slate-50 text-sm font-light">
                        {player.name}
                      </span>
                      <span className="text-slate-50 text-xs font-light">
                        {player.position}
                      </span>
                      <span className="text-slate-50 text-xs font-light">
                        {player.team}
                      </span>
                    </Column>
                  </Column>
                );
              })}
            </Row>
          )}
        </Column>
      </Column>
    </Layout>
  );
};

export default IndexPage;
