/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

import Layout from "~/layout/Layout";
import UserApi from "~/api/admin/UserApi"; 
import { GlobalContext } from "~/context/GlobalContext";  
import DynamicAccordionGroups from "~/components/templates/DynamicAccordionGroups";

const ManageUser = () => {
  const { assessment } = useContext(GlobalContext) as any;
  const [usersData, setUsersData] = assessment; 
  const [showModal, setShowModal] = useState(false);

  const onClick = () => { 
    setShowModal(true);
  };

  useEffect(() => {
    UserApi.getUsersAssessment().then((res) => {
      setUsersData(res?.data?.data);  
    });
  }, []);
  
  return (
    <> 
      <Layout>
        <div className="flex flex-col space-y-8 h-full pt-[100px] max-w-[1056px] flex-1">
          <Head>
            <title>Admin | Dashboard</title>
          </Head>  

          {/* Users Nested Accordions */} 
          <DynamicAccordionGroups usersData={usersData}/>
          {usersData?.length === 0 && (
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
export default ManageUser;
