import React from "react";

import EditIcon from "~/shared/icons/EditIcon";
import PeopleIcon from "~/shared/icons/PeopleIcon";
import Accordion from "~/components/atoms/Accordion";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import MainQuestionAccordionGroup from "../MainQuestionAccordionGroup";

interface IPreChoiceAccordionGroup {
  item: any;
  title: string;
  type: string;
}

const PreChoiceAccordionGroup = ({
  item,
  title,
  type,
}: IPreChoiceAccordionGroup) => {
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
          <div>{item.pre_choice}</div>
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
        {item.main_questions.map((main_question: any) => {
          return (
            <div key={main_question.id}>
              <MainQuestionAccordionGroup
                item={main_question}
                title="Main Question"
                type="mainQuestion"
              />
            </div>
          );
        })}
      </div>
    </Accordion>
  );
};

export default PreChoiceAccordionGroup;
