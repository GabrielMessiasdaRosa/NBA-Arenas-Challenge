import getTeamService from "api-handlers/services/get-team-service";
import { useQuery } from "react-query";
import { TeamType } from "types/team-type";

export type UseGetTeamProps = {
  teamId: TeamType["id"];
};

export default function useGetTeam({ teamId }: UseGetTeamProps) {
  const shouldFetch = Boolean(teamId);
  const { data, error, status } = useQuery<TeamType>(
    ["/team/{id}", teamId],
    () => getTeamService({ teamId }),
    {
      enabled: shouldFetch,
      staleTime: 0,
    }
  );
  const team = data;
  return {
    team,
    error,
    pending: status === "loading",
  };
}
