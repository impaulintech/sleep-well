import React, { useState } from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import redirect from "~/shared/utils/redirect";

interface IInfo {
  name?: string;
  age?: number;
}

const Info = ({ handleInput }: { handleInput: (value: {}) => void }) => {
  const initialInfo = {
    name: "",
    age: 0,
  };

  const [info, setInfo] = useState<IInfo>(initialInfo);

  const handleNext = () => {
    const { age, name } = info;

    handleInput({ age: age, name: name });
    redirect("/pre-questions");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead title="SleepWell | Welcome"></NextHead>
        <section className="flex flex-col items-center mb-7">
          <Image
            priority
            src="/images/Welcome.png"
            alt="welcome"
            width="400"
            height="400"
            className="w-[205px] h-[160px]"
          ></Image>
        </section>
        <div className="flex flex-col w-full space-y-4">
          <div className="text-center space-y-2">
            <label htmlFor="fullname" className="text-3xl font-semibold">
              What is your full name?
            </label>
            <input
              onChange={(e) => {
                setInfo({ ...info, name: e.target.value });
              }}
              type="text"
              className="flex w-full text-center font-medium rounded border-swell-30 border-2 text-lg bg-white px-4 py-3"
              placeholder="John Doe"
              id="fullname"
            />
          </div>
          <div className="text-center space-y-2">
            <label htmlFor="age" className="text-3xl font-semibold">
              What is your age?
            </label>
            <input
              onChange={(e) => {
                setInfo({ ...info, age: Number(e.target.value) });
              }}
              type="number"
              className="flex w-full  text-center font-medium rounded border-swell-30 border-2 text-lg bg-white px-4 py-3"
              placeholder="_ _"
              id="age"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Button
          isDisabled={
            info.name == initialInfo.name || info.age == initialInfo.age
          }
          handleClick={handleNext}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Info;
