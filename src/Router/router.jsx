import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/RootPages/Home";
import Services from "../pages/RootPages/Services";
import Coverage from "../pages/RootPages/Coverage";
import AboutUs from "../pages/RootPages/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../pages/AuthPages/LogIn";
import Register from "../pages/AuthPages/Register";
import PrivateRoute from "./PrivateRoute";
import BeARider from "../pages/RootPages/BeARider";
import SendParcel from "../pages/RootPages/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/warehouses.json"),
        hydrateFallbackElement: <p>Loading...</p>
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "send-parcel",
        element: <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader: () => fetch("/warehouses.json"),
        hydrateFallbackElement: <p>Loading...</p>
      },
      {
        path: "be-a-rider",
        element: <PrivateRoute>
          <BeARider></BeARider>
        </PrivateRoute>
      }
    ]
  },
  {
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  }
])