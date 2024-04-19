import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Title } from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import ResturantMenu from "./components/ResturantMenu.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { Provider } from "react-redux";
import Store from "./utils/Store.js";
import Cart from "./components/Cart.js";

//Lazy Loading
const InstaMart = lazy(() => import("./components/Instamart.js"));

//Class Components
import ProfileClass from "./components/ClassComponents/ProfileClass.js";

import UserContext from "./utils/UserContext.js";

const AppLayout = () => {
  const [userInfo, setUser] = useState({
    name: "Chinmaya Nimalpuri",
    Email: "chinmaya.nimalpuri@ibm.com",
  });
  return (
    <>
      <Provider store={Store}>
        <UserContext.Provider value={{ user: userInfo, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //i.e localhost:3000/about/profile
            // path:"/profile"       i.e   localhost:3000/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profileClass",
        element: <ProfileClass name={"Chinmaya"} tech={"React JS"} />,
      },
      {
        path: "/InstaMart",
        element: <InstaMart />,
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




// when you use useContext

// {/* By the help of this Provider method we can override the hard coded value which is
//     userContext file */}
//     <UserContext.Provider value={{ user: userInfo,setUser:setUser }}>
//     <Header />
//     {/* outlet is responsible for the fill the component as per the url ,where as the header and footer
//   is always present in the component */}
//     <Outlet />
//     <Footer />
//   </UserContext.Provider>
