import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Rating = ({ rating }) => {
  const stars = [];
  for (let index = 0; index < rating; index++) {
    stars.push(
      <div className="text-2xl mt-4 h-fit p-1">
        <MdOutlineStarPurple500 />
      </div>
    );
  }
  console.log(stars);
  return <div className={"flex text-center gap-1 flex-row"}>{...stars}</div>;
};

export default Rating;
