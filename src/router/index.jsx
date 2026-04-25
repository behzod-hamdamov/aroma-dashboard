import { createBrowserRouter } from "react-router";

// o'zgarmas constantalar
import { ROUTES } from "./routes";

// sahifalar
import { LoginPage } from "../pages/";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <></>,
  },
])