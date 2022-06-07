import api from "../api";
import { TeamType } from "./../../types/team-type";

export type getTeamsServiceProps = {
  params: {
    page: number;
    per_page: number;
  };
};

const getTeamsService = async ({ params }: getTeamsServiceProps) => {
  try {
    const urlParams = new URLSearchParams(params as any);
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/teams?${urlParams}`,
      {
        params: {
          page: params.page,
          per_page: params.per_page,
        },
      }
    );
    const meta = response.data.meta;
    const teamsCoreData = await response.data.data;
    const teams: TeamType[] = teamsCoreData.map((team: TeamType) => {
      const imageUrl = `/${team.name
        .toLowerCase()
        .replace(/\s/g, "")}-logo.webp`;
      return {
        ...team,
        image: imageUrl,
      };
    });
    return { teams, meta } as { teams: TeamType[]; meta: any };
  } catch (error) {
    throw error;
  }
};
export default getTeamsService;
