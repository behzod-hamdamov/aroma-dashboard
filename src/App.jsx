import { RouterProvider } from "react-router"
import { router } from "@router"

function App() {

  return (
    <div className="min-h-screen bg-(--bg-primary) flex">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
