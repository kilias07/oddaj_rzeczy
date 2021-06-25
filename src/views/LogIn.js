import decoration from "../assets/images/Decoration.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div>
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="usernameEmail">Email</label>
          <input
            type="text"
            id="usernameEmail"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <span>Podany email jest nieprawidłowy</span>}
          <label htmlFor="usernamePassword">Hasło</label>
          <input
            type="text"
            id="usernamePassword"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password?.type === "minLength" && (
            <span>hasło musi mieć minimum 6 znaków</span>
          )}
          {errors.password?.type === "required" && (
            <span>to pole jest wymagane!</span>
          )}
        </div>
        <div>
          <button>
            <Link to="/rejestracja">Załóż konto</Link>
          </button>
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
