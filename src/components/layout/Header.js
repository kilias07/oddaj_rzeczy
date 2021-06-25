import Loginbar from "./partials/Loginbar";
import Navbar from "./partials/Navbar";

const Header = () => {
  return (
    <header>
      <div>
        <Loginbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
