import { Column } from "components/box";
import DefaultLayout from "components/default-layout";
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
    <DefaultLayout title="Home | NBA Arenas Challenge">
      <Column className="items-center justify-center">
        <Column className="min-w-[750px]">
          {isPlayersPage && <PlayersList />}
          {isTeamsPage && <TeamsList />}
        </Column>
      </Column>
    </DefaultLayout>
  );
};

export default HomeScreen;
