import React from "react";

interface IThumbUpIcon {
  className?: string;
  isActive?: boolean;
  width?: string | number;
  height?: string | number;
}
const ThumbUpIcon = ({
  className,
  width = "20",
  height = "20",
  isActive = false,
}: IThumbUpIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={`${isActive ? "1.0" : "0.6"}`}>
        <path
          d="M2 10.5C2 9.67157 2.67157 9 3.5 9C4.32843 9 5 9.67157 5 10.5V16.5C5 17.3284 4.32843 18 3.5 18C2.67157 18 2 17.3284 2 16.5V10.5Z"
          fill="#F4EEE8"
        />
        <path
          d="M6 10.3333V15.7639C6 16.5215 6.428 17.214 7.10557 17.5528L7.15542 17.5777C7.71084 17.8554 8.32329 18 8.94427 18H14.3604C15.3138 18 16.1346 17.3271 16.3216 16.3922L17.5216 10.3922C17.7691 9.15465 16.8225 8 15.5604 8H12V4C12 2.89543 11.1046 2 10 2C9.44772 2 9 2.44772 9 3V3.66667C9 4.53215 8.71929 5.37428 8.2 6.06667L6.8 7.93333C6.28071 8.62572 6 9.46785 6 10.3333Z"
          fill="#F4EEE8"
        />
      </g>
    </svg>
  );
};

export default ThumbUpIcon;
