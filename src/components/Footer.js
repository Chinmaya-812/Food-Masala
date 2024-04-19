//Way to export Noraml Function

import { useContext } from "react";
import UserContext from "../utils/UserContext";
export default function Footer() {
  let a1={
    border:'2px solid blue'
  }

  const {user}=useContext(UserContext)
  return (
    <div style={a1}>
      <h2 style={{textAlign:'center'}}>Footer</h2>
      <h4 className="text-xl text-gray-500 text-center">{user.Email}</h4>
    </div>
  );
}
