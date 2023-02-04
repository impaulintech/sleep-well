import React from "react";

interface IEllipseIcon {
  statusColor?: string;
  width?: string | number;
  height?: string | number;
}
const EllipseIcon = ({
  statusColor = "#CCB330",
  width = "17",
  height = "17",
}: IEllipseIcon) => {
  const statusColors: any = {
    inProgress: "#CCB330",
    liked: "#2DDA1E",
    disliked: "#CC3030",
  };
  const currentState = statusColors[statusColor];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill={currentState} />
    </svg>
  );
};

export default EllipseIcon;
