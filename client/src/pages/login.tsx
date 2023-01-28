import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import NextHead from "~/components/atoms/NextHead";
import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import Link from "next/link";

const SignUp: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead key="login" title="SleepWell | Login" />
        <div className="relative flex justify-center">
          <Image src="/images/Login.png" alt="login" width="235" height="225" />
          <p className="absolute bottom-0 text-3xl font-semibold">
            Welcome Back!
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
          <div className="flex w-full mt-4 justify-center font-medium text-xs">
            <p>Don&#39;t have an account yet?&nbsp;</p>
            <Link href="/sign-up" className="text-swell-30">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-16">
        <Button handleClick={() => {}} name="Login"></Button>
      </div>
    </div>
  );
};

export default SignUp;
