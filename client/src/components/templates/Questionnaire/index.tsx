import React from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import redirect from "~/shared/utils/redirect";

const Questionnaire = ({ totalPage, children, buttonState, page }: any) => {
  const [buttonDisabled, setButtonDisabled] = buttonState;
  const [currentPage, setCurrentPage] = page;

  const handleClick = () => {
    if (currentPage == totalPage - 1) {
      return redirect("/loader");
    } else {
      setButtonDisabled(true);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div className="flex justify-between">
          <NextHead title="SleepWell | Welcome"></NextHead>
          <div className="text-xl font-medium mt-5">
            {currentPage + 1}/{totalPage}
          </div>
        </div>

        <section className="flex flex-col items-center mb-7">
          <Image
            src="/images/Time.png"
            alt="welcome"
            width="205"
            height="160"
          ></Image>
        </section>
        <div className="space-y-3">{children}</div>
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Button isDisabled={buttonDisabled} handleClick={handleClick}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Questionnaire;
