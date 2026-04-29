import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = () => {
  const token = localStorage.getItem("access_token")
  return token ? <Outlet /> : <Navigate to="/login" replace />
}
