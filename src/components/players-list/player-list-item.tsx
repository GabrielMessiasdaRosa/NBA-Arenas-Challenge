import Image from "next/image";
import React from "react";
import { PlayerType } from "../../types/player-type";
import { Column, Row } from "../box";
import Clickable from "../clickable";
export type PlayerListItemProps = {
  player: PlayerType;
  onClick: () => void;
};

const PlayerListItem = ({ player, onClick }: PlayerListItemProps) => {
  return (
    <>
      <Clickable onClick={onClick}>
        <Column className="w-24 h-48 m-1 border border-slate-400 rounded-md overflow-hidden cursor-pointer justify-between">
          <Row className="bg-white min-w-24 min-h-24 ">
            <Image
              className="object-cover"
              width={96}
              height={96}
              unoptimized={true}
              placeholder="blur"
              blurDataURL="https://via.placeholder.com/150"
              loading="eager"
              onError={({ currentTarget }) => {
                currentTarget.src =
                  "https://static.ratemyagent.com/assets/images/placeholder/agent.jpg";
              }}
              src={`https://nba-players.herokuapp.com/players/${player?.last_name.toLocaleLowerCase()}/${player?.first_name.toLocaleLowerCase()}`}
              alt={player.first_name}
            />
          </Row>
          <Column className="px-2 py-4 text-left ">
            <span className="text-slate-50  text-sm font-light">
              {player.first_name}
            </span>
            <span className="text-slate-50  text-sm font-light">
              {player.last_name}
            </span>
            <span className="text-slate-50 text-xs font-light">
              {player.position}
            </span>
            <span className="text-slate-50 text-xs font-light">
              {player.team.name}
            </span>
          </Column>
        </Column>
      </Clickable>
    </>
  );
};

export default PlayerListItem;
