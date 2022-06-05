import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import metalbg from "assets/images/metal-bg.jpg";
import GoogleLogo from "assets/svg/google-logo.svg";
import NbaLogo from "assets/svg/nba-logo.svg";
import WaveIcon from "assets/svg/wave.svg";
import { PlayerType } from "types/player-type";
import Modal from "components/modal";
import { Column, Row } from "components/box";
import Clickable from "components/clickable";
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
      <Column className="w-full h-full bg-white rounded-md shadow-xl">
        <Column className="shadow-xl relative">
          <Row className="w-full justify-between p-6 absolute z-50">
            <NbaLogo className="w-12 h-12" />
            <Clickable
              onClick={() => onRequestClose()}
              className="transition-all hover:bg-slate-100 w-6 h-6 hover:text-gray-900 rounded-md"
            >
              <XIcon />
            </Clickable>
          </Row>
          <Image
            className="object-cover"
            width={720}
            height={500}
            unoptimized={true}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://static.ratemyagent.com/assets/images/placeholder/agent.jpg";
            }}
            src={`https://nba-players.herokuapp.com/players/${player?.last_name.toLocaleLowerCase()}/${player?.first_name.toLocaleLowerCase()}`}
            alt={player?.first_name}
          />
          <WaveIcon className="absolute bottom-0 shadow-2xl text-info-900" />
        </Column>
        <Column className="flex-1 ">
          <Column className="relative">
            <Row className="py-4 absolute z-50 w-full p-6">
              <span className="text-4xl font-semibold text-white">
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
                className="justify-between items-center absolute right-8 top-4 rounded-full z-50 transition-all bg-slate-100 hover:bg-slate-600 p-2"
              >
                <GoogleLogo className="w-6 h-6 " />
              </Clickable>
            </Row>
          </Column>
          <Column className="overflow-hidden h-20">
            <Image src={metalbg} className="object-cover shadow-xl" />
          </Column>
          <Row className="grid grid-cols-2 gap-y-4 rounded-lg shadow-md bg-slate-50 h-30 p-6">
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
      </Column>
    </Modal>
  );
};

export default PlayerDetailModal;
