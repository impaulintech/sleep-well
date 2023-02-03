import React from "react";
import Image from "next/image";

import Button from "~/components/atoms/Button";

interface IAssessmentCard {
  message: string;
  recommendations: any;
}

const AssessmentCard = ({ recommendations, message }: IAssessmentCard) => {
  const handleClick = () => {
    console.log("Take assessment");
  };

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
      <div className="flex flex-col space-y-2">
        <div className="text-sm font-normal">{message}</div>
        <Button
          onClick={handleClick}
          isDisabled={recommendations?.length > 0}
          className="border-none bg-swell-10 shadow-lg"
        >
          Take assessment
        </Button>
      </div>
    </div>
  );
};

export default AssessmentCard;
