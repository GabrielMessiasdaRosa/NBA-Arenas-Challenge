import { useQuery } from "react-query";
import getPlayersService from "../services/get-players-service";

export type useGetPlayersProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
};

const useGetPlayers = (params: useGetPlayersProps) => {
  const { data, error, status } = useQuery([`/players`, params], () =>
    getPlayersService(params)
  );
  return {
    data,
    error,
    pending: status === "loading",
  };
};
export default useGetPlayers;
