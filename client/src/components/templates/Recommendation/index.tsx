import React from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import Loader from "../Loader";

interface IRecommendation {
  totalPage: number;
  children?: React.ReactNode;
  page?: any;
  callback: (e: Event) => void;
  finalButtonMessage?: string;
  imageHeight?: number;
  imageWidth?: number;
  loaderUrl?: string;
  loaderMessage?: string;
}

const Recommendation = ({
  totalPage,
  children,
  page,
  callback,
  finalButtonMessage,
  imageHeight = 216,
  imageWidth = 260,
  loaderUrl,
  loaderMessage,
}: IRecommendation) => {
  const [currentPage, setCurrentPage] = page;

  const handleClick = (event: any) => {
    callback(event);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {currentPage == totalPage ? (
        <Loader url={loaderUrl} message={loaderMessage} />
      ) : (
        <div className="flex flex-col h-screen justify-between">
          <div>
            <div className="flex justify-between">
              <NextHead title="SleepWell | Recommendation"></NextHead>
              <div className="text-xl font-medium mt-5">
                {currentPage + 1}/{totalPage}
              </div>
            </div>
            <section className="flex flex-col items-center mb-7">
              <Image
                priority
                src="/images/recommendation.png"
                alt="recommendation"
                width={imageWidth}
                height={imageHeight}
                className={`w-[${imageWidth}] h-[${imageHeight}]`}
              ></Image>
            </section>
            <div className="space-y-3">{children}</div>
          </div>
          <div className="flex flex-col space-y-5 pt-5 pb-16">
            <Button handleClick={handleClick}>
              {currentPage == totalPage - 1 && finalButtonMessage
                ? finalButtonMessage
                : "Continue"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Recommendation;