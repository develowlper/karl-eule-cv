import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "./Root.css"
import { Outlet } from "react-router-dom";

export default function Root() {
  return <div>
    <Navigation />
    <Header />
    <Outlet />
  </div>
}
