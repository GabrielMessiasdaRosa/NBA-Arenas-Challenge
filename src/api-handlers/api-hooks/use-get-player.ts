import getPlayerService from "api-handlers/services/get-player-service";
import { useQuery } from "react-query";
import { PlayerType } from "types/player-type";

export type UseGetPlayerProps = {
  playerId: PlayerType["id"];
};

export default function useGetPlayer({
  playerId,
}: UseGetPlayerProps) {
  const shouldFetch = Boolean(playerId);
  const { data, error, status } = useQuery<PlayerType>(
    ["/player/{id}", playerId],
    () => getPlayerService({ playerId }),
    {
      enabled: shouldFetch,
      staleTime: 0,
    }
  );
  const player = data;
  return {
    player,
    error,
    pending: status === "loading",
  };
}
