import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }: { children: ReactNode }) => {
  let data = localStorage.getItem("user");
  if (data) {
    return <>{children}</>;
  }

  return <Navigate to={"/"} />;
};

export default PrivateRouter;
