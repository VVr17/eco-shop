import { nanoid } from "nanoid";
import { FC } from "react";

interface IReviewStarIconProps {
  color?: string;
  offset?: number;
  size?: number;
}

const ReviewStarIcon: FC<IReviewStarIconProps> = ({
  color = "#000000",
  offset = 100,
  size = 21,
}) => {
  const gradientId = nanoid(4);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M11.5523 2.7742C11.7361 2.40425 12.2639 2.40426 12.4477 2.7742L14.7953 7.49724C15.0144 7.93807 15.4358 8.24333 15.923 8.31405L21.1628 9.07464C21.5739 9.13431 21.7372 9.64007 21.4386 9.92884L17.6575 13.5862C17.3008 13.9313 17.1378 14.4305 17.2223 14.9197L18.1156 20.0924C18.1861 20.5004 17.7585 20.8123 17.3915 20.6206L12.6944 18.1675C12.2593 17.9403 11.7407 17.9403 11.3056 18.1675L6.60853 20.6206C6.24151 20.8123 5.81389 20.5004 5.88436 20.0924L6.77769 14.9197C6.86216 14.4305 6.69921 13.9313 6.34245 13.5862L2.56136 9.92884C2.26283 9.64007 2.42613 9.13431 2.83716 9.07464L8.07698 8.31405C8.56416 8.24333 8.98562 7.93807 9.20473 7.49724L11.5523 2.7742Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`url(#${gradientId})`}
        />
      </g>
      <defs>
        <linearGradient id={`${gradientId}`}>
          <stop offset="0%" stopColor={color} />
          <stop offset={`${offset}%`} stopColor={color} />
          <stop offset={`${offset}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ReviewStarIcon;
