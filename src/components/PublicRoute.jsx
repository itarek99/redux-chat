import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const authStatus = useAuth();
  if (!authStatus) {
    return children;
  }
  return <Navigate to="/inbox" />;
};
export default PublicRoute;
