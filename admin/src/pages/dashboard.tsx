/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

import Button from "~/components/atoms/Button";
import Layout from "~/layout/Layout";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import AccordionGroups from "~/components/templates/AccordionGroups";
import UserApi from "~/api/admin/UserApi";
import { GlobalContext } from "~/context/GlobalContext";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

const Dashboard = () => {
  const { assessment, dataCount } = useContext(GlobalContext) as any;
  const [pre_questions, set_pre_questions] = assessment;
  const [data, setData] = dataCount;
  const [showModal, setShowModal] = useState(false);

  const onClick = () => { 
    setShowModal(true);
  };

  useEffect(() => {
    UserApi.getAssessment().then((res) => {
      set_pre_questions(res?.data?.assessment);
      setData(res?.data?.data);
    });
  }, []);

  return (
    <>
      <PreQuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add new Pre Question"
        data={{ type: "pre_question" }}
        method="CREATE"
      />
      <Layout>
        <div className="flex flex-col space-y-8 h-full pt-32 max-w-[1056px] flex-1">
          <Head>
            <title>Admin | Dashboard</title>
          </Head>
          <div className="h-fit w-full flex flex-col space-y-2 sm:grid sm:gap-4 sm:grid-cols-2 sm:space-y-0">
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Questions</div>
              <div className="text-2xl font-bold">
                {data?.total_pre_questions}
              </div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Pre Choices</div>
              <div className="text-2xl font-bold">
                {data?.total_pre_choices}
              </div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Main Questions</div>
              <div className="text-2xl font-bold">
                {data?.total_main_questions}
              </div>
            </div>
            <div className="flex justify-between rounded-lg shadow-sm p-6 bg-swell-card">
              <div className="text-xl font-medium">Total Recommendations</div>
              <div className="text-2xl font-bold">
                {data?.total_recommendations}
              </div>
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
          <AccordionGroups
            pre_questions={pre_questions}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          {pre_questions?.length === 0 && (
            <div className="w-full text-center">
              <h1 className="text-lg text-failed">No available data.</h1>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export { AdminSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Dashboard;
