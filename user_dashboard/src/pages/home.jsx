import React from "react";
import { subCatagories, topChatagories } from "../utils/dataReterive";
import Rating from "../comp/rating";

const HomePage = () => {
  return (
    <div className={"min-h-screen bg-[#F9F9F9]"}>
      <div
        className={
          "relative flex flex-row justify-between h-[280px] pl-10 pt-20 p-10 bg-[#008cff]"
        }
      >
        <div className={"flex flex-col gap-4"}>
          <p className={"text-white font-bold text-2xl "}>where to?</p>
          <div className="bg-white w-[500px] rounded-xl p-5">
            <input type="text" name="searchQuery" className={"w-full"} />
          </div>
        </div>
        <div className={" absolute right-10 top-3 flex flex-col gap-3"}>
          <div className={"flex flex-row gap-2 justify-end "}>
            <div className="bg-white w-[75px] h-[75px] rounded-full"></div>
            <div className={"w-[200px] text-center bg-white rounded-l-[50px]"}>
              something
            </div>
          </div>
          <div
            className={
              " text-center w-[400px] h-[155px] bg-white rounded-l-[100px]"
            }
          >
            something
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-3 px-10 mt-6 py-5"}>
        <div className={"flex flex-row pl-[0px] justify-between "}>
          <div className={"font-semibold text-2xl"}>
            Discover your new favourite Place
          </div>
          <div
            className={
              "bg-[#5aa2dd] p-2 px-7 text-md  rounded-full text-blue-700"
            }
          >
            see all
          </div>
        </div>
        <div className={" pl-[0px] py-5 grid grid-cols-4 gap-5 "}>
          {topChatagories.map((item) => (
            <li
              className={
                "list-none flex py-4 pl-5 flex-row gap-3 border bg-white rounded-xl"
              }
            >
              <div className={"p-2 rounded-sm bg-[#d9d9d9]"}>{item.name}</div>
              <div className={"font-semibold text-center py-2 px-3"}>
                {item.title}
              </div>
            </li>
          ))}
        </div>
        <div className={"list-none grid grid-cols-4 gap-5 pr-0 pl-0 "}>
          {subCatagories.map((item) => (
            <li className={"bg-white p-[10px] rounded-[10px] border"}>
              <div className="flex flex-row">
                <div
                  className={
                    "w-16 h-16 p-3 mx-4 mr-2 ml-0 mb-3 rounded-full bg-white border border-blue-400"
                  }
                ></div>
                <Rating rating={item.rating} />
              </div>
              <div>{item.name}</div>
              <div className={"line-clamp-5 text-sm"}>{item.title}</div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
