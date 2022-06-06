import { XIcon } from "@heroicons/react/outline";
import useGetTeam from "api-handlers/api-hooks/use-get-team";
import NbaLogo from "assets/svg/nba-logo.svg";
import { Column, Row } from "components/box";
import Clickable from "components/clickable";
import LoadingIcon from "components/loading-icon";
import Modal from "components/modal";
import Image from "next/image";
import React from "react";
import { TeamType } from "types/team-type";
export type TeamDetailModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  teamId: TeamType["id"];
};

const TeamDetailModal = ({
  isOpen,
  onRequestClose,
  teamId,
}: TeamDetailModalProps) => {
  const { team, pending } = useGetTeam({ teamId });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Column className="min-h-[528px] bg-white rounded-md shadow-xl items-center justify-center">
        {pending ? (
          <LoadingIcon className="text-slate-700" />
        ) : (
          <Column className="flex-1 max-h-[528px] w-full border">
            <Row className="w-full justify-between p-6">
              <NbaLogo className="w-12 h-12" />
              <Clickable
                onClick={() => onRequestClose()}
                className="transition-all hover:bg-slate-100 w-6 h-6 hover:text-gray-900 rounded-md"
              >
                <XIcon />
              </Clickable>
            </Row>
            <Image
              className="object-contain shadow-xl"
              src={team?.image}
              width={200}
              height={200}
              alt={team?.name}
            />
            <Column className="items-center">
              <span className="text-4xl font-extrabold text-slate-700">
                {team?.name}
              </span>
            </Column>
            <Row className="grid grid-cols-2 gap-2 rounded-lg shadow-md p-6 h-96">
              <Column className="border rounded-md items-center justify-center">
                <span className=" text-slate-600">FULL NAME</span>
                <span className="font-semibold text-slate-600 text-xl ">
                  {team?.full_name}
                </span>
              </Column>
              <Column className="border rounded-md items-center justify-center">
                <span className=" text-slate-600">DIVISION</span>
                <span className="font-semibold text-slate-600 text-xl ">
                  {team?.division}
                </span>
              </Column>
              <Column className="border rounded-md items-center justify-center">
                <span className=" text-slate-600">CITY</span>
                <span className="font-semibold text-slate-600 text-xl ">
                  {team?.city}
                </span>
              </Column>
              <Column className="border rounded-md items-center justify-center">
                <Image
                  className="object-contain shadow-xl"
                  src={team?.conference.imageUrl}
                  width={80}
                  height={80}
                  alt={team?.conference.name}
                />
                <span className="font-semibold text-slate-600 text-xl ">
                  {team?.conference.name}
                </span>
              </Column>
            </Row>
          </Column>
        )}
      </Column>
    </Modal>
  );
};

export default TeamDetailModal;
