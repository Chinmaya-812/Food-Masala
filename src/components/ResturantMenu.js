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
  console.log(resturantInfo?.data?.cards[2]?.card?.card?.info);
  const dispatch = useDispatch();

  return resturantInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-flow-row mt-8">
      <div className="w-full flex items-center justify-center bg-gray-200 shadow-lg">
        {/* <h1 className="font-bold text-4xl my-2">Resturant id :{id} </h1> */}

        <div className=" flex flex-row h-[250px] p-2 shadow-md">
          <div className="w-[25%]">
            <img
              src={`${IMG_CDN_URL}/${resturantInfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId}`}
               className="w-[80%]"
            />
          </div>
          <div className="w-[75%] pl-6">
            <h2 className="text-4xl pt-3">{resturantInfo?.data?.cards[2]?.card?.card?.info.name}</h2>
            <p className="pt-3">{resturantInfo?.data?.cards[2]?.card?.card?.info.cuisines.join(",")}</p>
            <h3 className="mt-2 pt-3"><span className="bg-green-700 px-2 py-1 text-white font-[400] rounded-md"> ★ {resturantInfo?.data?.cards[2]?.card?.card?.info.avgRating}  </span> <span className="mx-3 font-[700] text-xl"> | </span>
            <span className=" font-[500]">{resturantInfo?.data?.cards[2]?.card?.card?.info.sla.minDeliveryTime} - {resturantInfo?.data?.cards[2]?.card?.card?.info.sla.maxDeliveryTime} MINS</span> <span className="mx-3 font-[700] text-xl"> | </span>
            <span className=" font-[500]">{resturantInfo?.data?.cards[2]?.card?.card?.info.costForTwoMessage}</span></h3>
          </div>
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
            {
              /* return <Section index={k} {...i} key={k}/>; */
            }
            return <ItemAccrodion {...i} key={k} />;
          })}
      </div>
    </div>
  );
};

export default ResturantMenu;
