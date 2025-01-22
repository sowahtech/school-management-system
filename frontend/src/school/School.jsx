import { Outlet } from "react-router-dom";

const School = () => {
  return (
    <div>
      <h1>School component</h1>
      <Outlet />
    </div>
  );
};

export default School;
