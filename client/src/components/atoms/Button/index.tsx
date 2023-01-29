import React from "react";

interface IButton {
  children: any;
  handleClick: () => void;
  className?: string;
  isDisabled?: boolean;
}

const Button = (props: IButton) => {
  const { handleClick, className, children, isDisabled } = props;

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex w-full p-2 rounded bg-swell-30 text-white justify-center border border-dark ${className}`}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
