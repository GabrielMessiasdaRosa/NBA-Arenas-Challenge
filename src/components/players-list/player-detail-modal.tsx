import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import metalbg from "../../assets/images/metal-bg.jpg";
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
          />

          <svg
            className="absolute bottom-0 shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#273036"
              fill-opacity="1"
              d="M0,160L120,181.3C240,203,480,245,720,256C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute -bottom-20 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#273036"
              fill-opacity="1"
              d="M0,96L120,96C240,96,480,96,720,101.3C960,107,1200,117,1320,122.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
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
