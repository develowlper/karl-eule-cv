import { RouteObject } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
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
        element: <PortfolioPage />
      }
    ]
  },

]

export default routes;
