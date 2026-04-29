import { createBrowserRouter } from "react-router";

// o'zgarmas constantalar
import { ROUTES } from "./routes/routes";

// sahifalar
import { LoginPage, HomePage } from "@pages/";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [<HomePage />],
  },
])