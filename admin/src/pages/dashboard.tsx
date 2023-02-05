import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Button from "~/components/atoms/Button";
import Layout from "~/layout/Layout";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import AccordionGroups from "~/components/templates/AccordionGroups";

const Dashboard = () => {
  const pre_questions = [
    {
      id: 1,
      pre_question: "Lorem ipsum this is question1",
      pre_choices: [
        {
          id: 1,
          pre_choice: "yes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          pre_choice: "no",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          pre_choice: "sometimes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      pre_question: "Lorem ipsum this is question2",
      pre_choices: [
        {
          id: 1,
          pre_choice: "yes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          pre_choice: "no",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          pre_choice: "sometimes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice1",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice2",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      pre_question: "Lorem ipsum this is question3",
      pre_choices: [
        {
          id: 1,
          pre_choice: "yes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          pre_choice: "no",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          pre_choice: "sometimes",
          main_questions: [
            {
              id: 1,
              main_question: "MainQuestion1",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 2,
              main_question: "MainQuestion2",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
            {
              id: 3,
              main_question: "MainQuestion3",
              main_choices: [
                {
                  id: 1,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
                {
                  id: 2,
                  main_choice: "MainChoice",
                  recommendations: [
                    { id: 1, recommendation: "This is my recommendation1" },
                    { id: 2, recommendation: "This is my recommendation2" },
                    { id: 3, recommendation: "This is my recommendation3" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <PreQuestionModal showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <div className="flex flex-col space-y-8 h-full pt-32 max-w-[1056px] flex-1">
          <Head>
            <title>Admin | Dashboard</title>
          </Head>
          <div className="h-fit w-full flex flex-col space-y-2 sm:grid sm:gap-4 sm:grid-cols-2 sm:space-y-0">
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Questions</div>
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Questions</div>
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Questions</div>
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Questions</div>
              <div className="text-2xl font-bold">2</div>
            </div>
          </div>
          <div className="flex ml-auto">
            <Button
              onClick={onClick}
              className="bg-swell-10 border-none text-lg px-6 py-2"
            >
              Add New Pre Question
            </Button>
          </div>

          {/* PreQuestions Nested Accordions */}
          <AccordionGroups pre_questions={pre_questions} />
        </div>
      </Layout>
    </>
  );
};

export { AdminSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Dashboard;
