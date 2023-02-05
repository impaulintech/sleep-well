import { NextPage } from "next";
import React, { useState } from "react";

import Radio from "~/components/organisms/Radio";
import Questionnaire from "~/components/templates/Questionnaire";
import { useEffect } from "react";
import Assessment from "~/api/user/Assessment";

const PreQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [pre_questions, set_pre_questions] = useState<any>([
    {
      pre_question: "Loading...",
      pre_choices: [
        {
          id: 1,
          pre_choice: "...",
        },
      ],
    },
  ]);
  const totalPage = pre_questions.length;

  const [result, setResult] = useState<any[]>([]);
  const [value, setValue] = useState({});
  
  useEffect(() => {
    Assessment.preQuestions().then((res) => {
      set_pre_questions(res?.data?.pre_questions);
    });
  }, []);
  
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

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default PreQuestions;
