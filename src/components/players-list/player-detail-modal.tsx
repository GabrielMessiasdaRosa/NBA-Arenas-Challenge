import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import GoogleLogo from "../../assets/svg/google-logo.svg";
import NbaLogo from "../../assets/svg/nba-logo.svg";
import { PlayerType } from "../../types/player-type";
import { Column, Row } from "../box";
import Clickable from "../clickable";
import Modal from "../modal";
export type PlayerDetailModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  player: PlayerType;
};

const PlayerDetailModal = ({
  isOpen,
  onRequestClose,
  player,
}: PlayerDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Row className="w-full justify-between">
        <NbaLogo className="w-12 h-12" />
        <Clickable
          onClick={() => onRequestClose()}
          className="transition-all hover:bg-red-100 w-6 h-6 hover:text-gray-900 rounded-md"
        >
          <XIcon />
        </Clickable>
      </Row>
      <Column className="flex-1">
        <Column>
          <Column className="shadow-md rounded-lg overflow-hidden w-[400px] h-[290px]">
            <Image
              className="object-cover"
              width={400}
              height={290}
              unoptimized={true}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://static.ratemyagent.com/assets/images/placeholder/agent.jpg";
              }}
              src={`https://nba-players.herokuapp.com/players/${player?.last_name.toLocaleLowerCase()}/${player?.first_name.toLocaleLowerCase()}`}
            />
          </Column>
          <Row className="py-4 justify-between items-center">
            <span className="text-4xl font-light">
              {player?.first_name} {player?.last_name}
            </span>
            <Clickable
              onClick={() => {
                const playerFullname = `${player?.first_name}+${player?.last_name}`;
                return window.open(
                  `https://www.google.com/search?q=${playerFullname}`,
                  "_blank"
                );
              }}
              className="justify-between items-center"
            >
              <GoogleLogo className="w-6 h-6" />
            </Clickable>
          </Row>
        </Column>
        <Row className="grid grid-cols-2 gap-y-4 rounded-lg shadow-md bg-slate-50 h-30 p-2">
          <Column className="text-xl font-light">
            <span className="font-bold">Actual Team: </span>
            {player?.team.name}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Position: </span>
            {player?.position ? player.position : "N/A"}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Height: </span>

            {player?.height_feet && player?.height_inches
              ? ` ${player?.height_feet}' ${player?.height_inches}"`
              : "N/A"}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Weight: </span>
            {`${
              player?.weight_pounds ? player?.weight_pounds + " lbs" : "N/A"
            }`}
          </Column>
        </Row>
      </Column>
    </Modal>
  );
};

export default PlayerDetailModal;
