import { NextPage } from "next";
import React, { useState } from "react";

import { pre_questions } from "~/shared/json/pre_questions.json";
import Questionnaire from "~/components/templates/Questionnaire";
import Radio from "~/components/organisms/Radio";

const PreQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = pre_questions.length;

  const [result, setResult] = useState<any[]>([]);

  const handleOnchange = (event: any) => {
    const newValue = [
      {
        pre_question: pre_questions[currentPage].id,
        pre_choice: event.id,
      },
    ];

    setResult([...result, ...newValue]);

    setButtonDisabled(false);
  };

  return (
    <>
      <Questionnaire
        totalPage={totalPage}
        questions={pre_questions}
        page={[currentPage, setCurrentPage]}
        buttonState={[buttonDisabled, setButtonDisabled]}
      >
        <p className="text-xl font-semibold">
          {pre_questions[currentPage]?.pre_question}
        </p>
        <Radio
          callback={handleOnchange}
          options={pre_questions[currentPage]?.pre_choices}
          keyValue="pre_choice"
        />
      </Questionnaire>
    </>
  );
};

export default PreQuestions;
