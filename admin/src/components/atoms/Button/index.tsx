import React from "react";

interface IButton {
  children: any;
  onClick: any;
  className?: string;
}

const Button = (props: IButton) => {
  const { onClick, className, children } = props;

  return (
    <>
      <button
        onClick={onClick}
        className={`flex w-full p-2 rounded bg-swell-30 text-white justify-center border border-dark ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
