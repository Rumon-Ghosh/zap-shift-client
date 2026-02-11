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
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashBoardPages/DashboardHome";
import MyParcel from "../pages/DashBoardPages/MyParcel";
import PaymentSuccess from "../pages/DashBoardPages/PaymentSuccess";
import MyInvoice from "../pages/DashBoardPages/MyInvoice";

export const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch("/warehouses.json"),
        hydrateFallbackElement: (
          <p className="text-center text-3xl mt-20">Loading...</p>
        ),
      },
      { path: "about-us", element: <AboutUs /> },
    ],
  },

  // AUTH ROUTES
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "register", element: <Register /> },
    ],
  },

  // PROTECTED ROOT ROUTES
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "send-parcel",
        element: <SendParcel />,
        loader: () => fetch("/warehouses.json"),
        hydrateFallbackElement: (
          <p className="text-center text-3xl mt-20">Loading...</p>
        ),
      },
      {
        path: "be-a-rider",
        element: <BeARider />,
      },
    ],
  },

  // DASHBOARD ROUTES
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      // future routes:
      { path: "my-parcels", element: <MyParcel /> },
      { path: "payment-success", element: <PaymentSuccess></PaymentSuccess> },
      { path: "my-invoices", element: <MyInvoice></MyInvoice> },
      // { path: "profile", element: <Profile /> },
    ],
  },
]);
