import { useContext, useEffect, useState } from "react";
import { resturantList } from "../constant";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { filterData } from "../utils/useFilterResturant";
import useOnline from "../utils/useOnline"; 
import useAllResturant from "../utils/useAllResturant";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [allrestruants, FilterRest] = useAllResturant();
  const [filterrestruants, setFilterRestruants] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser}=useContext(UserContext)

  console.log("JS");
  console.log(allrestruants);
  console.log(FilterRest);

  //early return { when we dont have anything on allresturuamts dont render anything}
  if (!allrestruants) return null;

  //Conditioanl Rendering
  //if resturant is empty => Shimmer UI
  //if resturant have data => actual data UI
  return allrestruants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search p-4 mb-2 h-full flex justify-center items-center mt-4">
        <div className="w-[33%] ">
          <input
            type="text"
            className="border-2 border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-600 hover:border-orange-400 w-full rounded-3xl"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

        </div>
        <button
          className="px-4 py-2 bg-[#a6c1ee] mx-2 rounded-full text-white transition duration-150 hover:bg-[#87acec]"
          onClick={() => {
            const data = filterData(search, allrestruants);
            setFilterRestruants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="Slider">

      </div>
      
      <div className="flex flex-wrap py-[11px] px-28 justify-center">
        {(filterrestruants?.length === 0 ? FilterRest : filterrestruants).map(
          function (i) {
            return (
              <Link
                to={`/resturant/${i.info.id}`}
                key={i.info.id}
                className="myLink"
              >
                <ResturantCard key={i.info.id} {...i.info} />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};
export default Body;
