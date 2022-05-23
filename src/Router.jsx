import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import ProtectedRouter from "./components/ProtectedRouter";
import Register from "./components/auth/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRouter component={Home} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
