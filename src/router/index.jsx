import { createBrowserRouter } from "react-router";

// o'zgarmas constantalar
import { ROUTES } from "./routes/routes";

// sahifalar
import {
  LoginPage,
  HomePage,
  NotFoundPage,
  ProfileInfoPage,
  BannersPage,
} from "@pages/";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { MainLayout } from "@layouts/";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: ROUTES.PROFILE_INFO,
            element: <ProfileInfoPage />,
          },
          {
            path: ROUTES.BANNERS,
            element: <BannersPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
