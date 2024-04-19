import { useSelector,useDispatch } from "react-redux";
import CartCard from "./cartcard";
import { clearCart } from "../utils/cartSlice";
let Cart = () => {
  const cartItems = useSelector((Store) => Store.cart.items);
  const dispatch=useDispatch();
  let handleClearcart=()=>{
    alert("Clear the cart")
    dispatch(clearCart())
  }



  return (
    <div>
      <h1 className="font-bold tex-3xl">Cart Items - {cartItems.length}</h1>
    <button className="bg-green-200 rounded-lg border-2 border-solid border-black p-3 ml-4" onClick={()=>{
      handleClearcart()
    }}>Clear Cart</button>
      <div className="flex flex-wrap py-[11px] px-28">
        {cartItems.map(function (i) {
          return (
            <div>
              <CartCard  key={i.id}  {...i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
