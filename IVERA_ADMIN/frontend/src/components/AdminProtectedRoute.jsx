import { Navigate } from "react-router-dom"

export default function AdminProtectedRoute({ children }) {

  const isAuth = localStorage.getItem("adminAuth")

  return isAuth ? children : <Navigate to="/admin/login" />
}