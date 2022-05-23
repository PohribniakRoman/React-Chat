import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ component: Component, ...rest }) {
  const [isAuthorized, updateAuthorizedStatus] = useState(null);
  useEffect(() => {
    updateAuthorizedStatus(true);
  }, []);

  if (isAuthorized === null) {
    return "Loading...";
  }

  return isAuthorized ? <Component /> : <Navigate to={"/login"} replace />;
}
