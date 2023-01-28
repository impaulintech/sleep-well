import Head from "next/head";
import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";

import Button from "~/components/atoms/Button";
import Image from "next/image";

const NotFound: NextPage = (): JSX.Element => {
  const [count, setCount] = useState(6);

  setInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  useEffect(() => {
    if (count === 0) {
      Router.back();
    }
  }, [count]);

  const handleClick = () => {
    Router.back();
  };

  return (
    <>
      <Head>
        <title>SleepWell | Page not found</title>
        <meta name="description" content="404 Page Not Found" />
      </Head>
      <div className="flex flex-col h-screen justify-center space-y-10">
        <div className="flex flex-col justify-center">
          <Image src="/images/Error.png" alt="error" width="400" height="400" />
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
          <Button handleClick={handleClick} name="Go back"></Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
