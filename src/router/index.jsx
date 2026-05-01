import { createBrowserRouter } from "react-router";

// o'zgarmas constantalar
import { ROUTES } from "./routes/routes";

// sahifalar
import { LoginPage, HomePage, NotFoundPage } from "@pages/";
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
        element: <MainLayout/>,
        children: [
          {
            path: "/",
            element: <HomePage />,
          }
        ]
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])