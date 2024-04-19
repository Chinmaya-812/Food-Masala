import { IMG_CDN_URL } from "../config";

const CartCard = ({ name, id, imageId, ratings,price,itemAttribute }) => {
  return (
    <div className="w-[250px] h-[400px] p-3 m-3 shadow-lg rounded-md bg-pink-50 ">
      <img
        src={`${IMG_CDN_URL}/${imageId}`}
        alt=""
        className="w-full h-1/2 rounded-lg transition-transform duration-300 transform hover:scale-[1.15]"
      />
      <h2 className="font-bold text-xl pt-2">{name}</h2>
      <h4 className="text-lg">{ratings.aggregatedRating.ratings} ⭐️</h4>
      <h6 className="text-sm text-red-400"> Price :- {price/100}</h6>
      <h5>{itemAttribute.vegClassifier==='NONVEG'?"🔴":"🟢"}</h5>
      <h6 className="text-sm text-red-400"> {id}</h6>
    </div>
  );
};

export default CartCard;
