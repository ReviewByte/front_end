import React from "react";
import { catagoryTop } from "../utils/dataReterive";

const Catagories = () => {
  return (
    <div>
      <div className={"bg-[#008cff] w-screen px-auto  pt-[80px] h-[280px]"}>
        <div className="text-white mx-auto w-fit">
          <p className={"text-3xl font-semibold m-2"}>
            What are you looking for?
          </p>
          <div
            className={
              "text-black bg-white flex flex-row justify-between px-2 w-[570px] py-2 rounded-md"
            }
          >
            <input type="text" name="input_value " />
            <button
              type="button"
              className={
                "text-white font-semibold bg-[#008cff] px-3 py-2 rounded-[20px]"
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={"pl-10 py-3"}>
        <h1 className="text-2xl font-semibold">
          Explore companies by categories
        </h1>
        <div className="grid grid-cols-3 w-full">
          {catagoryTop.map((category, index) => (
            <li className={"list-none bg-white p-5"} key={index}>
              <div className={"rounded-t-xl"}>
                <div className="bg-slate-200 w-10 h-10"></div>
                <h1>{category.title}</h1>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagories;
