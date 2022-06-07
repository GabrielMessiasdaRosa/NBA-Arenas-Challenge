import useGetTeams from "api-handlers/api-hooks/use-get-teams";
import { Column, Row } from "components/box";
import LoadingIcon from "components/loading-icon";
import Pagination from "components/pagination";
import SearchInput from "components/search-input";
import useQueryParams from "hooks/use-query-params";
import React from "react";
import { TeamType } from "types/team-type";
import TeamDetailModal from "./team-detail-modal";
import TeamListItem from "./team-list-item";
export type TeamsList = {};

const TeamsList = ({}: TeamsList) => {
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<TeamType>();
  const [search, setSearch] = React.useState("");

  const { params } = useQueryParams();
  const { teams, meta, pending } = useGetTeams({ params });

  const filteredTeams = teams?.filter((team) => {
    return (
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.full_name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <React.Fragment>
      <Column className="py-4 w-52">
        <SearchInput
          label="Search team"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Column>
      <Row className="grid grid-cols-2 min-w-[752px] h-[840px] bg-slate-900 rounded-md shadow-xl px-2 py-5 ">
        {pending ? (
          <Column className="col-span-2 justify-center items-center">
            <LoadingIcon />
          </Column>
        ) : (
          filteredTeams?.map((team, index) => {
            return (
              <React.Fragment key={index}>
                <TeamListItem
                  team={team}
                  onClick={() => {
                    setShowDetailModal(true);
                    setSelectedTeam(team);
                  }}
                />
              </React.Fragment>
            );
          })
        )}
      </Row>
      <Pagination data={meta} />
      <TeamDetailModal
        isOpen={showDetailModal}
        onRequestClose={() => {
          setShowDetailModal(false);
        }}
        teamId={selectedTeam?.id}
      />
    </React.Fragment>
  );
};

export default TeamsList;
