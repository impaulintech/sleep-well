import { NextPage } from "next";
import React, { useState } from "react";

import Radio from "~/components/organisms/Radio";
import { pre_questions } from "~/shared/json/pre_questions.json";
import Questionnaire from "~/components/templates/Questionnaire";

const PreQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = pre_questions.length;

  const [result, setResult] = useState<any[]>([]);

  const [value, setValue] = useState({});

  const handleOnchange = (event: any) => {
    const newValue = {
      pre_question: pre_questions[currentPage].id,
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
        questions={pre_questions}
        page={[currentPage, setCurrentPage]}
        buttonState={[buttonDisabled, setButtonDisabled]}
        callback={handleNext}
        image="/images/pre-question.png"
        loaderUrl={"/main-questions"}
        loaderMessage="Generating Personalized Questions"
      >
        <p className="text-xl font-semibold">
          {currentPage + 1}.&#41; {pre_questions[currentPage]?.pre_question}
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

export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default PreQuestions;
