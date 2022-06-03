import React from "react";
import Layout from "../components/default-layout";
import { players } from "../utils/mocks/players";

const IndexPage = () => {
  return (
    <Layout title="Home | NBA Arenas Challenge">
      <p>
        {players.map((player) => (
          <div className="flex flex-row">
            <p className="mr-2 bg-blue-600">{player.name}</p>
            <p className="bg-slate-500">{player.team}</p>
          </div>
        ))}{" "}
      </p>
    </Layout>
  );
};

export default IndexPage;
