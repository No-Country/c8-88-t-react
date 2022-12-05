
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/users/index";
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectUser);
  return !isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;