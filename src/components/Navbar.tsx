import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiBell,
  FiGlobe,
  FiLogOut,
} from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { GiCardRandom } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import logo from "../images/logo2.svg";
import { connect } from "react-redux";
import { actionTypes } from "../actionTypes";

interface Props {
  auth?: boolean;
  logoutUser: () => void;
}

const Navbar: React.FC<Props> = ({ auth = true, logoutUser }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const history = useHistory();

  const logoutHandler = () => {
    logoutUser();
    history.push("/");
  };

  useEffect(() => {
    setActiveTab(history.location.pathname);
  }, [history]);

  return (
    <>
      <nav className="Navbar">
        <Link to="/">
          <img src={logo} alt="Logo" height={35} />
        </Link>
        {auth ? (
          <>
            <ul className="Navbar__links">
              <li>
                <Link to="/" className={activeTab === "/" ? "active" : ""}>
                  <FiHome size={24} title="Home" />
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={activeTab === "/profile" ? "active" : ""}
                >
                  <FiUser size={24} title="Profile" />
                </Link>
              </li>
              <li>
                <Link
                  to="/gangs"
                  className={activeTab === "/gangs" ? "active" : ""}
                >
                  <FiUsers size={24} title="Gangs" />
                </Link>
              </li>
              <li>
                <Link
                  to="/memory-lane"
                  className={activeTab === "/memory-lane" ? "active" : ""}
                >
                  <BsClockHistory size={24} title="Memory lean" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <GiCardRandom size={24} title="Random memory" />
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <button>
                  <FiBell size={24} color="#2F0B4D" title="Notifications" />
                </button>
              </li>
              <li>
                <button>
                  <FiGlobe size={24} color="#2F0B4D" title="Language" />
                </button>
              </li>
              <li>
                <Link to="/edit-profile">
                  <FiUser size={24} color="#2F0B4D" title="Edit profile" />
                </Link>
              </li>
              <li>
                <button onClick={logoutHandler}>
                  <FiLogOut size={24} color="#2F0B4D" title="Logout" />
                </button>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn btn-secondary" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <nav className="MobileNavbar">
        <ul>
          <li>
            <Link to="/" className={activeTab === "/" ? "active" : ""}>
              <FiHome size={24} title="Home" />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={activeTab === "/profile" ? "active" : ""}
            >
              <FiUser size={24} title="Profile" />
            </Link>
          </li>
          <li>
            <Link
              to="/gangs"
              className={activeTab === "/gangs" ? "active" : ""}
            >
              <FiUsers size={24} title="Gangs" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsClockHistory size={24} title="Memory lean" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <GiCardRandom size={24} title="Random memory" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch({ type: actionTypes.LOGOUT_USER }),
});

export default connect(undefined, mapDispatchToProps)(Navbar);
