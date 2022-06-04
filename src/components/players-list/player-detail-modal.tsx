import { XIcon } from "@heroicons/react/outline";
import React from "react";
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
            <img src={player?.image} />
          </Column>
          <Row className="py-4">
            <span className="text-4xl font-light">
              {player?.first_name} {player?.last_name}
            </span>
          </Row>
        </Column>
        <Row className="grid grid-cols-2 gap-y-4 rounded-lg shadow-md bg-slate-50 h-30 p-2">
          <Column className="text-xl font-light">
            <span className="font-bold">Actual Team: </span>
            {player?.team.name}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Position: </span>
            {player?.position}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Height: </span>

            {player?.height_feet && player?.height_inches != null
              ? ` ${player?.height_feet}' ${player?.height_inches}"`
              : "N/A"}
          </Column>

          <Column className="text-xl font-light">
            <span className="font-bold">Weight: </span>
            {`${
              player?.weight_pounds != null
                ? player?.weight_pounds + " lbs"
                : "N/A"
            }`}
          </Column>
        </Row>
      </Column>
    </Modal>
  );
};

export default PlayerDetailModal;
