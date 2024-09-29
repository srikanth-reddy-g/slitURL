import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* Header */}
        {/* body */}
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default AppLayout;
