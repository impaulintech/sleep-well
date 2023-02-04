import React, { useState } from "react";

import NextHead from "~/components/atoms/NextHead";
import Accordion from "~/components/atoms/Accordion";
import SettingsIcon from "~/shared/icons/SettingsIcon";
import FooterNavbar from "~/components/atoms/FooterNavbar";
import AssessmentCard from "~/components/molecules/AssessmentCard";
import UserSettingModal from "~/components/molecules/UserSettingsModal";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const message =
    "You completed all the recommendations for better sleep habits. ";

  const recommendations = [
    {
      id: 1,
      question: "1Lorem ipsum dolor sit amet.",
      answer: "yes",
      recommendation: "Lorem ipsum, dolor sit amet.",
      like: 3,
      dislike: 1,
    },
    {
      id: 2,
      question: "2Lorem ipsum dolor sit amet.",
      recommendation: "Lorem ipsum, dolor sit amet.",
      like: 2,
      dislike: 1,
    },
    {
      id: 3,
      question: "3Lorem ipsum dolor sit amet.",
      answer: "yes",
      recommendation: "Lorem ipsum, dolor sit amet.",
      like: 1,
      dislike: 1,
    },
  ];

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <UserSettingModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex flex-col min-h-screen space-y-5 pb-32">
        <div className="flex justify-between items-center">
          <NextHead title="SleepWell | Recommendation">
            <button onClick={handleClick}>
              <SettingsIcon />
            </button>
          </NextHead>
        </div>

        {/* Top section */}
        <AssessmentCard recommendations={recommendations} message={message} />

        {/* Recommendation content */}
        <h1 className="text-xl font-medium border-b-2">
          Latest recommendations
        </h1>

        <section className="flex flex-col space-y-2">
          {recommendations?.length > 0 ? (
            recommendations.map((recommendation) => {
              return (
                <div key={recommendation.id}>
                  <Accordion title="In Progress">
                    <div className="flex flex-col space-y-4 pb-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Question:
                        </h3>
                        <p>{recommendation.question}</p>
                      </div>
                      <div className="flex space-x-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Your Answer:
                        </h3>
                        <p>{recommendation.answer}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Recommendation:
                        </h3>
                        <p>{recommendation.recommendation}</p>
                      </div>
                    </div>
                  </Accordion>
                </div>
              );
            })
          ) : (
            <p className="text-failed text-center opacity-60">
              No available data
            </p>
          )}
        </section>
        {/* footer */}
        <FooterNavbar />
      </div>
    </>
  );
}

export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
