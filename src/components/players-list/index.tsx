import useGetPlayers from "api-handlers/api-hooks/use-get-players";
import { Column, Row } from "components/box";
import LoadingIcon from "components/loading-icon";
import Pagination from "components/pagination";
import useQueryParams from "hooks/use-query-params";
import React from "react";
import { PlayerType } from "types/player-type";
import PlayerDetailModal from "./player-detail-modal";
import PlayerListItem from "./player-list-item";

export type PlayersListProps = {};

const PlayersList = (props) => {
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState<PlayerType>();

  const { params, updateParams } = useQueryParams();
  const { players, meta, pending } = useGetPlayers({
    params,
    pageProps: props,
  });

  React.useEffect(() => {
    if (params.page === undefined && params.per_page === undefined) {
      updateParams({ page: 1, per_page: 28 });
    }
  }, [players]);

  return (
    <React.Fragment>
      <Row className="grid grid-cols-7 h-[840px] bg-slate-900 rounded-b-md shadow-xl px-2 py-5 ">
        {pending ? (
          <Column className="col-span-7 justify-center items-center">
            <LoadingIcon />
          </Column>
        ) : (
          players?.map((player, index) => {
            return (
              <React.Fragment key={index}>
                <PlayerListItem
                  onClick={() => {
                    setShowDetailModal(true);
                    setSelectedPlayer(player);
                  }}
                  player={player}
                />
              </React.Fragment>
            );
          })
        )}
        <PlayerDetailModal
          isOpen={showDetailModal}
          onRequestClose={() => setShowDetailModal(false)}
          playerId={selectedPlayer?.id}
        />
      </Row>
      <Pagination data={meta} />
    </React.Fragment>
  );
};

export default PlayersList;
