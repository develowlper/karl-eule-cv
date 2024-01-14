import { RouteObject } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage, { loader as portfolioLoader } from "./pages/Portfolio";
import Root from "./pages/Root";
import CV from "./pages/CV";
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
      },
    ]
  },
  {
    path: '/cv',
    element: <CV />
  }
]

export default routes;
