import React from "react";

interface IButton {
  children: any;
  handleClick: () => void;
  className?: string;
}

const Button = (props: IButton) => {
  const { handleClick, className, children } = props;

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex w-full p-2 rounded bg-swell-30 text-white justify-center border border-dark ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
