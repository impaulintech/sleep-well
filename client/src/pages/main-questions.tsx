import { NextPage } from "next";
import React, { useState } from "react";

import { main_questions } from "~/shared/json/main_questions.json";
import Questionnaire from "~/components/templates/Questionnaire";
import Radio from "~/components/organisms/Radio";

const PreQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = main_questions.length;

  const [result, setResult] = useState<any[]>([]);

  const [value, setValue] = useState({});

  const handleOnchange = (event: any) => {
    const newValue = {
      pre_question: main_questions[currentPage].id,
      pre_choice: event.id,
    };

    setValue({
      ...value,
      ...newValue,
    });

    setButtonDisabled(false);
  };

  const handleNext = () => {
    setResult([...result, value]);
  };

  return (
    <>
      <Questionnaire
        totalPage={totalPage}
        questions={main_questions}
        page={[currentPage, setCurrentPage]}
        buttonState={[buttonDisabled, setButtonDisabled]}
        callback={handleNext}
        image={"/images/main-question.png"}
        imageHeight="216"
        imageWidth="260"
        loaderUrl={"/"}
        loaderMessage={"Generating Recommendations"}
        hasGetResult={true}
        finalButtonMessage="Get Result"
      >
        <p className="text-xl font-semibold">
          {currentPage + 1}.&#41; {main_questions[currentPage]?.main_question}
        </p>
        <Radio
          callback={handleOnchange}
          options={main_questions[currentPage]?.main_choices}
          keyValue="main_choice"
        />
      </Questionnaire>
    </>
  );
};

export default PreQuestions;
