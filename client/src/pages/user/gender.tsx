import React, { useState } from "react";
import Image from "next/image";
import { NextPage } from "next";

import redirect from "~/shared/utils/redirect";
import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import Radio from "~/components/atoms/Radio";

const Gender: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const options = [
    { name: "Male" },
    { name: "Female" },
    { name: "Non-binary" },
    { name: "Prefer not to say" },
  ];

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <NextHead title="SleepWell | Welcome"></NextHead>
        <section className="flex flex-col items-center mb-7">
          <Image
            src="/images/Gender.png"
            alt="welcome"
            width="205"
            height="160"
          ></Image>
          <p className=" text-3xl font-semibold">What is your gender?</p>
        </section>
        <Radio options={options} />
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Button
          isDisabled={buttonDisabled}
          handleClick={() => {
            redirect("/user/info");
          }}
          className={`${buttonDisabled && "opacity-60"}`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Gender;
