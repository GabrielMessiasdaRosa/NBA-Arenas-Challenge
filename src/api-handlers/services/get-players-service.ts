import { uniq } from "lodash";
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
    const corePlayers = await response.data.data;
    const players = uniq(corePlayers);
    const playersWithImage = await players.map((player: PlayerType) => {
      const playerWithImage = {
        ...player,
        image: `https://nba-players.herokuapp.com/players/${player.first_name.toLocaleLowerCase()}`,
      };
      return playerWithImage;
    });
    return { playersWithImage, meta };
  } catch (error) {
    console.log(error);
  }
};
export default getPlayersService;
