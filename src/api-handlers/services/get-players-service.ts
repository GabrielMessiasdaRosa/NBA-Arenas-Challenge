import { PlayerType } from "../../types/player-type";
import api from "../api";

export type getPlayersServiceProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
};

const getPlayersService = async ({ params }: getPlayersServiceProps) => {
  try {
    const response = await api.get(`/api/players`, {
      params: {
        page: params.page,
        per_page: params.per_page,
        search: params.search,
      },
    });
    const meta = response.data.meta;
    const players = await response.data.data;

    return { players, meta } as { players: PlayerType[]; meta: any };
  } catch (error) {
    throw error;
  }
};
export default getPlayersService;
