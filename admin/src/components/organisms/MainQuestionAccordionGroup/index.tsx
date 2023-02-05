import React from "react";
import Accordion from "~/components/atoms/Accordion";
import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import PeopleIcon from "~/shared/icons/PeopleIcon";
import MainChoiceAccordionGroup from "../MainChoiceAccordionGroup";

interface IMainQuestionAccordionGroup {
  item: any;
  title: string;
  type: string;
}

const MainQuestionAccordionGroup = ({
  item,
  title,
  type,
}: IMainQuestionAccordionGroup) => {
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
          <div>{item.main_question}</div>
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
        {item.main_choices.map((main_choice: any) => {
          return (
            <div key={main_choice.id}>
              <MainChoiceAccordionGroup
                item={main_choice}
                title="Main Choice"
                type="mainChoice"
              />
            </div>
          );
        })}
      </div>
    </Accordion>
  );
};

export default MainQuestionAccordionGroup;
