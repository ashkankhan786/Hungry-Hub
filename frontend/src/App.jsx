import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import NavbarComp from "./components/navbar/NavbarComp";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
          <NavbarComp setShowLogin={setShowLogin} />
          <Home showLogin={showLogin} />
          <Footer />
        </>
      ),
    },
    {
      path: "cart",
      element: (
        <>
          {showLogin ? <LoginPopUp /> : <></>}
          <NavbarComp setShowLogin={setShowLogin} />
          <Cart />
          <Footer />
        </>
      ),
    },
    {
      path: "order",
      element: (
        <>
          {showLogin ? <LoginPopUp /> : <></>}
          <NavbarComp setShowLogin={setShowLogin} />
          <PlaceOrder />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
