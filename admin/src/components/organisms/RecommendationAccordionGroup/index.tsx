import React from "react";

import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import Accordion from "~/components/atoms/Accordion";
import TrashIcon from "~/shared/icons/TrashIcon";
import ThumbUpIcon from "~/shared/icons/ThumbUpIcon";
import ThumbDownIcon from "~/shared/icons/ThumbDownIcon";

interface IRecommendationsGroup {
  list: any;
  title: string;
  type: string;
}

const RecommendationsGroup = ({ list, title, type }: IRecommendationsGroup) => {
  const handleAdd = () => {
    console.log("Added!");
  };
  const handleEdit = () => {
    console.log("Edit!");
  };
  const handleDelete = () => {
    console.log("Deleted!");
  };

  return (
    <>
      <Accordion
        hasAdd={true}
        handleAdd={handleAdd}
        type={type}
        title={`${title}`}
      >
        {list.map((item: any) => {
          return (
            <div key={item.id}>
              <div className="flex w-full justify-between items-center p-4 space-x-4">
                <div className="flex items-center space-x-4">
                  <EllipseIcon type={type} />
                  <div>{item.recommendation}</div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex space-x-1">
                    <p>30</p>
                    <ThumbDownIcon />
                  </div>
                  <div className="flex space-x-1">
                    <p>60</p>
                    <ThumbUpIcon />
                  </div>
                  <button onClick={handleDelete}>
                    <TrashIcon />
                  </button>
                  <button onClick={handleEdit}>
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Accordion>
    </>
  );
};

export default RecommendationsGroup;
