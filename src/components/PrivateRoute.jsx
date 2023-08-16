import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const authStatus = useAuth();
  if (authStatus) {
    return children;
  }
  return <Navigate to="/" />;
};
export default PrivateRoute;
