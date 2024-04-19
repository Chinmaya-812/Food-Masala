import { IMG_CDN_URL } from "../config"
// import "../../index.css"
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => { 

  const {user}=useContext(UserContext);
  return (
    <>
      <div className="w-[250px] h-[350px] p-3 mx-4 my-3 shadow-lg rounded-md bg-gray-50 transition-transform duration-300 transform hover:scale-[1.1]">
        <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt="" className="w-full h-1/2 rounded-lg " />
        <h2 className="font-bold text-xl pt-4">{name}</h2>
        <p className="text-base pt-2">{cuisines.join(", ")}</p>
        <h4 className="text-lg">{avgRatingString} ⭐️</h4>
      
      </div>
    </>
  );
};

export default ResturantCard; 
