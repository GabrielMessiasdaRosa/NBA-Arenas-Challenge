import { useQuery } from "react-query";
import getTeamsService from "../services/get-teams-service";

export type useGetTeamsProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
};

const useGetTeams = ({ params }: useGetTeamsProps) => {
  const { data, error, status } = useQuery([`/teams`, params], () =>
    getTeamsService({ params })
  );
  const teams = data?.teams;
  const meta = data?.meta;

  return {
    teams,
    meta,
    error,
    pending: status === "loading",
  };
};

export default useGetTeams;
