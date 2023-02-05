import React from "react";
import Accordion from "~/components/atoms/Accordion";
import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import PeopleIcon from "~/shared/icons/PeopleIcon";
import RecommendationsGroup from "../RecommendationAccordionGroup";
import RecommendationAccordionGroup from "../RecommendationAccordionGroup";

interface IMainChoiceAccordionGroup {
  item: any;
  title: string;
  type: string;
}

const MainChoiceAccordionGroup = ({
  item,
  title,
  type,
}: IMainChoiceAccordionGroup) => {
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
    <Accordion
      hasAdd={true}
      hasDelete={true}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      type={type}
      title={`${item.id}.) ${title}`}
    >
      <div className="flex w-full justify-between items-center p-4 space-x-4">
        <div className="flex items-center space-x-4">
          <EllipseIcon type={type} />
          <div>{item.main_choice}</div>
        </div>
        <div className="flex space-x-6">
          <div className="flex space-x-2">
            <p>60</p>
            <PeopleIcon />
          </div>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <RecommendationsGroup
          list={item.recommendations}
          title="Recommendations"
          type="recommendation"
        />
      </div>
    </Accordion>
  );
};

export default MainChoiceAccordionGroup;
