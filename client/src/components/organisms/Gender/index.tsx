import React, { useState } from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import Radio from "~/components/organisms/Radio";

const Gender = ({
  setActiveComponent,
  handleInput,
}: {
  setActiveComponent: (value: string) => void;
  handleInput: (value: {}) => void;
}) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [gender, setGender] = useState<string>("");

  const options = [
    { id: 1, choice: "Male" },
    { id: 2, choice: "Female" },
    { id: 3, choice: "Non-binary" },
    { id: 4, choice: "Prefer not to say" },
  ];

  const handleOnchange = (e: any) => {
    setGender(e.choice);
    setButtonDisabled(false);
  };

  const handleNext = () => {
    handleInput({ gender: gender });
    setActiveComponent("Info");
  };

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
        <Radio
          callback={handleOnchange}
          options={options}
          keyValue={"choice"}
        />
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Button isDisabled={buttonDisabled} handleClick={handleNext}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Gender;
