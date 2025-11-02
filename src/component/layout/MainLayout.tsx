
// src/layout/MainLayout.jsx
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
