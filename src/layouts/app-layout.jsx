import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen flex flex-col">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Header />
          <Outlet />
        </div>
      </main>
      <footer className="p-6 text-center bg-gray-800 text-white">
        <div className="container mx-auto px-4">Made with 💖 by Srikanth Reddy</div>
      </footer>
    </div>
  );
};

export default AppLayout;
