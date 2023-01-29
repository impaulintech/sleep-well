import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import NextHead from "~/components/atoms/NextHead";
import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";

const SignUp: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead key="signup" title="SleepWell | Sign Up" />
        <div className="relative flex justify-center">
          <Image
            src="/images/Signup.png"
            alt="signup"
            width="266"
            height="230"
          />
          <p className="absolute bottom-0 text-3xl font-semibold">
            Create an account
          </p>
        </div>
        <div className="py-6">
          <Input
            name="email"
            label="Email address"
            placeholder="johndoe@gmail.com"
          ></Input>
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••••"
          ></Input>
          <Input
            name="confirm"
            label="Confirm password"
            type="password"
            placeholder="••••••••••"
          ></Input>
          <div className="flex w-full mt-4 justify-center font-medium text-base">
            <p>Already have an account?&nbsp;</p>
            <Link href="/login" className="text-swell-30">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-16">
        <Button handleClick={() => {}}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
