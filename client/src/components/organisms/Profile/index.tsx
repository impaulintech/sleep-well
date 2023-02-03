import Image from "next/image";
import { useState } from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import Dropdown from "~/components/atoms/Dropdown";
import RefreshIcon from "~/shared/icons/RefreshIcons";

const Profile = () => {
  const initialParams = {
    fullname: "",
    email: "",
    gender: "",
    age: 0,
  };

  const genders = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Non-binary" },
    { id: 4, label: "Prefer not to say" },
  ];

  const [params, setParams] = useState(initialParams);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // API call..
    console.log(params);
  };

  return (
    <div className="flex justify-between flex-col p-6">
      <div className="flex justify-center relative">
        <Image
          src="/images/Avatar.png"
          alt="avatar"
          priority
          width={200}
          height={200}
          className=" w-[100px] h-[100px] rounded-full"
        />
        <button
          onClick={() => {
            // API call here...
            console.log("Refreshed!");
          }}
        >
          <RefreshIcon className="absolute bottom-0 -translate-x-full" />
        </button>
      </div>
      <div>
        <Input
          label="Fullname"
          name="fullname"
          placeholder="John Doe"
          onChange={handleChange}
        />
        <Input
          label="Email address"
          name="email"
          placeholder="john.doe@email.com"
          onChange={handleChange}
        />
        <div className="flex space-x-2">
          <div className="flex w-[189px] flex-col space-y-1 pb-2">
            <label className="text-lg font-medium" htmlFor="gender">
              Gender
            </label>
            <Dropdown
              name="gender"
              defaultValue="Male"
              value={params.gender}
              list={genders}
              onSelect={handleChange}
            />
          </div>
          <Input
            type="number"
            label="Age"
            name="age"
            placeholder="18"
            className="flex w-[80px]"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button onClick={handleSubmit} className="mt-10">
        Submit
      </Button>
    </div>
  );
};

export default Profile;
