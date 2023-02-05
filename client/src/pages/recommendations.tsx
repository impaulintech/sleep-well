import { NextPage } from "next";
import React, { useState } from "react";

import Card from "~/components/atoms/Card";
import Recommendation from "~/components/templates/Recommendation";

const Recommendations: NextPage = (): JSX.Element => {
  const recommendations = [
    {
      id: 1,
      question: "question 1",
      recommendation: "test 1test test test test test",
    },
    {
      id: 2,
      question: "question 2",
      recommendation: "test 2test test test test test",
    },
    {
      id: 3,
      question: "question 3",
      recommendation: "test 3test test test test test",
    },
    {
      id: 4,
      question: "question 4",
      recommendation: "test 4test test test test test",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = recommendations.length;

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Recommendation
        totalPage={totalPage}
        page={[currentPage, setCurrentPage]}
        callback={handleNext}
        imageHeight={300}
        imageWidth={250}
        loaderUrl={"/"}
        loaderMessage={"Finalizing and saving data..."}
        finalButtonMessage="Go to checklist"
      >
        <div className="text-xl font-medium space-y-5">
          <section className="space-y-1">
            <h2>Question:</h2>
            <p className="text-base font-normal">
              {recommendations[currentPage]?.question}
            </p>
          </section>
          <section>
            <h2>
              Your Answer:
              <span className="text-base font-normal ml-2">YES</span>
            </h2>
          </section>
        </div>
        <Card
          title="Recommendation"
          message={recommendations[currentPage]?.recommendation}
        />
      </Recommendation>
    </>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Recommendations;
