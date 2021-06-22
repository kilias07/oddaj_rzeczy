import decoration from "../assets/images/Decoration.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login">
      <div>
        <h1>Załóż konto</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <form>
        <div>
          <label htmlFor="usernameEmail">Email</label>
          <input type="text" id="usernameEmail" />
          <label htmlFor="usernamePassword">Hasło</label>
          <input type="text" id="usernamePassword" />
          <label htmlFor="usernamePassword">Powtórz hasło</label>
          <input type="text" id="usernamePassword" />
        </div>
        <div>
          <button>
            <Link to="/logowanie">Zaloguj się</Link>
          </button>
          <button>Załóż konto</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;
