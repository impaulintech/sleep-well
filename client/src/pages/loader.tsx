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
      <div className="absolute top-0">
        <NextHead key="404" title="SleepWell | Loading"></NextHead>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-5">
          <Image src="/images/Time.png" alt="time" width="330" height="270" />
          <div className="animate-spin ">
            <LoadingIcon />
          </div>
          <p className="text-center text-3xl font-semibold">
            Generating Personalized Questions
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
