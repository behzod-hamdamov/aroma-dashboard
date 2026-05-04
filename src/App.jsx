import { RouterProvider } from "react-router"

import { router } from "@router"

import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="min-h-screen bg-(--bg-primary) flex">
      <RouterProvider router={router} />
      <ToastContainer limit={2} newestOnTop />
    </div>
  )
}

export default App
