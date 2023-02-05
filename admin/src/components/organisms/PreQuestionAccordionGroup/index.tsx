import React from "react";

import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import Accordion from "~/components/atoms/Accordion";
import PreChoiceAccordionGroup from "../PreChoiceAccordionGroup";

interface PreQuestionAccordionGroup {
  item: any;
  title: string;
  type: string;
}

const PreQuestionAccordion = ({
  item,
  title,
  type,
}: PreQuestionAccordionGroup) => {
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
        hasDelete={true}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        type={type}
        title={`${item.id}.) ${title}`}
      >
        <div className="flex w-full justify-between items-center p-4 space-x-4">
          <div className="flex items-center space-x-4">
            <EllipseIcon type={type} />
            <div>{item.pre_question}</div>
          </div>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
        <div className="space-y-1">
          {item.pre_choices.map((pre_choice: any) => {
            return (
              <div key={pre_choice.id}>
                <PreChoiceAccordionGroup
                  item={pre_choice}
                  title="Pre Choice"
                  type="preChoice"
                />
              </div>
            );
          })}
        </div>
      </Accordion>
    </>
  );
};

export default PreQuestionAccordion;
