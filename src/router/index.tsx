
import MainLayout from "@/component/layout/MainLayout";
import AboutPage from "@/component/page/AboutPage";
import HomePage from "@/component/page/HomePage";
import PortfolioPage from "@/component/page/PortfolioPage";
import ServicePage from "@/component/page/ServicePage";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "services",
        Component: ServicePage,
      },
      {
        path: "portfolio",
        Component: PortfolioPage,
      },
    ]
  },

]);

export default router;
