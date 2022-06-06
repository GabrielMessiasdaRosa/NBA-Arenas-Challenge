import { Column } from "components/box";
import Layout from "components/default-layout";
import Header from "components/header/header";
import PlayersList from "components/players-list";
import TeamsList from "components/teams-list";
import useQueryParams from "hooks/use-query-params";
import React from "react";
export type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  const { params } = useQueryParams();
  const isPlayersPage = params.tab === "players";
  const isTeamsPage = params.tab === "teams";
  return (
    <Layout title="Home | NBA Arenas Challenge">
      <Header />
      <Column className="items-center justify-center">
        <Column className="min-w-[750px]">
          {isPlayersPage && <PlayersList />}
          {isTeamsPage && <TeamsList />}
        </Column>
      </Column>
    </Layout>
  );
};

export default HomeScreen;
