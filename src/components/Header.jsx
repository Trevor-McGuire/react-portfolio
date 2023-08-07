import { Link, useLocation } from "react-router-dom";

import Nav from "./Nav";
import Sidebar from "./Sidebar";

function Header() {
  const currentPage = useLocation().pathname;
  const activeBtn = 'w3-button w3-white w3-border w3-border-blue'
  const Btn = 'w3-button w3-blue w3-border w3-border-blue'
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>Trevor McGuire</h1>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link
                  to="/"
                  className={
                    currentPage === "/" ? activeBtn : Btn
                  }
                >
                    Home
                </Link>
                <Link
                  to="/About"
                  className={
                    currentPage === "/About" ? activeBtn : Btn
                  }
                >
                    About
                </Link>
                <Link
                  to="/Skills"
                  className={
                    currentPage === "/Skills" ? activeBtn : Btn
                  }
                >
                    Skills
                </Link>
                <Link
                  to="/Education"
                  className={
                    currentPage === "/Education" ? activeBtn : Btn
                  }
                >
                    Education
                </Link>
                <Link
                  to="/Experience"
                  className={
                    currentPage === "/Experience" ? activeBtn : Btn
                  }
                >
                    Experience
                </Link>
                <Link
                  to="/Connect"
                  className={
                    currentPage === "/Connect" ? activeBtn : Btn
                  }
                >
                    Connect
                </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
