import React, { useState } from "react";

import { notify } from "./AlertTost";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../config";


const ItemAccrodion = ({ card }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const dispatch = useDispatch();

  return (
   
   <div className="block ">
     <div className="py-2 mx-auto w-[65%] ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full m-2 "
      >
        <span className="text-orange-600 text-2xl">{card.card.title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* {console.log(card)} */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul>
            {(card.card.itemCards === undefined
              ? card.card.categories[0].itemCards
              : card.card.itemCards
            ).map(function (j) {
              return (
                <li
                  className="m-2 h-[50%] bg-gray-100 flex justify-between"
                  key={j.card.info.id}
                >
               
                  <div className="w-[75%]">
                  <h5 className="ml-4 mt-2 text-md">{j.card.info.itemAttribute.vegClassifier==='NONVEG'?"🔴":"🟢"}</h5>
                    <h2 className="text-xl font-[600] mx-2">{j.card.info.name}</h2>
                    <p className="text-[16px] m-2"> <span>₹</span>{j.card.info.price/100}<span>.00</span></p>
                    <p className="text-[14px] ml-3"> <span className="text-green-600 text-lg">★</span> {j.card.info?.ratings?.aggregatedRating.rating} <span>[{j.card.info?.ratings?.aggregatedRating.ratingCountV2}]</span></p>
                    <h6 className="mt-2 mx-2">{j.card.info.description}</h6>
                    <button
                      className="bg-amber-500 text-white px-5 py-3 rounded-lg m-3 hover:bg-[#87acec]"
                      onClick={() => {
                        console.log(j.card.info);
                        dispatch(addItem(j.card.info));
                      }}
                    >       
                      Add 
                    </button>
                    

                    <ToastContainer />


                  </div>
                  <div className="w-1/4">
                    <img src={`${IMG_CDN_URL}/${j?.card?.info.imageId}`} alt=""  className="h-full m-0"/>
                   
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ItemAccrodion;
