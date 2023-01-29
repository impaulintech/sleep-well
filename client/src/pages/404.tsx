import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import Image from "next/image";
import redirect from "~/shared/utils/redirect";
import Button from "~/components/atoms/Button";
import NextHead from "~/components/atoms/NextHead";

const NotFound: NextPage = (): JSX.Element => {
  const [count, setCount] = useState(6);

  setInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  useEffect(() => {
    if (count === 0) {
      redirect("/");
    }
  }, [count]);

  const handleClick = () => {
    redirect("/");
  };

  return (
    <>
      <div className="absolute top-0">
        <NextHead key="404" title="SleepWell | Page not found"></NextHead>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col h-screen justify-center space-y-10">
          <div className="flex flex-col justify-center">
            <Image
              src="/images/Error.png"
              alt="error"
              width="400"
              height="400"
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-center text-3xl font-semibold ">
                Page not found!
              </h1>
              <p className="font-medium text-xs">
                This page will be redirected to the home page in{" "}
                <span className="text-failed">{count}s</span>.
              </p>
            </div>
          </div>
          <div>
            <Button handleClick={handleClick}>Go back</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
