import { Column } from "components/box";
import Layout from "components/default-layout";
import Header from "components/header/header";
import PlayersList from "components/players-list";
import useQueryParams from "hooks/use-query-params";
import React from "react";
export type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  const { params } = useQueryParams();
  const isPlayersPage = params.tab === "players";
  return (
    <Layout title="Home | NBA Arenas Challenge">
      <Header />
      <Column className="items-center justify-center">
        <Column className="min-w-[750px]">
          {isPlayersPage && <PlayersList />}
        </Column>
      </Column>
    </Layout>
  );
};

export default HomeScreen;
