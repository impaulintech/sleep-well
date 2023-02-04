import React from "react";

interface ICancelIcon {
  className?: string;
}
const UserIcon = ({ className }: ICancelIcon) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M19.5001 17.55C22.731 17.55 25.3501 14.9308 25.3501 11.7C25.3501 8.46911 22.731 5.84998 19.5001 5.84998C16.2692 5.84998 13.6501 8.46911 13.6501 11.7C13.6501 14.9308 16.2692 17.55 19.5001 17.55Z"
          fill="#F4EEE8"
        />
        <path
          d="M5.8501 35.1C5.8501 27.5613 11.9614 21.45 19.5001 21.45C27.0388 21.45 33.1501 27.5613 33.1501 35.1H5.8501Z"
          fill="#F4EEE8"
        />
      </g>
    </svg>
  );
};

export default UserIcon;
