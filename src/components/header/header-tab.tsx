import Clickable from "components/clickable";
import useQueryParams from "hooks/use-query-params";
import React from "react";

export type HeaderTabProps = {
  label: string;
  onClick: () => void;
};

const HeaderTab = ({ label, onClick }: HeaderTabProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const { params } = useQueryParams();

  React.useEffect(() => {
    params.tab?.includes(label.toLocaleLowerCase())
      ? setIsActive(true)
      : setIsActive(false);
  });

  return (
    <Clickable
      onClick={onClick}
      className={`transition-all duration-100 ${baseClasses} ${
        isActive && isActiveClasses
      }`}
    >
      <span className="text-sm font-thin">{label}</span>
    </Clickable>
  );
};

export default HeaderTab;

const baseClasses = "flex hover:bg-gray-700 items-center px-12 py-2 text-white";
const isActiveClasses = "bg-gray-900 border-b-4 border-blue-500";
