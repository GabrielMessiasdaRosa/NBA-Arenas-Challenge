import api from "api-handlers/api";
import { TeamType } from "types/team-type";

export type GetTeamServiceProps = {
  teamId: TeamType["id"];
};

export default async function getTeamService({ teamId }: GetTeamServiceProps) {
  try {
    const response = (await api.get(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/teams/${teamId}`
    )) as any;
    const team = response.data as TeamType;

    const imageUrl = `/${team.name.toLowerCase().replace(/\s/g, "")}-logo.webp`;
    const westernDivisionImageUrl = `/western-conference-logo.webp`;
    const easternDivisionImageUrl = `/eastern-conference-logo.webp`;

    const conferenceImageUrl =
      response.data.conference === "West"
        ? westernDivisionImageUrl
        : easternDivisionImageUrl;

    return {
      ...team,
      conference: {
        name: response.data.conference,
        imageUrl: conferenceImageUrl,
      },
      image: imageUrl,
    } as TeamType;
  } catch (error) {
    throw error;
  }
}
