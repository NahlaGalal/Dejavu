import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo2.svg";
import { FiHome, FiUser, FiUsers } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { GiCardRandom } from "react-icons/gi";

type Props = {
  auth: boolean;
};

const Footer: React.FC<Props> = ({ auth }) => {
  return (
    <footer className="Footer">
      <div className="Footer__section">
        <div className="Footer__logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="Footer__logo__img" />
          </Link>
          <p className="Footer__logo__heading">Dega-vu Memories</p>
        </div>
        <ul className="Footer__links">
          {auth ? (
            <>
              <li className="Footer__links__item">
                <Link to="/" className="Footer__links__item__link">
                  <span>
                    <FiHome size={18} title="Home" color="#2F0B4D" />
                  </span>
                  Home
                </Link>
              </li>
              <li className="Footer__links__item">
                <Link to="/profile" className="Footer__links__item__link">
                  <span>
                    <FiUser size={18} title="Profile" color="#2F0B4D" />
                  </span>
                  Profile
                </Link>
              </li>
              <li className="Footer__links__item">
                <Link to="/gangs" className="Footer__links__item__link">
                  <span>
                    <FiUsers size={18} title="Gangs" color="#2F0B4D" />
                  </span>
                  Gangs
                </Link>
              </li>
              <li className="Footer__links__item">
                <Link to="/" className="Footer__links__item__link">
                  <span>
                    <BsClockHistory
                      size={18}
                      title="Memory lean"
                      color="#2F0B4D"
                    />
                  </span>
                  Memory lane
                </Link>
              </li>
              <li className="Footer__links__item">
                <Link to="/" className="Footer__links__item__link">
                  <span>
                    <GiCardRandom
                      size={18}
                      title="Random memory"
                      color="#2F0B4D"
                    />
                  </span>
                  Random memory
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>

      <div className="Footer__rights">
        <p>&copy; 2021 - 2022 Copyright reserved to Deja vu</p>
      </div>
    </footer>
  );
};

export default Footer;
