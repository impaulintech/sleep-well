import React from "react";
import Image from "next/image";
import moment from "moment";

interface IHistoryCard {
  fullname: string;
  completed_recommendations_count: number;
  created_at: string;
}

const HistoryProfileCard = ({
  fullname,
  completed_recommendations_count,
  created_at,
}: IHistoryCard) => {
  return (
    <div
      className="flex items-center space-y-2 px-4 py-4 rounded-lg space-x-4
    bg-swell-light text-white "
    >
      <Image
        src="/images/Avatar.png"
        alt="avatar"
        priority
        width={200}
        height={200}
        className=" w-[100px] h-[100px] rounded-full"
      />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <div className="text-xl font-bold">{fullname}</div>
          <p className="text-sm font-normal">
            Joined {moment(created_at, "YYYYMMDD").fromNow()}
          </p>
        </div>
        <div className="text-sm font-normal">
          <p>
            Completed a total of {completed_recommendations_count}{" "}
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryProfileCard;
