import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "./Dropdown";
import logo from "../nekologo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#212529"}}>
            <div className="container-fluid">
                <a className="navbar" href="#">
                    <img src={logo} alt="logo"/>
                    Nekopedia
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <div>
                                <Dropdown></Dropdown>
                            </div>
                        </li>
                    </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;