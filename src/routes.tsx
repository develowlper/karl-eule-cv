import { RouteObject } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage, { loader as portfolioLoader } from "./pages/Portfolio";
import Root from "./pages/Root";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
        loader: portfolioLoader
      }
    ]
  },

]

export default routes;
