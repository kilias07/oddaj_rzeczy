import decoration from "../assets/images/Decoration.svg";

const Logout = () => {
  return (
    <div className="logout">
      <h1 >Wylogowanie nastąpiło pomyślnie!</h1>
      <img src={decoration} alt="decoration"/>
      <button>Strona główna</button>
    </div>
  )
}

export default Logout;
