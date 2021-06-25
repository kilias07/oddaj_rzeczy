import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav>
        <ul>
          <li>
            <NavHashLink to="/" smooth>
              Start
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#o_co_chodzi" smooth>
              O co chodzi?
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#o_nas" smooth>
              O nas
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#fundacje" smooth>
              Fundacje i organizacje
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#kontakt" smooth>
              Kontakt
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
