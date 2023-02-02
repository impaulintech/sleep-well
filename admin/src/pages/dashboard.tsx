import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Dashboard: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Admin | Dashboard</title>
      </Head>

      <main className="text-center flex justify-center items-center font-bold text-5xl text-white min-h-screen h-full">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-btn-2">Dashboard</h1>
        </div>
      </main>
    </div>
  );
};

export { AdminSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Dashboard;
