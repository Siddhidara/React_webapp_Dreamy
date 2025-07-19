import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="dreamy-brand">Dreamy</span>
        </Link>

        <ul className="nav nav-pills dreamy-nav">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${getActiveClass("/")}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className={`nav-link ${getActiveClass("/features")}`}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${getActiveClass("/about")}`}>
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
