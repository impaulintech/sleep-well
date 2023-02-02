import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import LogoIcon from "~/shared/icons/LogoIcon";
import { toast } from "react-hot-toast";
import AuthApi from "~/api/admin/AuthApi";
import { setCookie } from "cookies-next";
import redirect from "~/shared/utils/redirect";

const AdminLogin: NextPage = (): JSX.Element => {
  const initialParams = {
    email: "super@admin.com",
    password: "",
  };

  const [params, setParams] = useState(initialParams);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.promise(
      AuthApi.login(params).then((res) => {
        const token = res.data.token;
        const user = res.data.user;

        setCookie("token", token);
        user.fullname && redirect("/");
      }),
      {
        loading: "Loading",
        success: (data) => "Successfully logged in",
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

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
              onChange={handleChange}
              name="email"
              label="Email address"
              placeholder="super@admin.com"
              defaultValue="super@admin.com"
            ></Input>
            <Input
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••••"
            ></Input>
          </div>
          <div className="pb-16">
            <Button onClick={handleSubmit}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
