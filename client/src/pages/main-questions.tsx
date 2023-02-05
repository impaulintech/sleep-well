import { NextPage } from "next";
import React, { useState } from "react";

import Radio from "~/components/organisms/Radio";
import Questionnaire from "~/components/templates/Questionnaire";
import { main_questions } from "~/shared/json/main_questions.json";

const MainQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = main_questions.length;

  const [result, setResult] = useState<any[]>([]);

  const [value, setValue] = useState({});
console.log(result)
  const handleOnchange = (event: any) => {
    const newValue = {
      main_question: main_questions[currentPage].id,
      main_choice: event.id,
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

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default MainQuestions;
