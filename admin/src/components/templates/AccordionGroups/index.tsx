import React, { useState } from "react";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";

import PreQuestionAccordion from "~/components/organisms/PreQuestionAccordionGroup";

const AccordionGroups = ({ pre_questions, showModal, setShowModal }: any) => {
  return (
    <div className="flex flex-col space-y-2">
      {pre_questions.map((pre_question: any, id: number) => {
        return (
          <div key={id}>
            <PreQuestionAccordion
              item={pre_question}
              title="Pre Question"
              type="preQuestion"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGroups;
