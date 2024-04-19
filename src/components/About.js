import { Outlet } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1>About US Page</h1>
      <p>This is the Namste React Live Course Chapter 07 - Finding the path 👋</p>
      <Outlet />
    </div>
  );
}
