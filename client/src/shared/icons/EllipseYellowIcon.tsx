import React from "react";

interface IEllipseYellowIcon {
  className?: string;
}
const EllipseYellowIcon = ({ className }: IEllipseYellowIcon) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="#CCB330" />
    </svg>
  );
};

export default EllipseYellowIcon;
