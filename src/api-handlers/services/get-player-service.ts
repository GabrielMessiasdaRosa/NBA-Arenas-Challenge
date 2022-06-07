import api from "api-handlers/api";
import { PlayerType } from "types/player-type";

export type GetPlayerServiceProps = {
  playerId: PlayerType["id"];
};

export default async function getPlayerService({
  playerId,
}: GetPlayerServiceProps) {
  try {
    const response = (await api.get(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/players/${playerId}`
    )) as any;
    const player = response.data as PlayerType;
    return player;
  } catch (error) {
    throw error;
  }
}
