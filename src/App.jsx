import { RouterProvider } from "react-router"
import { router } from "./router"

function App() {

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
