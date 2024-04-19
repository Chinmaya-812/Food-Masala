import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import { addItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import { notify } from "./AlertTost";
import { ToastContainer } from "react-toastify";
import ItemAccrodion from "./ItemAccrodion";

const ResturantMenu = () => {
  const params = useParams();
  
  const { id } = params;

  const resturantInfo = useResturant(id);
  console.log(resturantInfo);
  const dispatch = useDispatch();
  


  return resturantInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-flow-col ml-3">
      <div className="mt-3">
        <h1 className="font-bold text-4xl my-2">Resturant id :{id} </h1>
        <h2 className="text-2xl text-gray-600 my-4">
          {resturantInfo?.data?.cards[2]?.card?.card?.info.name}
        </h2>
        <img
          src={`${IMG_CDN_URL}/${resturantInfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId}`}
          width={"300px"}
        />
        <h3 className="mt-2 text-3xl text-gray-600">
          {resturantInfo?.data?.cards[2]?.card?.card?.info.city}
        </h3>
        <h3 className="mt-2 text-2xl text-gray-600">
          {resturantInfo?.data?.cards[2]?.card?.card?.info.areaName}
        </h3>
        <h3 className="mt-2 text-xl text-gray-600">
          {resturantInfo?.data?.cards[2]?.card?.card?.info.avgRating}
        </h3>
        <h3 className="mt-2">
          {resturantInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage}
        </h3>

        <div>
          <button
            className="rounded-lg border-2 border-solid border-black p-3 ml-4 bg-purple-400"
            onClick={() => {
              handleAddItem();
            }}
          >
            Add Item
          </button>

          <button
            className="rounded-lg border-2 border-solid border-black p-3 ml-4 bg-purple-400"
            onClick={() => {
              clearCartItem();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="p-6">
        {(resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
          .slice(
            2,
            resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards.length / 2
          )
          .map(function (i, k) {
            {/* return <Section index={k} {...i} key={k}/>; */}
            return <ItemAccrodion {...i} key={k} />
          })}
      </div>
    </div>
  );
};

export default ResturantMenu;
