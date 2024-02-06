import { FC } from "react";

const Calendar: FC = ({ ...props }) => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 14C22.4477 14 22 14.4477 22 15V16H18C15.7909 16 14 17.7909 14 20V42C14 44.2091 15.7909 46 18 46H42C44.2091 46 46 44.2091 46 42V20C46 17.7909 44.2091 16 42 16H38V15C38 14.4477 37.5523 14 37 14C36.4477 14 36 14.4477 36 15V16H24V15C24 14.4477 23.5523 14 23 14ZM42 18C43.1046 18 44 18.8954 44 20V21H16V20C16 18.8954 16.8954 18 18 18H42ZM44 42V22.5H16V42C16 43.1046 16.8954 44 18 44H42C43.1046 44 44 43.1046 44 42Z"
        fill="white"
      />
    </svg>
  );
};

export default Calendar;
