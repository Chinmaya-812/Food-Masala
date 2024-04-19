import { useEffect, useState } from "react";

const useAllResturant = () => {
  const [allrestruants, setAllRestruants] = useState([]);
  const [filterrestruants, setFilterRestruants] = useState([]);
  useEffect(() => {
    //API Call
    getResturants();
  }, []);
  async function getResturants() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    // Swiggy API (Kochi)
    const json = await data.json();

    //Optional Chaining
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json)
    setAllRestruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(allrestruants)
  return [allrestruants,filterrestruants];
};

export default useAllResturant;
