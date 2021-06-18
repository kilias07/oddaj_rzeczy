import { Link } from "react-router-dom";
const Loginbar = () => {
  return (
      <div className="loginbar__container">
        <ul>
          <Link to="/logowanie">
            <li>Zaloguj </li>
          </Link>
          <Link to="/rejestracja">
            <li className="border-2 border-yellow-300 py-1 px-2">Załóż konto</li>
          </Link>
        </ul>
      </div>
  );
};

export default Loginbar;
