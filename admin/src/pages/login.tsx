import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import LogoIcon from "~/shared/icons/LogoIcon";

const AdminLogin: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Admin | Login</title>
      </Head>
      <div className="flex flex-col h-screen w-full justify-center sm:w-80 sm:h-full sm:mt-32">
        <div className="space-y-14">
          <div className="flex flex-col items-center space-y-8">
            <LogoIcon className="w-24 h-24" />
            <h1 className="font-semibold text-4xl">Admin Login</h1>
          </div>
          <div>
            <Input
              name="email"
              label="Email address"
              placeholder="super@admin.com"
              defaultValue="super@admin.com"
            ></Input>
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••••"
            ></Input>
          </div>
          <div className="pb-16">
            <Button handleClick={() => {}}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
