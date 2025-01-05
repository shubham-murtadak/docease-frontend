import ForgetPassword from "@/authentication/ForgetPassword";
import SignIn from "@/authentication/SignIn";
import SignUp from "@/authentication/SignUp";
import Error404 from "@/components/404/Error404";
import MainLayout from "@/layouts/Main-Layout/MainLayout";
import Home from "@/pages/Home/Home";
import MyProfile from "@/pages/my-profile/MyProfile";
import OnlineBooking from "@/pages/online-booking/OnlineBooking";
import ServiceDetails from "@/pages/service-details/ServiceDetails";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const found = data.find((d) => d.id === params.id);
          return { found, data };
        },
      },
      {
        path: "/online-booking",
        element: (
          <PrivateRoutes>
            <OnlineBooking />
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
