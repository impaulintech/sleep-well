import React from "react";

import PreQuestionAccordion from "~/components/organisms/PreQuestionAccordionGroup";

const AccordionGroups = ({ pre_questions }: { pre_questions: any[] }) => {
  return (
    <div className="flex flex-col space-y-2">
      {pre_questions.map((pre_question) => {
        return (
          <div key={pre_question.id}>
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
