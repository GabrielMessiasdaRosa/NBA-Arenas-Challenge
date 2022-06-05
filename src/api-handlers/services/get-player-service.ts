import api from "api-handlers/api";
import { PlayerType } from "types/player-type";

export type GetPlayerServiceProps = {
  playerId: PlayerType["id"];
};

export default async function getPlayerService({
  playerId,
}: GetPlayerServiceProps) {
  try {
    const response = (await api.get(`/api/players/${playerId}`)) as any;
    const player = response.data as PlayerType;
    return player;
  } catch (error) {
    throw error;
  }
}
