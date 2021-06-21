import decoration from "../assets/images/Decoration.svg";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login">
      <div>
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <form>
        <div>
          <label htmlFor="usernameEmail">Email</label>
          <input type="text" id="usernameEmail" />
          <label htmlFor="usernamePassword">Hasło</label>
          <input type="text" id="usernamePassword" />
        </div>
        <div>
          <button>
            <Link to="/rejestracja">Załóż konto</Link>
          </button>
          <button>Zaloguj się</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
