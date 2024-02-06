import { FC } from "react";

type IProps = {
    checked?: boolean,
    tickColor: `#${string}`;
    circleColor: `#${string}`;
    className?: string;
    onClick?: () => void;
}

const CheckCircle:FC<IProps> = ({tickColor, circleColor, checked= false, ...props}) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20834 8.50017C1.20859 5.02152 3.6661 2.02747 7.07795 1.34905C10.4898 0.670623 13.9058 2.49678 15.2368 5.71072C16.5678 8.92465 15.4432 12.6313 12.5507 14.5637C9.6582 16.4962 5.80341 16.1163 3.34376 13.6564C1.97634 12.2889 1.2082 10.4341 1.20834 8.50017Z"
        stroke={tickColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {checked && <path
        d="M4.85419 8.50015L7.2844 10.9304L12.1459 6.06995"
        stroke={circleColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />}
    </svg>
  );
};

export default CheckCircle;
