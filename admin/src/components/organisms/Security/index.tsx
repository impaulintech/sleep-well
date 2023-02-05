import { useState } from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";

const Security = () => {
  const initialParams = {
    old_password: "",
    new_password: "",
    password_confirmation: "",
  };

  const [params, setParams] = useState(initialParams);

  const handleSecurityChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // API call here...
    console.log(params);
  };

  return (
    <>
      <div className="flex flex-col p-6">
        <div className="flex flex-col">
          <Input
            type="password"
            name="old_password"
            label="Old Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
          <Input
            type="password"
            name="new_password"
            label="New Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
          <Input
            type="password"
            name="password_confirmation"
            label="Confirm Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
        </div>
        <Button onClick={handleSubmit} className="mt-10">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Security;
