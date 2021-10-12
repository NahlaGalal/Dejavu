import React from "react";
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
import logo from "../images/Deja Vu.svg";

interface Props {
  auth?: boolean;
}

const Navbar: React.FC<Props> = ({ auth = true }) => {
  return (
    <>
      <nav className="Navbar">
        <img src={logo} alt="Logo" />
        {auth ? (
          <>
            <ul className="Navbar__links">
              <li className="active">
                <Link to="/">
                  <FiHome size={24} title="Home" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiUser size={24} title="Profile" />
                </Link>
              </li>
              <li>
                <Link to="/">
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
            <ul>
              <li>
                <FiBell size={24} color="#2F0B4D" title="Notifications" />
              </li>
              <li>
                <FiGlobe size={24} color="#2F0B4D" title="Language" />
              </li>
              <li>
                <FiUser size={24} color="#2F0B4D" title="Edit profile" />
              </li>
              <li>
                <FiLogOut size={24} color="#2F0B4D" title="Logout" />
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
          <li className="active">
            <Link to="/">
              <FiHome size={24} title="Home" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiUser size={24} title="Profile" />
            </Link>
          </li>
          <li>
            <Link to="/">
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

export default Navbar;
