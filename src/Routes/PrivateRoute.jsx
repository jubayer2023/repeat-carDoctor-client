import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-4">
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
