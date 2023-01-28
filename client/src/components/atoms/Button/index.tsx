import React from "react";

interface IButton {
  name: string;
  handleClick: () => void;
}

const Button = ({ name, handleClick }: IButton) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="flex w-full p-2 rounded bg-swell-30 text-white justify-center border border-dark"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
