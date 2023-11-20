import { Link } from "react-router-dom";

export default function Navigation() {
  return <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/portfolio">Portfolio</Link>
  </nav>
}