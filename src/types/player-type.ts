import { TeamType } from "./team-type";

export type PlayerType = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  team: TeamType;
  image: string;
};
