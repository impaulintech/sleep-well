import NextHead from "~/components/atoms/NextHead";
import Image from "next/image";
import React from "react";

import redirect from "~/shared/utils/redirect";
import LoadingIcon from "~/shared/icons/Loading";

const Loader = () => {
  setTimeout(() => {
    redirect("/");
  }, 3000);

  return (
    <>
      <NextHead title="SleepWell | Loading" />
      <div className="flex flex-col items-center space-y-5">
        <Image src="/images/Time.png" alt="time" width="330" height="270" />
        <div className="animate-spin ">
          <LoadingIcon />
        </div>
        <p className=" text-3xl font-semibold">
          Generating Personalized Questions
        </p>
      </div>
    </>
  );
};

export default Loader;
