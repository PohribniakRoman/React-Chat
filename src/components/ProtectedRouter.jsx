import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ENDPOINTS } from "../ENDPOINTS";
import SendData from "../hooks/SendData";

export default function ProtectedRouter({ component: Component, ...rest }) {
  const [isAuthorized, updateAuthorizedStatus] = useState(null);
  useEffect(() => {
    async function checkToken() {
      const cookie = new Cookies();
      const token = cookie.get("token");
      if (token) {
        const resp = await (
          await SendData(ENDPOINTS.HOST + ENDPOINTS.SESSION, { token })
        ).json();
        updateAuthorizedStatus(resp);
      }else{
        updateAuthorizedStatus(false)
      }
    }
    checkToken();
  }, []);

  if (isAuthorized === null) {
    return "Loading...";
  }

  return isAuthorized ? <Component /> : <Navigate to={"/login"} replace />;
}
