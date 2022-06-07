import { useQuery } from "react-query";
import getPlayersService from "../services/get-players-service";

export type useGetPlayersProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
};

const useGetPlayers = ({ params }: useGetPlayersProps) => {
  const { data, error, status } = useQuery([`/players`, params], () =>
    getPlayersService({ params })
  );
  const players = data?.players;
  const meta = data?.meta;
  return {
    players,
    meta,
    error,
    pending: status === "loading",
  };
};

export default useGetPlayers;
