import useGetPlayers from "api-handlers/api-hooks/use-get-players";
import { Column, Row } from "components/box";
import LoadingIcon from "components/loading-icon";
import Pagination from "components/pagination";
import SearchInput from "components/search-input";
import useDebounce from "hooks/use-debounce";
import useQueryParams from "hooks/use-query-params";
import React from "react";
import { PlayerType } from "types/player-type";
import PlayerDetailModal from "./player-detail-modal";
import PlayerListItem from "./player-list-item";

export type PlayersListProps = {};

const PlayersList = () => {
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState<PlayerType>();
  const [search, setSearch] = React.useState("");

  const { params, updateParams } = useQueryParams();
  const { players, meta, pending } = useGetPlayers({
    params,
  });

  React.useEffect(() => {
    if (params.page === undefined && params.per_page === undefined) {
      updateParams({ page: 1, per_page: 28 });
    }
  }, [players]);

  useDebounce({
    delay: 700,
    value: search,
    onDebounce: (debouncedValue) => {
      updateParams({ search: debouncedValue });
    },
  });

  return (
    <React.Fragment>
      <Column className="py-4 w-52">
        <SearchInput
          label="Search player"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Column>
      <Row className="grid grid-cols-7 min-w-[752px] h-[840px] bg-slate-900 rounded-md shadow-xl px-2 py-5 ">
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
