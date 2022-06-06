import { Column } from "components/box";
import Clickable from "components/clickable";
import Image from "next/image";
import React from "react";
import { TeamType } from "types/team-type";
export type TeamListItemProps = {
  team: TeamType;
  onClick: () => void;
};

const TeamListItem = ({ team, onClick }: TeamListItemProps) => {
  return (
    <Column className="items-center max-h-64 justify-center border m-1 overflow-hidden rounded-lg hover:bg-slate-700 cursor-pointer">
      <Clickable
        onClick={onClick}
        className="flex flex-col flex-1 w-full items-center justify-center overflow-hidden"
      >
        <Column className="rounded-full p-3 bg-slate-100">
          <Image
            className="object-contain shadow-xl"
            src={team.image}
            width={100}
            height={100}
            alt={team.name}
          />
        </Column>
        <span className="text-white text-3xl">{team.name}</span>
      </Clickable>
    </Column>
  );
};

export default TeamListItem;
