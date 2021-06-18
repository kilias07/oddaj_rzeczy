import Loginbar from "./partials/Loginbar";
import Navbar from "./partials/Navbar";

const Header = () => {
  return (
    <header className="w-full">
      <div className="xl:w-5/6">
        <Loginbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
