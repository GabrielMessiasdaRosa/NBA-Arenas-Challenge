import React from "react";
import useGetPlayers from "../../api-handlers/api-hooks/use-get-players";
import useQueryParams from "../../hooks/use-query-params";
import { PlayerType } from "../../types/player-type";
import { Column, Row } from "../box";
import Clickable from "../clickable";
import Pagination from "../pagination";
import PlayerDetailModal from "./player-detail-modal";
export type PlayersListProps = {};

const PlayersList = ({}: PlayersListProps) => {
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState<PlayerType>();
  const { params, updateParams } = useQueryParams();
  const { data: players } = useGetPlayers(params);
  React.useEffect(() => {
    if (params.page === undefined && params.per_page === undefined) {
      updateParams({ page: 1, per_page: 28 });
    }
  }, [players]);
  return (
    <>
      <Row className="grid grid-cols-7 bg-slate-900 rounded-b-md shadow-xl px-2 py-5 ">
        {players?.playersWithImage?.map((player) => {
          return (
            <>
              <Clickable
                onClick={() => {
                  setShowDetailModal(true);
                  setSelectedPlayer(player);
                }}
              >
                <Column className="w-24 h-48 m-1 border border-slate-400  rounded-md overflow-hidden cursor-pointer">
                  <Row className="bg-white min-w-24 min-h-24">
                    {player?.image ? (
                      <img
                        className="object-cover"
                        src={player.image}
                        alt={player.first_name}
                      />
                    ) : (
                      <img
                        className="object-cover"
                        src="https://via.placeholder.com/150"
                        alt={player.first_name}
                      />
                    )}
                  </Row>
                  <Column className="px-2 ">
                    <span className="text-slate-50  text-sm font-light">
                      {player.first_name}
                    </span>
                    <span className="text-slate-50  text-sm font-light">
                      {player.last_name}
                    </span>
                    <span className="text-slate-50 text-xs font-light">
                      {player.position}
                    </span>
                    <span className="text-slate-50 text-xs font-light">
                      {player.team.name}
                    </span>
                  </Column>
                </Column>
              </Clickable>
            </>
          );
        })}

        <PlayerDetailModal
          isOpen={showDetailModal}
          onRequestClose={() => setShowDetailModal(false)}
          player={selectedPlayer}
        />
      </Row>
      <Pagination data={players?.meta} />
    </>
  );
};

export default PlayersList;
